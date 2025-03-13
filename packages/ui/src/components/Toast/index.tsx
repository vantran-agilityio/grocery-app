/* eslint-disable @typescript-eslint/no-require-imports */
import { Platform } from 'react-native';
import { ToastOptions, ToastType, ToastService } from './types';

const ToastModule: {
  Provider: React.FC<{ children: React.ReactNode }>;
  useToast: () => ToastService;
} = Platform.select({
  native: require('./native').default,
  web: require('./web').default,
});

export const useToast = ToastModule.useToast;
export const ToastProvider = ToastModule.Provider;
export type { ToastOptions, ToastType, ToastService };
