import { CartItem } from '@repo/models';
import { ById } from '@repo/models/types';

export const cartList: CartItem[] = [
  { id: 1, productId: 1, quantity: 20 },
  { id: 2, productId: 2, quantity: 10 },
  { id: 3, productId: 3, quantity: 10 },
  { id: 4, productId: 4, quantity: 10 },
];

export const cartItemIds = cartList.map((cartItem) => cartItem.id);

const cartItemById: ById<CartItem> = {
  1: { id: 1, productId: 1, quantity: 10 },
  2: { id: 2, productId: 2, quantity: 10 },
  3: { id: 3, productId: 3, quantity: 10 },
  4: { id: 4, productId: 4, quantity: 10 },
};

export default cartItemById;
