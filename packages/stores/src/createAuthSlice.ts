import { StateCreator } from 'zustand';

type State = {
  phone: null | string;
};

type Action = {
  setPhone: (phone: string) => void;
  signUp: () => void;
};

export type AuthState = State & Action;

const DEFAULT_STATE: State = {
  phone: null,
};

const createAuthSlice: StateCreator<AuthState, [], [], AuthState> = (set) => ({
  ...DEFAULT_STATE,
  setPhone: (phone: string) => set(() => ({ phone })),
  signUp: () => {},
});

export default createAuthSlice;
