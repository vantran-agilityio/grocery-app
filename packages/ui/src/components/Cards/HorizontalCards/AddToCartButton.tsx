import { useCallback, useEffect, useRef, useState } from 'react';
import { TouchableWithoutFeedback, View, TouchableOpacity } from 'react-native';

// Components
import { AddIcon, CartTinyIcon, MinusIcon } from '@components';
import { Typography } from '@components';
// import Toast from 'react-native-root-toast';

// Interfaces

// Themes
import { colors } from '@themes';

// Stores
import { useStore } from '@repo/stores';

// Hooks
import {
  useDebounce,
  useCartItemAdd,
  useCartItemDelete,
  useCartItemUpdate,
} from '@repo/hooks';

// Constants
import { SUCCESS } from '@repo/constants';

// Styles
import styles from './styles';
import { FontWeight, TypoVariant } from '@interfaces';

interface IProps {
  productId: number;
}

const AddToCartButton = ({ productId }: IProps) => {
  // Stores
  const getCartItemByProductId = useStore.use.getCartItemByProductId();
  const cartItemById = useStore.use.cartItemById();

  const cartItemId = getCartItemByProductId(productId)?.id;
  const cartItem = cartItemId ? cartItemById[cartItemId] : null;

  const [quantity, setQuantity] = useState<number>(cartItem?.quantity || 1);

  const debouncedQuantity = useDebounce<number>(quantity);

  const isMounted = useRef(false);

  // Queries
  const {
    mutateAsync: addToCart,
    isSuccess: isAddCartItemSuccess,
    isError: isAddCartItemError,
    error: cartItemError,
  } = useCartItemAdd();

  const {
    mutateAsync: deleteCartItem,
    isSuccess: isDeleteCartItemSuccess,
    error: deleteCartItemError,
    isError: isDeleteCartItemError,
  } = useCartItemDelete();

  const {
    mutateAsync: updateCartItem,
    isSuccess: isUpdateCartItemSuccess,
    error: updateCartItemError,
    isError: isUpdateCartItemError,
  } = useCartItemUpdate();

  useEffect(() => {
    if (cartItem) {
      setQuantity(cartItem.quantity);
    }
  }, [cartItem?.quantity]);

  useEffect(() => {
    if (isAddCartItemSuccess) {
      // Toast.show(SUCCESS.ADD_TO_CART);
    } else if (isAddCartItemError) {
      if (cartItemError.response?.data.errors?.length) {
        // Toast.show(cartItemError.response.data.errors[0].msg);
      } else {
        // Toast.show(cartItemError.message);
      }
    }
  }, [isAddCartItemSuccess, isAddCartItemError, cartItemError]);

  useEffect(() => {
    if (isDeleteCartItemSuccess) {
      // Toast.show(SUCCESS.DELETE_CART_ITEM);
    } else if (isDeleteCartItemError) {
      if (deleteCartItemError.response?.data.errors?.length) {
        // Toast.show(deleteCartItemError.response.data.errors[0].msg);
      } else {
        // Toast.show(deleteCartItemError.message);
      }
    }
  }, [isDeleteCartItemSuccess, isDeleteCartItemError, deleteCartItemError]);

  useEffect(() => {
    if (isUpdateCartItemSuccess) {
      // Toast.show(SUCCESS.UPDATE_CART_ITEM);
    } else if (isUpdateCartItemError) {
      if (updateCartItemError.response?.data.errors?.length) {
        // Toast.show(updateCartItemError.response.data.errors[0].msg);
      } else {
        // Toast.show(updateCartItemError.message);
      }
    }
  }, [isUpdateCartItemSuccess, isUpdateCartItemError, updateCartItemError]);

  useEffect(() => {
    if (!isMounted.current) {
      // Prevent from running on-mount
      isMounted.current = true;
      return;
    }

    if (cartItem && cartItem.quantity !== quantity) {
      updateCartItem({ cartItemId: cartItem.id, quantity: debouncedQuantity });
    }
  }, [debouncedQuantity]);

  const handleAddToCart = useCallback(() => {
    addToCart({ productId });
  }, [addToCart, productId]);

  const handleDecrease = useCallback(() => {
    if (cartItem) {
      if (quantity === 1) {
        deleteCartItem(cartItem.id);
      } else {
        setQuantity((prev) => {
          if (prev > 1) {
            return prev - 1;
          }
          return 1;
        });
      }
    }
  }, [cartItem, quantity]);

  const handleIncrease = useCallback(() => {
    if (cartItem) {
      setQuantity((prev) => prev + 1);
    }
  }, [cartItem]);

  return (
    <>
      {!cartItem ? (
        <TouchableWithoutFeedback onPress={handleAddToCart}>
          <View style={styles.button}>
            <CartTinyIcon color={colors.primary.dark} />
            <Typography
              variant={TypoVariant.Paragraph2}
              style={(styles.baseTitle, styles.cartText)}
            >
              Add to cart
            </Typography>
          </View>
        </TouchableWithoutFeedback>
      ) : (
        <View style={styles.quantityWrapper}>
          <TouchableOpacity
            hitSlop={{ top: 5, left: 5, right: 5, bottom: 5 }}
            onPress={handleDecrease}
            testID="decrease-button"
          >
            <View style={styles.minus}>
              <MinusIcon />
            </View>
          </TouchableOpacity>

          <Typography
            variant={TypoVariant.Paragraph2}
            style={styles.baseTitle}
            fontWeight={FontWeight.Medium}
          >
            quantity
          </Typography>

          <TouchableOpacity
            hitSlop={{ top: 5, left: 5, right: 5, bottom: 5 }}
            onPress={handleIncrease}
            testID="increase-button"
          >
            <View style={styles.add}>
              <AddIcon />
            </View>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default AddToCartButton;
