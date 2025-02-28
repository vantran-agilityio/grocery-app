import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Toast from 'react-native-root-toast';

// Components
import { Button, EmailIcon, Input } from '@components';

// Types

// Constants
import { RootStackParamList, SUCCESS, ScreenNames } from '@repo/constants';

// Utils
import { validateForgotPasswordFrom } from '@repo/utils';

// Hooks
import { useAuthResetPassword } from '@repo/hooks';

// Stores
import { useStore } from '@repo/stores';

// Styles
import styles from './styles';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');

  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, ScreenNames.ForgotPassword>
    >();

  const { mutateAsync, isPending, isSuccess, isError, error } =
    useAuthResetPassword();

  // Stores
  const enableLoading = useStore.use.enableLoading();
  const disableLoading = useStore.use.disableLoading();

  useEffect(() => {
    if (isSuccess) {
      disableLoading();

      Toast.show(SUCCESS.passwordSentToEmail(email));

      navigation.navigate(ScreenNames.Login);
    } else if (isError) {
      disableLoading();

      if (error.response?.data.errors?.length) {
        Toast.show(error.response.data.errors[0].msg);
      } else {
        Toast.show(error.message);
      }
    }
  }, [isSuccess, isError, error]);

  const handleSendOTP = useCallback(() => {
    const { errors, isFormValid } = validateForgotPasswordFrom(email);

    if (!isFormValid) {
      // Show the first error on Toast
      Toast.show(Object.values(errors)[0] as string);

      return;
    }

    mutateAsync(email);
    enableLoading();
  }, [email]);

  return (
    <View style={styles.container}>
      <Input
        icon={<EmailIcon />}
        placeholder="Email Address"
        autoComplete="email"
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      <Button onPress={handleSendOTP} disabled={!email || isPending}>
        Reset Password
      </Button>
    </View>
  );
};

export default ForgotPasswordForm;
