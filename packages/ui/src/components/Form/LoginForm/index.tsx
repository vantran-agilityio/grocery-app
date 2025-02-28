import { useCallback, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Switch, TextInput, View } from 'react-native';

// Components
import { Button, EmailIcon, Input, LockIcon, Typography } from '@components';

// Types
import { LoginFormData } from '@repo/models/types';

// Constants
import { RootStackParamList, ScreenNames } from '@repo/constants';

// Utils
import { isDisableSubmitButton } from '@repo/utils';

// Stores

// Styles
import styles from './styles';
import { useAuthenticator } from '@repo/hooks';
import { FontWeight } from '@interfaces';

const LoginForm = () => {
  const [isSwitchEnabled, setIsEnabled] = useState(false);

  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });

  // Refs
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  // Hooks
  const { isLoading, errors, login, clearEmailError, clearPasswordError } =
    useAuthenticator();

  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, ScreenNames.Login>
    >();

  const handleLogin = useCallback(() => {
    emailRef.current?.blur();
    passwordRef.current?.blur();

    login(formData);
  }, [formData]);

  const handleFocusEmail = useCallback(() => {
    clearEmailError();
  }, []);

  const handleFocusPassword = useCallback(() => {
    clearPasswordError();
  }, []);

  const handleNavigateToForgotPassword = () => {
    navigation.navigate(ScreenNames.ForgotPassword);
  };

  const handleRememberPassword = useCallback(() => {
    setIsEnabled((previousState) => !previousState);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Input
          ref={emailRef}
          icon={<EmailIcon />}
          placeholder="Email Address"
          autoComplete="email"
          keyboardType="email-address"
          isError={!!errors.email}
          onChangeText={(email) => setFormData((prev) => ({ ...prev, email }))}
          onFocus={handleFocusEmail}
        />

        <Input
          ref={passwordRef}
          icon={<LockIcon />}
          placeholder="● ● ● ● ● ●"
          autoComplete="password"
          isError={!!errors.password}
          onChangeText={(password) =>
            setFormData((prev) => ({ ...prev, password }))
          }
          onFocus={handleFocusPassword}
        />
      </View>
      <View style={styles.optionWrapper}>
        <View style={styles.rememberMe}>
          <Switch onChange={handleRememberPassword} value={isSwitchEnabled} />
          <Typography fontWeight={FontWeight.Medium}>Remember me</Typography>
        </View>

        <Typography
          style={styles.forgotPassword}
          onPress={handleNavigateToForgotPassword}
          fontWeight={FontWeight.Medium}
        >
          Forgot Password?
        </Typography>
      </View>
      <Button
        onPress={handleLogin}
        disabled={isDisableSubmitButton(formData) || isLoading}
        testID="login-submit"
      >
        Login
      </Button>
    </View>
  );
};

export default LoginForm;
