// packages/utils/src/secureStore.ts
import { Platform } from 'react-native';

// Web implementation using localStorage
const webSecureStore = {
  setItemAsync: async (key: string, value: string): Promise<void> => {
    try {
      if (typeof window === 'undefined') return;
      localStorage.setItem(key, value);
    } catch (error) {
      console.error('Error storing data:', error);
    }
  },

  getItemAsync: async (key: string): Promise<string | null> => {
    try {
      if (typeof window === 'undefined') return null;
      return localStorage.getItem(key);
    } catch (error) {
      console.error('Error retrieving data:', error);
      return null;
    }
  },

  deleteItemAsync: async (key: string): Promise<void> => {
    try {
      if (typeof window === 'undefined') return;
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  },
};

// Choose the implementation based on platform
let storage: {
  setItemAsync: (key: string, value: string) => Promise<void>;
  getItemAsync: (key: string) => Promise<string | null>;
  deleteItemAsync: (key: string) => Promise<void>;
};

// Use platform-specific implementation
if (Platform.OS === 'web') {
  storage = webSecureStore;
} else {
  // Use the actual SecureStore for native platforms
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  storage = require('expo-secure-store');
}

/**
 * Save a value to secure storage on native or localStorage on web
 * @param key The key to store under
 * @param value The value to store
 */
export const save = async (key: string, value: string): Promise<void> => {
  await storage.setItemAsync(key, value);
};

/**
 * Get a value from storage
 * @param key The key to retrieve
 * @returns The stored value or null if not found
 */
export const getValueFor = async (key: string): Promise<string | null> => {
  return await storage.getItemAsync(key);
};

/**
 * Delete a value from storage
 * @param key The key to delete
 */
export const deleteValue = async (key: string): Promise<void> => {
  await storage.deleteItemAsync(key);
};
