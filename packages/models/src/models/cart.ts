export interface ICartItem {
  id: number;
  productId: number;
  quantity: number;
  price?: number;
}

export class CartItem {
  id: number;
  productId: number;
  quantity: number;
  price?: number;

  constructor({ id, productId, quantity, price }: ICartItem) {
    this.id = id;
    this.productId = productId;
    this.quantity = quantity;
    this.price = price;
  }
}
