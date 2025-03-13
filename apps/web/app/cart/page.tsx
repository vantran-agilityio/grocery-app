import { ShoppingCart } from '@components';
import { PostAuthLayout } from '@layouts';
import { Typography } from '@repo/ui';

export default async function CartPage() {
  return (
    <PostAuthLayout>
      <Typography size={30} style={{ textAlign: 'center' }}>
        Cart
      </Typography>
      <ShoppingCart />
    </PostAuthLayout>
  );
}
