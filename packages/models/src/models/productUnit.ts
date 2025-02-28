interface IProductUnit {
  id: number;
  name: string;
}

export class ProductUnit {
  id: number;
  name: string;

  constructor({ id, name }: IProductUnit) {
    this.id = id;
    this.name = name;
  }
}
