import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';

// Services
import { updateCartItem } from '@services/cart';
import { CartItemError } from '@services/cart/type';

// Types
import { useStore } from '@repo/stores';

// Models
import { CartItem } from '@repo/models';

const useCartItemUpdate = () => {
  const updateCartItemQuantity = useStore.use.updateCartItemQuantity();

  return useMutation({
    mutationFn: async ({
      cartItemId,
      quantity,
    }: {
      cartItemId: number;
      quantity: number;
    }) => {
      const response = await updateCartItem(cartItemId, quantity);
      return new CartItem(response);
    },

    onSuccess: (cartItemUpdated) => {
      updateCartItemQuantity(cartItemUpdated.id, cartItemUpdated.quantity);
    },
    onError: (error: AxiosError<CartItemError>, { cartItemId, quantity }) => {
      // Set back the quantity if failure
      updateCartItemQuantity(cartItemId, quantity);
      return error;
    },
  });
};

export default useCartItemUpdate;
