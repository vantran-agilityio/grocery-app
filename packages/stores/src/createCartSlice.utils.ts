import { CartItem } from '@repo/models';

export const calculateTotalCost = (cartItems: CartItem[]) => {
  return Object.values(cartItems).reduce(
    (totalCost, cartItem) =>
      totalCost + (cartItem.price ? cartItem.quantity * cartItem.price : 0),
    0
  );
};
