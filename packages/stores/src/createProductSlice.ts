import { StateCreator } from 'zustand';

import { Product } from '@repo/models';
import { ById } from '@repo/models/types';
import { createById } from '@repo/utils';

type State = {
  products: Product[];
  productById: ById<Product>;
  currentSearchValue: string;
  searchHistory: string[];
};

type Action = {
  setProducts: (products: Product[]) => void;
  addSearchItem: (searchItem: string) => void;
  setCurrentSearchItem: (searchItem: string) => void;
  resetSearchHistory: () => void;
};

export type ProductState = State & Action;

const DEFAULT_STATE: State = {
  products: [],
  productById: {},
  searchHistory: [],
  currentSearchValue: '',
};

const createProductSlice: StateCreator<ProductState, [], [], ProductState> = (
  set
) => ({
  ...DEFAULT_STATE,
  setProducts: (products: Product[]) =>
    set(() => ({ products, productById: createById<Product>(products) })),
  addSearchItem: (searchItem: string) =>
    set((state) => {
      let searchHistory = state.searchHistory;
      if (searchHistory.findIndex((item) => item === searchItem) == -1) {
        searchHistory = [...searchHistory, searchItem];
      }

      return { searchHistory };
    }),
  setCurrentSearchItem: (searchItem: string) =>
    set(() => ({ currentSearchValue: searchItem })),
  resetSearchHistory: () =>
    set(() => ({ searchHistory: DEFAULT_STATE.searchHistory })),
});

export default createProductSlice;
