import { useCallback } from 'react';
import LogRocket from '@logrocket/react-native';
import { useRouter } from 'expo-router';
import { useStore } from '@repo/stores';

// Components
import { LoginForm, useToast } from '@repo/ui';

// Layouts
import { AuthLayout } from '@layouts';

// Images
import { Images } from '@assets/images';
import { APP_ROUTES, SUCCESS } from '@repo/constants';

const Login = () => {
  const router = useRouter();
  const toast = useToast();

  const userId = useStore((state) => state.userId) || '';

  const handleSuccess = useCallback(() => {
    toast.show(SUCCESS.LOGIN);

    LogRocket.identify(userId.toString(), {
      login: 'success',
    });

    router.navigate(APP_ROUTES.POST_AUTH_STACK);
  }, []);

  const handleError = useCallback((message: string) => {
    toast.show({ message, type: 'error' });
  }, []);

  const handleNavigateToForgotPassword = useCallback(() => {
    router.navigate(APP_ROUTES.AUTH_FORGOT_PASSWORD);
  }, []);

  return (
    <AuthLayout
      title="Welcome back !"
      description="Sign in to your account"
      image={Images.loginBackground}
      isLogin
    >
      <LoginForm
        onError={handleError}
        onSuccess={handleSuccess}
        onForgotPassword={handleNavigateToForgotPassword}
      />
    </AuthLayout>
  );
};

export default Login;
