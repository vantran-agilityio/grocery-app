import { useCallback, useState } from 'react';
import { View } from 'react-native';

// Components
import { Button, EmailIcon, Input } from '@components';

// Utils
import { validateForgotPasswordFrom } from '@repo/utils';

// Hooks
import { useAuthResetPassword } from '@repo/hooks';

// Stores
import { useStore } from '@repo/stores';

// Styles
import styles from './styles';

interface Props {
  onSuccess: (message: string) => void;
  onError: (message: string) => void;
}

const ForgotPasswordForm = ({ onError, onSuccess }: Props) => {
  const [email, setEmail] = useState('');

  const { mutateAsync } = useAuthResetPassword();

  // Stores
  const enableLoading = useStore.use.enableLoading();
  const disableLoading = useStore.use.disableLoading();

  const handleSendOTP = useCallback(() => {
    const { errors, isFormValid } = validateForgotPasswordFrom(email);

    enableLoading();

    if (!isFormValid) {
      // Show the first error on Toast
      onError(Object.values(errors)[0] as string);

      return;
    }

    mutateAsync(email, {
      onSuccess: () => {
        onSuccess(email);
      },
      onError: (error) => {
        onError(error.message);
      },
    });

    disableLoading();
  }, [disableLoading, email, enableLoading, mutateAsync, onError, onSuccess]);

  return (
    <View style={styles.container}>
      <Input
        icon={<EmailIcon />}
        placeholder="Email Address"
        autoComplete="email"
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      <Button onPress={handleSendOTP} disabled>
        Reset Password
      </Button>
    </View>
  );
};

export default ForgotPasswordForm;
