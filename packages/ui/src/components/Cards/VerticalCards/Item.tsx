import { useCallback, useEffect } from 'react';
import {
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

// Components
import { LoadingIndicator, Typography, AddIcon, MinusIcon } from '@components';

// Types
import { FontWeight, SizeType, TypoVariant } from '@interfaces';

// Stores
import { useStore } from '@repo/stores';

// Hooks
import { useProductDetail } from '@repo/hooks';

// Styles
import styles from './styles';

interface IProps {
  cartItemId: number;
}

const Item = ({ cartItemId }: IProps) => {
  // Stores
  const getProductUnitNameById = useStore.use.getProductUnitNameById();
  const updateCartItemQuantity = useStore.use.updateCartItemQuantity();
  const updateCartItemPrice = useStore.use.updateCartItemPrice();
  const cartItemById = useStore.use.cartItemById();

  const cartItem = cartItemById[cartItemId];

  const { data: product, isSuccess } = useProductDetail(cartItem?.productId);

  useEffect(() => {
    if (isSuccess && product) {
      updateCartItemPrice(cartItem.id, product.price);
    }
  }, [isSuccess, cartItem?.id, product]);

  const handleDecrease = useCallback(() => {
    if (cartItem.quantity > 1) {
      updateCartItemQuantity(cartItem.id, cartItem.quantity - 1);
    }
  }, [cartItem]);

  const handleIncrease = useCallback(() => {
    updateCartItemQuantity(cartItem.id, cartItem.quantity + 1);
  }, [cartItem]);

  return (
    <TouchableWithoutFeedback testID="VerticalCard">
      {product ? (
        <View style={styles.itemContainer}>
          <View style={styles.imageWrapper}>
            <Image source={{ uri: product.image }} style={styles.image} />
          </View>

          <View style={styles.content}>
            <Typography
              size={SizeType.Small}
              style={styles.price}
              fontWeight={FontWeight.Medium}
            >{`$${product.price}`}</Typography>
            <Typography variant={TypoVariant.Paragraph2}>
              {product.name}
            </Typography>
            <Typography
              size={SizeType.Small}
              fontWeight={FontWeight.Medium}
              variant={TypoVariant.Paragraph1}
            >
              {getProductUnitNameById(product.productUnitId)}
            </Typography>
          </View>

          <View style={styles.quantityWrapper}>
            <TouchableOpacity
              hitSlop={{ top: 5, left: 5, right: 5, bottom: 5 }}
              onPress={handleIncrease}
            >
              <View>
                <AddIcon />
              </View>
            </TouchableOpacity>
            <Typography variant={TypoVariant.Paragraph2}>
              {cartItem.quantity}
            </Typography>
            <TouchableOpacity
              hitSlop={{ top: 5, left: 5, right: 5, bottom: 5 }}
              onPress={handleDecrease}
            >
              <View>
                <MinusIcon />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <LoadingIndicator />
      )}
    </TouchableWithoutFeedback>
  );
};

export default Item;
