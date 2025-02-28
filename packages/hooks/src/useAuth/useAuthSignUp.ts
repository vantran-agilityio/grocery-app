import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';

// Types
import { SignUpFormData } from '@repo/models/types';

// Services
import { signUp } from '@services/auth';
import { SignUpFormError } from '@services/auth/type';

const useAuthSignUp = () => {
  return useMutation({
    mutationFn: (formData: SignUpFormData) => {
      return signUp(formData);
    },
    onError: (error: AxiosError<SignUpFormError>) => {
      return error;
    },
  });
};

export default useAuthSignUp;
