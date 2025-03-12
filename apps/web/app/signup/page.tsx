'use client';

import { AuthLayout } from '@layouts';
import { SignUpForm, Typography, useToast } from '@repo/ui';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

const SignUpScreen = () => {
  const route = useRouter();
  const toast = useToast();

  const handleSignUpSuccess = useCallback((message: string) => {
    toast.show(message);
    route.push('/verify-code');
  }, []);

  const handleSignUpError = useCallback((message: string) => {
    toast.show({ message, type: 'error' });
  }, []);

  return (
    <AuthLayout title="Sign Up">
      <SignUpForm onError={handleSignUpError} onSuccess={handleSignUpSuccess} />

      <div>
        <Typography>Already have an account? </Typography>
        <Link href="/">
          <Typography>Login</Typography>
        </Link>
      </div>
    </AuthLayout>
  );
};

export default SignUpScreen;
