import { memo, useCallback, useEffect, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Toast from 'react-native-root-toast';

// Components
import { Button, CartIcon, Typography } from '@components';
import { AddIcon, MinusIcon } from '@components';

// Types
import { FontWeight, SizeType, TypoVariant } from '@interfaces';

// Stores
import { useStore } from '@repo/stores';

// Hooks
import { useCartItemAdd, useCartItemUpdate } from '@repo/hooks';

// Models
import { CartItem } from '@repo/models';

// Constants
import { SUCCESS } from '@repo/constants';

// Styles
import styles from './styles';

interface IProps {
  productId: number;
}

const ProductFooter = ({ productId: productId }: IProps) => {
  const [cartItem, setCartItem] = useState<CartItem | null>(null);
  const [quantity, setQuantity] = useState(1);

  // Stores
  const cartItemById = useStore.use.cartItemById();
  const getCartItemByProductId = useStore.use.getCartItemByProductId();

  // Queries
  const {
    mutateAsync: addToCart,
    isPending: isAddCartPending,
    isSuccess: isAddCartItemSuccess,
    isError: isAddCartItemError,
    error: cartItemError,
  } = useCartItemAdd();

  const {
    mutateAsync: updateCartItem,
    isPending: isUpdateCartPending,
    isSuccess: isCartItemUpdated,
    error: updateCartItemError,
    isError: isUpdateCartItemError,
  } = useCartItemUpdate();

  const cartItemId = getCartItemByProductId(productId)?.id;

  useEffect(() => {
    if (isAddCartItemSuccess) {
      Toast.show(SUCCESS.ADD_TO_CART);
    } else if (isAddCartItemError) {
      if (cartItemError.response?.data.errors?.length) {
        Toast.show(cartItemError.response.data.errors[0].msg);
      } else {
        Toast.show(cartItemError.message);
      }
    }
  }, [isAddCartItemSuccess, isAddCartItemError, cartItemError]);

  useEffect(() => {
    if (cartItemId) {
      const cartItem = cartItemById[cartItemId];

      setCartItem(cartItem);
      setQuantity(cartItem.quantity);
    }

    return () => {
      setQuantity(1);
      setCartItem(null);
    };
  }, [cartItemId]);

  useEffect(() => {
    if (isCartItemUpdated) {
      Toast.show(SUCCESS.UPDATE_CART_ITEM);
    } else if (isUpdateCartItemError) {
      if (updateCartItemError.response?.data.errors?.length) {
        Toast.show(updateCartItemError.response.data.errors[0].msg);
      } else {
        Toast.show(updateCartItemError.message);
      }
    }
  }, [isCartItemUpdated, isUpdateCartItemError, updateCartItemError]);

  const handleIncreaseQuantity = useCallback(() => {
    setQuantity((prev) => prev + 1);
  }, []);

  const handleDecreaseQuantity = useCallback(() => {
    setQuantity((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
      return 1;
    });
  }, []);

  const handleSubmit = useCallback(() => {
    if (cartItem) {
      updateCartItem({ cartItemId: cartItem.id, quantity });
    } else {
      addToCart({ productId, quantity });
    }
  }, [productId, quantity, cartItem]);

  return (
    <View style={styles.footer}>
      <View style={styles.quantity}>
        <Typography size={SizeType.Small}>Quantity</Typography>
        <View style={styles.quantityCount}>
          <TouchableOpacity
            hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
            style={styles.quantityItem}
            onPress={handleDecreaseQuantity}
            testID="decrease-quantity"
          >
            <MinusIcon />
          </TouchableOpacity>
          <View style={[styles.quantityItem, styles.quantityNumber]}>
            <Typography
              fontWeight={FontWeight.Medium}
              size={SizeType.Large}
              variant={TypoVariant.Paragraph2}
            >
              {quantity}
            </Typography>
          </View>
          <TouchableOpacity
            hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
            style={styles.quantityItem}
            onPress={handleIncreaseQuantity}
            testID="add-quantity"
          >
            <AddIcon />
          </TouchableOpacity>
        </View>
      </View>
      <Button
        disabled={isAddCartPending || isUpdateCartPending}
        icon={<CartIcon />}
        onPress={handleSubmit}
      >
        {cartItem ? 'Update' : 'Add to cart'}
      </Button>
    </View>
  );
};

export default memo(ProductFooter);
