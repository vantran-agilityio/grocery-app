import { memo, useCallback } from 'react';
import { Alert, View } from 'react-native';

// Components
import VerticalCards from '../Cards/VerticalCards';
import { Typography, Button } from '@components';

// Types
import { TypoVariant, SizeType, FontWeight } from '@interfaces';

// Utils
import { areEqual } from '@repo/utils';

// Stores
import { useStore } from '@repo/stores';

// Constants
import { ALERT } from '@repo/constants';

// Styles
import styles from './styles';

interface IProps {
  cartItemIds: number[];
}

const ShoppingCart = ({ cartItemIds }: IProps) => {
  const totalCost = useStore.use.totalCost();

  const handleCheckout = useCallback(() => {
    Alert.alert(ALERT.COMING_SOON);
  }, []);

  return (
    <View style={styles.container}>
      <VerticalCards cartItemIds={cartItemIds} />
      <View style={styles.checkout}>
        <View style={styles.costItems}>
          <View style={styles.costItem}>
            <Typography size={SizeType.Small} fontWeight={FontWeight.Medium}>
              Subtotal
            </Typography>
            <Typography size={SizeType.Small} fontWeight={FontWeight.Medium}>
              {`$${totalCost}`}{' '}
            </Typography>
          </View>

          <View style={styles.costItem}>
            <Typography size={SizeType.Small} fontWeight={FontWeight.Medium}>
              Shipping charges
            </Typography>
            <Typography size={SizeType.Small} fontWeight={FontWeight.Medium}>
              $0.00
            </Typography>
          </View>
        </View>

        <View style={styles.costTotal}>
          <Typography
            size={SizeType.Large}
            variant={TypoVariant.Paragraph2}
            fontWeight={FontWeight.SemiBold}
          >
            Total
          </Typography>

          <Typography
            size={SizeType.Large}
            variant={TypoVariant.Paragraph2}
            fontWeight={FontWeight.SemiBold}
          >{`$${totalCost}`}</Typography>
        </View>
        <Button onPress={handleCheckout}>Checkout</Button>
      </View>
    </View>
  );
};

export default memo(ShoppingCart, areEqual);
