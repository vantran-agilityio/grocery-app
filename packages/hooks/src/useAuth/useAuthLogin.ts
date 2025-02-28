import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';

// Types
import { LoginFormData } from '@repo/models/types';
import { LoginError } from '@services/auth/type';

// Services
import { login } from '@services/auth';

const useAuthLogin = () => {
  return useMutation({
    mutationFn: (formData: LoginFormData) => login(formData),
    onError: (error: AxiosError<LoginError>) => {
      return error;
    },
  });
};

export default useAuthLogin;
