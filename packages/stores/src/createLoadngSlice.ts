import { StateCreator } from 'zustand';

type State = {
  isLoading: boolean;
};

type Action = {
  toggleLoading: () => void;
  enableLoading: () => void;
  disableLoading: () => void;
};

export type LoadingState = State & Action;

const DEFAULT_STATE: State = {
  isLoading: false,
};

const createLoadingSlice: StateCreator<LoadingState, [], [], LoadingState> = (
  set,
) => ({
  ...DEFAULT_STATE,
  toggleLoading: () => set((state) => ({ isLoading: !state.isLoading })),
  enableLoading: () => set(() => ({ isLoading: true })),
  disableLoading: () => set(() => ({ isLoading: false })),
});

export default createLoadingSlice;
