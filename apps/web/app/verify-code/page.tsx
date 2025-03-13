/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { AuthLayout } from '@layouts';
import { OtpForm, useToast } from '@repo/ui';
import { useCallback } from 'react';
import type { VerifyCodeError } from '@repo/hooks';
import { SUCCESS } from '@repo/constants';

const VerifyCodeScreen = () => {
  const toast = useToast();

  const handleSignUpSuccess = useCallback(() => {
    toast.show(SUCCESS.SIGNUP.VERIFIED);
  }, []);

  const handleSignUpError = useCallback((error?: VerifyCodeError) => {
    if (error?.errors.length) {
      toast.show(error.errors[0].msg);
    }
  }, []);

  const handleResendOTPResult = useCallback((message: string) => {
    toast.show(message);
  }, []);

  return (
    <AuthLayout title="Verify Code">
      <OtpForm
        onResendOTPResult={handleResendOTPResult}
        onError={handleSignUpError}
        onSuccess={handleSignUpSuccess}
      />
    </AuthLayout>
  );
};

export default VerifyCodeScreen;
