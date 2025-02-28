export class Product {
  id: number;
  productUnitId: number;
  description?: string;
  name: string;
  quantityStock: number;
  price: number;
  image: string;
  categoryId: number;
  cartItemId?: number;

  constructor({
    id,
    productUnitId,
    description,
    quantityStock,
    name,
    price,
    image,
    categoryId,
  }: IProduct) {
    this.id = id;
    this.productUnitId = productUnitId;
    this.description = description;
    this.name = name;
    this.quantityStock = quantityStock;
    this.price = price;
    this.image = image;
    this.categoryId = categoryId;
  }
}

interface IProduct {
  id: number;
  productUnitId: number;
  categoryId: number;
  description?: string;
  name: string;
  quantityStock: number;
  price: number;
  image: string;
}
