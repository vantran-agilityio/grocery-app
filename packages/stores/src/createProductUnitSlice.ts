import { ProductUnit } from '@repo/models';
import { StateCreator } from 'zustand';

type State = {
  productUnits: ProductUnit[];
};

type Action = {
  setProductUnits: (productUnits: ProductUnit[]) => void;
  getProductUnitNameById: (id: number) => string;
};

export type ProductUnitState = State & Action;

const DEFAULT_STATE: State = {
  productUnits: [],
};

const createProductUnitSlice: StateCreator<
  ProductUnitState,
  [],
  [],
  ProductUnitState
> = (set, get) => ({
  ...DEFAULT_STATE,
  setProductUnits: (productUnits: ProductUnit[]) =>
    set(() => ({ productUnits })),
  getProductUnitNameById: (id: number) =>
    get().productUnits.find((productUnit) => productUnit.id === id)?.name || '',
});

export default createProductUnitSlice;
