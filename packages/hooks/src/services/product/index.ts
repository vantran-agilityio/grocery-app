// Services
import { GET } from '@services/clientRequest';

// Types
import { ProductDetailResponse, ProductListResponse } from './type';

// Constants
import { ROUTES } from '@repo/constants';

export const getProducts = async () =>
  await GET<ProductListResponse>(ROUTES.PRODUCT.GET_ALL);

export const getProductDetail = async (id: number) =>
  await GET<ProductDetailResponse>(ROUTES.PRODUCT.getDetail(id));

export const searchProducts = async (searchValue: string) =>
  await GET<ProductListResponse>(ROUTES.PRODUCT.search(searchValue));
