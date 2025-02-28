import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';

// Services
import { resetPassword } from '@services/auth';
import { ResetPasswordError } from '@services/auth/type';

const useAuthResetPassword = () => {
  return useMutation({
    mutationFn: (email: string) => {
      return resetPassword(email);
    },

    onError: (error: AxiosError<ResetPasswordError>) => {
      return error;
    },
  });
};

export default useAuthResetPassword;
