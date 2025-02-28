import { Product } from '@repo/models';

export const products: Product[] = [
  {
    id: 1,
    productUnitId: 1,
    name: 'Test',
    image: 'https://clipart-library.com/image_gallery2/Fruit.png',
    quantityStock: 3,
    price: 1,
    categoryId: 1,
  },
  {
    id: 2,
    productUnitId: 1,
    name: 'Test',
    image: 'https://clipart-library.com/image_gallery2/Fruit.png',
    quantityStock: 1,
    price: 1,
    categoryId: 1,
  },
  {
    id: 3,
    productUnitId: 1,
    name: 'Test',
    image: 'https://clipart-library.com/image_gallery2/Fruit.png',
    quantityStock: 3,
    price: 1,
    categoryId: 1,
  },
];

export const productIds = products.map((product) => product.id);

export const emptyProductList: Product[] = [];

const productById = {
  1: {
    id: 1,
    productUnitId: 1,
    name: 'Test',
    image: 'https://clipart-library.com/image_gallery2/Fruit.png',
    quantityStock: 3,
    price: 1,
    categoryId: 1,
  },
  2: {
    id: 2,
    productUnitId: 1,
    name: 'Test',
    image: 'https://clipart-library.com/image_gallery2/Fruit.png',
    quantityStock: 1,
    price: 1,
    categoryId: 1,
  },
  3: {
    id: 3,
    productUnitId: 1,
    name: 'Test',
    image: 'https://clipart-library.com/image_gallery2/Fruit.png',
    quantityStock: 3,
    price: 1,
    categoryId: 1,
  },
};

export default productById;
