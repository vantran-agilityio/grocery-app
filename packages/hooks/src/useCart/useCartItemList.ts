import { useQuery, UseQueryResult } from '@tanstack/react-query';

// Services

// Constants
import { QUERY_KEY } from '@repo/constants';

// Models
import { CartItem } from '@repo/models';

// Services
import { getCartItemList } from '@services/cart';

const useCartItemList = (): UseQueryResult<CartItem[]> => {
  return useQuery({
    queryKey: [QUERY_KEY.CART],
    queryFn: async () => {
      const response = await getCartItemList();
      const result: CartItem[] = [];

      response.cartItems.forEach((cartItem: CartItem) => {
        result.push(new CartItem({ ...cartItem }));
      });

      return result;
    },
  });
};

export default useCartItemList;
