import { ICartItem } from '@repo/models';

type CartItemsResponse = { cartItems: ICartItem[] };

type CartItemError = {
  errors: {
    location: string;
    msg: string;
    param: string;
    value: string;
  }[];
};

export type { CartItemsResponse, CartItemError };
