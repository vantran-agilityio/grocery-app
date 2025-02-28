import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Toast from 'react-native-root-toast';

// Types
import {
  LoginFormData,
  LoginFormErrors,
  SignUpFormData,
  SignUpFormErrors,
} from '@repo/models/types';

// Stores
import { useStore } from '@repo/stores';

// Hooks
import useAuthLogin from './useAuth/useAuthLogin';

// Constants
import {
  RootStackParamList,
  SECURE_STORE,
  SUCCESS,
  ScreenNames,
} from '@repo/constants';

// Utils
import { save, validateLoginForm, validateSignUpForm } from '@repo/utils';
import useAuthSignUp from './useAuth/useAuthSignUp';

const useAuthenticator = () => {
  const [errors, setErrors] = useState<SignUpFormErrors | LoginFormErrors>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Stores
  const setPhone = useStore.use.setPhone();
  const disableLoading = useStore.use.disableLoading();
  const enableLoading = useStore.use.enableLoading();

  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, ScreenNames.Login>
    >();

  const {
    mutateAsync: loginAsync,
    data: loginData,
    isPending: isLoginPending,
    isSuccess: isLoginSuccess,
    isError: isLoginError,
    error: loginError,
  } = useAuthLogin();

  const {
    mutateAsync: signUpAsync,
    data: signUpData,
    isPending: isSignUpPending,
    isSuccess: isSignUpSuccess,
    isError: isSignUpError,
    error: signUpError,
    variables: signUpVariables,
  } = useAuthSignUp();

  useEffect(() => {
    setIsLoading(isLoginPending || isSignUpPending);

    if (isLoginSuccess && loginData?.token) {
      Toast.show(SUCCESS.LOGIN);

      // save auth token to secure store
      save(SECURE_STORE.AUTH_TOKEN, loginData.token);

      axios.defaults.headers.common['Authorization'] = loginData.token;

      navigation.navigate(ScreenNames.HomeStack);

      disableLoading();
    } else if (isLoginError) {
      axios.defaults.headers.common['Authorization'];

      if (loginError.response?.data.errors?.length) {
        Toast.show(loginError.response.data.errors[0].msg);
      } else {
        Toast.show(loginError.message);
      }

      disableLoading();
    }

    if (isSignUpSuccess && signUpData) {
      Toast.show(SUCCESS.sentCodeToEmail(signUpVariables.email));

      // save otp token to secure store
      save(SECURE_STORE.OTP_TOKEN, signUpData.token);

      disableLoading();

      navigation.navigate(ScreenNames.VerifyNumber);
    } else if (isSignUpError) {
      axios.defaults.headers.common['Authorization'] = '';

      if (signUpError.response?.data.errors?.length) {
        Toast.show(signUpError.response?.data.errors[0].msg);
      } else {
        Toast.show(signUpError.message);
      }

      disableLoading();
    }
  }, [
    isSignUpPending,
    isLoginPending,
    isLoginSuccess,
    isLoginError,
    loginData,
    isSignUpSuccess,
    isSignUpError,
    signUpData,
  ]);

  const login = useCallback(
    (formData: LoginFormData) => {
      const { errors, isFormValid } = validateLoginForm(formData);

      setErrors(errors);

      if (!isFormValid) {
        // Show the first error on Toast
        Toast.show(Object.values(errors)[0] as string);

        return;
      }

      loginAsync(formData);
      enableLoading();
    },
    [loginAsync, validateLoginForm]
  );

  const signUp = useCallback(
    (formData: SignUpFormData) => {
      const { errors, isFormValid } = validateSignUpForm(formData);

      setErrors(errors);

      if (!isFormValid) {
        // Show the first error on Toast
        Toast.show(Object.values(errors)[0] as string);
        return;
      }

      setPhone(formData.phone);

      enableLoading();

      signUpAsync(formData);
    },
    [signUpAsync, validateSignUpForm]
  );

  const clearEmailError = useCallback(() => {
    setErrors((prevErrors) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { email: omitted, ...rest } = prevErrors;
      return rest;
    });
  }, []);

  const clearPasswordError = useCallback(() => {
    setErrors((prevErrors) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password: omitted, ...rest } = prevErrors;
      return rest;
    });
  }, []);

  const clearPhoneNumberError = useCallback(() => {
    setErrors((prevErrors) => {
      if ('phoneNumber' in prevErrors) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { phoneNumber: omitted, ...rest } = prevErrors;
        return rest;
      }
      return prevErrors;
    });
  }, []);

  return {
    isLoading,
    errors,
    login,
    signUp,
    clearEmailError,
    clearPasswordError,
    clearPhoneNumberError,
  };
};

export default useAuthenticator;
