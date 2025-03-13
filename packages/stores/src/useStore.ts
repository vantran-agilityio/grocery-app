import { createWithEqualityFn } from 'zustand/traditional';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Selector
import createSelectors from './createSelectors';

// Slices
import createAuthSlice, { AuthState } from './createAuthSlice';
import createProductSlice, { ProductState } from './createProductSlice';
import createLoadingSlice, { LoadingState } from './createLoadngSlice';
import createCategorySlice, { CategoryState } from './createCategorySlice';
import createProductUnitSlice, {
  ProductUnitState,
} from './createProductUnitSlice';
import createCartSlice, { CartState } from './createCartSlice';

export type RootState = AuthState &
  ProductState &
  LoadingState &
  CategoryState &
  ProductUnitState &
  CartState;

export const useStore = createWithEqualityFn<RootState>()(
  persist(
    (...a) => ({
      ...createAuthSlice(...a),
      ...createProductSlice(...a),
      ...createLoadingSlice(...a),
      ...createCategorySlice(...a),
      ...createProductUnitSlice(...a),
      ...createCartSlice(...a),
    }),
    {
      name: 'persisted-global-store',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default createSelectors(useStore);
