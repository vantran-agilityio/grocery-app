// Services
import { DELETE, GET, POST, PATCH } from '@services/clientRequest';

// Constants
import { ROUTES } from '@repo/constants';

// Types
import { CartItemsResponse } from './type';

// Models
import { ICartItem } from '@repo/models';

export const getCartItemList = async () =>
  await GET<CartItemsResponse>(ROUTES.CART.GET_ALL);

export const addToCart = async (productId: number, quantity: number) =>
  await POST<ICartItem>(ROUTES.CART.ADD, {
    productId,
    quantity,
  });

export const deleteCartItem = async (id: number) =>
  await DELETE(ROUTES.CART.deleteByProductId(id));

export const updateCartItem = async (id: number, quantity: number) =>
  await PATCH<ICartItem>(ROUTES.CART.updateCartItem(id), {
    quantity,
  });
