/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useRef, useState } from 'react';
import { TextInput, View } from 'react-native';

// Components
import { Button, EmailIcon, Input, LockIcon, PhoneIcon } from '@components';

// Types
import { SignUpFormData, SignUpFormErrors } from '@repo/models';

// Utils
import { isDisableSubmitButton } from '@repo/utils';

// Hooks
import { useAuthenticator } from '@repo/hooks';

// Styles
import styles from './styles';

interface Props {
  onSuccess: (message: string) => void;
  onError: (message: string) => void;
}

const SignUpForm = ({ onSuccess, onError }: Props) => {
  const [formData, setFormData] = useState<SignUpFormData>({
    email: '',
    phone: '',
    password: '',
  });

  // Refs
  const emailRef = useRef<TextInput>(null);
  const phoneRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  // Hooks
  const {
    isLoading,
    errors,
    clearEmailError,
    clearPasswordError,
    clearPhoneNumberError,
    signUp,
  } = useAuthenticator();

  const handleSubmitForm = () => {
    emailRef.current?.blur();
    passwordRef.current?.blur();

    signUp(formData, onSuccess, onError);
  };

  const handleFocusEmail = useCallback(() => {
    clearEmailError();
  }, []);

  const handleFocusPassword = useCallback(() => {
    clearPasswordError();
  }, []);

  const handleFocusPhone = useCallback(() => {
    clearPhoneNumberError();
  }, []);

  return (
    <View style={styles.container}>
      <Input
        ref={emailRef}
        icon={<EmailIcon />}
        placeholder="Email address"
        keyboardType="email-address"
        isError={!!errors.email}
        onChangeText={(email) => setFormData((prev) => ({ ...prev, email }))}
        onFocus={handleFocusEmail}
      />

      <Input
        ref={phoneRef}
        icon={<PhoneIcon />}
        placeholder="Phone number"
        keyboardType="numeric"
        isError={!!(errors as SignUpFormErrors).phoneNumber}
        onChangeText={(phone) => setFormData((prev) => ({ ...prev, phone }))}
        onFocus={handleFocusPhone}
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

      <Button
        style={styles.submitButton}
        onPress={handleSubmitForm}
        disabled={isDisableSubmitButton(formData) || isLoading}
      >
        Signup
      </Button>
    </View>
  );
};

export default SignUpForm;
