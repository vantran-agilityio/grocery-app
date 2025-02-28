// Types
import { ById } from '@repo/models/types';

export const removeById = <T>(byId: ById<T>, id: number) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { [id]: omitted, ...rest } = byId;
  return rest;
};

export const createById = <T extends { id: number }>(arr: T[]) => {
  return arr.reduce((obj, item) => Object.assign(obj, { [item.id]: item }), {});
};
