'use client';

import { AuthLayout } from '@layouts';
import { LoginForm, Typography, useToast } from '@repo/ui';
import { useCallback } from 'react';
import { ALERT, SUCCESS } from '@repo/constants';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LoginScreen = () => {
  const toast = useToast();
  const route = useRouter();

  const handleLoginSuccess = useCallback(() => {
    toast.show(SUCCESS.LOGIN);
    route.push('/home');
  }, []);

  const handleLoginError = useCallback((message: string) => {
    toast.show({ message, type: 'error' });
  }, []);

  const handleForgotPassword = useCallback(() => {
    toast.show(ALERT.COMING_SOON);
  }, []);

  return (
    <AuthLayout title="Login">
      <LoginForm
        onError={handleLoginError}
        onSuccess={handleLoginSuccess}
        onForgotPassword={handleForgotPassword}
      />

      <div>
        <Typography>Don&apos;t have an account? </Typography>
        <Link href="/signup">
          <Typography>Sign Up</Typography>
        </Link>
      </div>
    </AuthLayout>
  );
};

export default LoginScreen;
