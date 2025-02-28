import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';

// Services
import { CartItemError } from '@services/cart/type';
import { addToCart } from '@services/cart';

// Types
import { useStore } from '@repo/stores';

// Models
import { CartItem } from '@repo/models';

const useCartItemAdd = () => {
  const setCartItemAdded = useStore.use.setCartItemAdded();
  const enableLoading = useStore.use.enableLoading();
  const disableLoading = useStore.use.disableLoading();

  return useMutation({
    mutationFn: async ({
      productId,
      quantity = 1,
    }: {
      productId: number;
      quantity?: number;
    }) => {
      enableLoading();
      const response = await addToCart(productId, quantity);
      return new CartItem(response);
    },

    onSuccess: (cartItemAdded) => {
      setCartItemAdded(cartItemAdded);
      disableLoading();
    },
    onError: (error: AxiosError<CartItemError>) => {
      disableLoading();
      return error;
    },
  });
};

export default useCartItemAdd;
