/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useCallback } from 'react';
import Image from 'next/image';
import { useQueryClient } from '@tanstack/react-query';

import styles from './styles.module.css';
import { CartItem } from '@repo/models';
import {
  AddIcon,
  Button,
  colors,
  FontWeight,
  LoadingIndicator,
  MinusIcon,
  SizeType,
  Typography,
  TypoVariant,
} from '@repo/ui';
import {
  useCartItemDelete,
  useCartItemUpdate,
  useProductDetail,
  useProductUnitList,
} from '@repo/hooks';
import { QUERY_KEY } from '@repo/constants';

interface IProps {
  cartItem: CartItem;
  userId: number;
}

const Item = ({ cartItem, userId }: IProps) => {
  const { mutateAsync: deleteCartItem } = useCartItemDelete(userId);
  const { mutateAsync: updateCartItem } = useCartItemUpdate(userId);

  const queryClient = useQueryClient();

  const { data: productUnits } = useProductUnitList();

  const { data: product, isLoading } = useProductDetail(cartItem.productId);
  useCartItemDelete(userId);

  const handleDecrease = useCallback(() => {
    if (cartItem.quantity > 1) {
      updateCartItem(
        {
          cartItemId: cartItem.id,
          quantity: cartItem.quantity - 1,
        },
        {
          onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY.CART] }),
        }
      );
    }
  }, [cartItem]);

  const handleIncrease = useCallback(() => {
    updateCartItem(
      { cartItemId: cartItem.id, quantity: cartItem.quantity + 1 },
      {
        onSuccess: () =>
          queryClient.invalidateQueries({ queryKey: [QUERY_KEY.CART] }),
      }
    );
  }, [cartItem]);

  const handleRemoveItem = (id: number) => {
    deleteCartItem(id, {
      onSuccess: () =>
        queryClient.invalidateQueries({ queryKey: [QUERY_KEY.CART] }),
    });
  };

  if (isLoading || !product) {
    return <LoadingIndicator />;
  }

  return (
    <div key={cartItem.id} className={styles.cartItem}>
      <div className={styles.productInfo}>
        <Image
          src={product.image}
          alt={product.name}
          width={100}
          height={100}
          quality={100}
          className={styles.productImage}
        />
        <div className={styles.productDetails}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              variant={TypoVariant.Paragraph1}
              fontWeight={FontWeight.Medium}
            >
              {product.name}
            </Typography>
            <Typography
              size={SizeType.Small}
              fontWeight={FontWeight.Medium}
              variant={TypoVariant.Paragraph1}
            >
              {
                productUnits?.find((unit) => unit.id === product.productUnitId)
                  ?.name
              }
            </Typography>
          </div>

          <div>
            <Typography variant={TypoVariant.Paragraph2}>
              {`$${product.price}`}
            </Typography>
          </div>
        </div>
      </div>

      <div className={styles.actionButtons}>
        <div className={styles.quantityControls}>
          <MinusIcon
            style={{
              cursor: 'pointer',
            }}
            onPress={handleDecrease}
          />

          <span className={styles.quantity}>{cartItem.quantity}</span>

          <AddIcon
            style={{
              cursor: 'pointer',
            }}
            onPress={handleIncrease}
          />
        </div>

        <Button
          style={{ backgroundColor: colors.red, paddingHorizontal: 10 }}
          onPress={() => handleRemoveItem(cartItem.id)}
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default Item;
