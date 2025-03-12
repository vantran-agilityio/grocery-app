import { useCallback, useEffect, useRef, useState } from 'react';
import { Switch, TextInput, View } from 'react-native';

// Components
import { Button, EmailIcon, Input, LockIcon, Typography } from '@components';

// Types
import { LoginFormData } from '@repo/models';

// Utils
import { isDisableSubmitButton } from '@repo/utils';

// Stores

// Styles
import styles from './styles';
import { useAuthenticator } from '@repo/hooks';
import { FontWeight } from '@interfaces';

interface Props {
  onSuccess: () => void;
  onError: (message: string) => void;
  onForgotPassword: () => void;
}

const LoginForm = ({ onError, onSuccess, onForgotPassword }: Props) => {
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

  const handleLogin = useCallback(() => {
    emailRef.current?.blur();
    passwordRef.current?.blur();

    login(formData, onSuccess, onError);
  }, [formData, login, onError, onSuccess]);

  const handleFocusEmail = useCallback(() => {
    clearEmailError();
  }, []);

  const handleFocusPassword = useCallback(() => {
    clearPasswordError();
  }, []);

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
          onPress={onForgotPassword}
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
