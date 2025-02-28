import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';

// Services
import { CartItemError } from '@services/cart/type';
import { deleteCartItem } from '@services/cart';

// Types
import { useStore } from '@repo/stores';

const useCartItemDelete = () => {
  const enableLoading = useStore.use.enableLoading();
  const disableLoading = useStore.use.disableLoading();
  const deleteCartItemById = useStore.use.deleteCartItemById();

  return useMutation({
    mutationFn: (cartItemId: number) => {
      enableLoading();
      return deleteCartItem(cartItemId);
    },
    onSuccess: (_, cartItemId) => {
      deleteCartItemById(cartItemId);
      disableLoading();
    },
    onError: (error: AxiosError<CartItemError>) => {
      return error;
    },
  });
};

export default useCartItemDelete;
