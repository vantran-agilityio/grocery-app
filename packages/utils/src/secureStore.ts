import * as SecureStore from 'expo-secure-store';

export const save = async (key: string, value: string) => {
  await SecureStore.setItemAsync(key, value);
};

export const getValueFor = async (key: string): Promise<string | null> => {
  const result = await SecureStore.getItemAsync(key);

  return result;
};
