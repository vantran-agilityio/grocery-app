// Services
import { GET } from '@services/clientRequest';

// Constants
import { ROUTES } from '@repo/constants';

// Types
import { CategoryListResponse } from './type';

export const getCategories = async () =>
  await GET<CategoryListResponse>(ROUTES.CATEGORY.GET_ALL);
