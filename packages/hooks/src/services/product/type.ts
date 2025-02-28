type ProductListResponse = {
  products: ProductDetailResponse[];
};

type ProductDetailResponse = {
  id: number;
  categoryId: number;
  productUnitId: number;
  name: string;
  description: string;
  price: number;
  quantityStock: number;
  images: string[];
};

export type { ProductListResponse, ProductDetailResponse };
