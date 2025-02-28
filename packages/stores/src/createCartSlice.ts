import { StateCreator } from 'zustand';

import { ById } from '@repo/models/types';
import { CartItem } from '@repo/models';
import { createById, removeById } from '@repo/utils';
import { calculateTotalCost } from './createCartSlice.utils';

type State = {
  cartItemById: ById<CartItem>;
  cartItemIds: number[];
  totalCost: number;
};

type Action = {
  setCartItems: (cartItems: CartItem[]) => void;
  setCartItemAdded: (itemAdded: CartItem) => void;
  deleteCartItemById: (id: number) => void;
  getCartItemByProductId: (id: number) => CartItem | null;
  updateCartItemQuantity: (cartItemId: number, quantity: number) => void;
  updateCartItemPrice: (id: number, price: number) => void;
};

export type CartState = State & Action;

const DEFAULT_STATE: State = {
  cartItemById: {},
  cartItemIds: [],
  totalCost: 0,
};

const createCartSlice: StateCreator<CartState, [], [], CartState> = (
  set,
  get
) => ({
  ...DEFAULT_STATE,
  setCartItems: (cartItems: CartItem[]) =>
    set(() => ({
      cartItemById: createById<CartItem>(cartItems),
      cartItemIds: Object.values(cartItems).map((cartItem) => cartItem.id),
    })),
  setCartItemAdded: (itemAdded: CartItem) =>
    set((state) => ({
      cartItemById: {
        ...state.cartItemById,
        [itemAdded.id]: itemAdded,
      },
      cartItemIds: [...state.cartItemIds, itemAdded.id],
    })),
  deleteCartItemById: (id: number) =>
    set((state) => {
      const cartItemById = removeById(state.cartItemById, id);

      const totalCost = calculateTotalCost(cartItemById as CartItem[]);

      return {
        cartItemById,
        totalCost,
        cartItemIds: state.cartItemIds.filter(
          (cartItemId) => cartItemId !== id
        ),
      };
    }),
  getCartItemByProductId: (productId: number) =>
    Object.values(get().cartItemById).find(
      (cartItem) => cartItem.productId === productId
    ) || null,
  updateCartItemQuantity: (cartItemId: number, quantity: number) => {
    set((state) => {
      const newCartItemById = {
        ...state.cartItemById,
        [cartItemId]: {
          ...state.cartItemById[cartItemId],
          quantity,
        },
      };

      const totalCost = calculateTotalCost(newCartItemById as CartItem[]);

      return {
        cartItemById: newCartItemById,
        totalCost,
      };
    });
  },
  updateCartItemPrice: (id: number, price: number) =>
    set((state) => {
      const newCartItemById = {
        ...state.cartItemById,
        [id]: {
          ...state.cartItemById[id],
          price,
        },
      };

      const totalCost = calculateTotalCost(newCartItemById as CartItem[]);

      return {
        cartItemById: newCartItemById,
        totalCost,
      };
    }),
});

export default createCartSlice;
