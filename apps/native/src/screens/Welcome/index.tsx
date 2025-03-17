import { Link } from 'expo-router';

// Layouts
import { AuthLayout } from '@layouts';

// Types

// Constants
import { APP_ROUTES } from '@repo/constants';

// Components
import { Button, UserIcon } from '@repo/ui';

// Images
import { Images } from '@assets/images';
import { extractUserIdFromToken } from '@repo/utils';

const Welcome = () => {
  return (
    <AuthLayout
      description="Welcome to the app. Create an account to get started."
      title="Welcome"
      image={Images.firstTimeLogin}
    >
      <Link href={APP_ROUTES.AUTH_SIGNUP} asChild>
        <Button icon={<UserIcon />}>Create an account</Button>
      </Link>
    </AuthLayout>
  );
};

export default Welcome;
