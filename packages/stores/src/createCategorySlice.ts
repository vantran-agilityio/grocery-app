import { StateCreator } from 'zustand';
import { Category } from '@repo/models';

type State = {
  categories: Category[];
};

type Action = {
  setCategories: (categories: Category[]) => void;
};

export type CategoryState = State & Action;

const DEFAULT_STATE: State = {
  categories: [],
};

const createCategorySlice: StateCreator<
  CategoryState,
  [],
  [],
  CategoryState
> = (set) => ({
  ...DEFAULT_STATE,
  setCategories: (categories: Category[]) => set(() => ({ categories })),
});

export default createCategorySlice;
