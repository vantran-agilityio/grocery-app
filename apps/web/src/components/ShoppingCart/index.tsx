'use client';

import {
  Button,
  FontWeight,
  LoadingIndicator,
  Typography,
  TypoVariant,
} from '@repo/ui';
import { useCartItemList } from '@repo/hooks';
import { useStore } from '@repo/stores';

import styles from './styles.module.css';

import Item from './Item';

const ShoppingCart = () => {
  const [userId] = useStore((state) => [state.userId]);

  const { data, isLoading } = useCartItemList(userId || 0);

  if (isLoading) {
    return <LoadingIndicator></LoadingIndicator>;
  }

  const sortedCartItems = data?.sort((a, b) => a.id - b.id);

  if (!sortedCartItems || sortedCartItems.length === 0) {
    return (
      <div>
        <div className={styles.emptyCart}>
          <Typography variant={TypoVariant.Paragraph1}>
            Your cart is empty. Start shopping to add items to your cart.
          </Typography>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        flex: 1,
        flexGrow: 1,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div className={styles.cartList} style={{ flex: 1, overflowY: 'auto' }}>
        {sortedCartItems.map((item) => (
          <Item key={item.id} cartItem={item} userId={userId || 0} />
        ))}
      </div>

      <div className={styles.summary} style={{ flexShrink: 0 }}>
        <div className={styles.summaryRow}>
          <Typography variant={TypoVariant.Paragraph1}>
            Shipping charges:
          </Typography>
          <Typography variant={TypoVariant.Paragraph1}>$0</Typography>
        </div>
        <div className={styles.summaryRow}>
          <Typography
            variant={TypoVariant.Paragraph1}
            fontWeight={FontWeight.Bold}
          >
            Total:
          </Typography>
          <Typography
            variant={TypoVariant.Paragraph1}
            fontWeight={FontWeight.Bold}
          >
            0
          </Typography>
        </div>

        <Button style={{}} onPress={() => alert('Proceeding to checkout!')}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default ShoppingCart;
