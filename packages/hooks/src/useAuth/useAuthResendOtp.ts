import { useMutation } from '@tanstack/react-query';

// Services
import { resendOtp } from '@services/auth';

// Types
import { ResendCodePayload } from '@repo/models/types';

// Stores
import { useStore } from '@repo/stores';

const useAuthResendOTP = () => {
  const enableLoading = useStore.use.enableLoading();
  const disableLoading = useStore.use.disableLoading();

  return useMutation({
    mutationFn: ({ phone }: ResendCodePayload) => {
      enableLoading();
      return resendOtp(phone);
    },
    onSuccess: () => {
      disableLoading();
    },
    onError: (error: Error) => {
      disableLoading();
      return error;
    },
  });
};

export default useAuthResendOTP;
