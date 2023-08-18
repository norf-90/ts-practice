interface IHomeAddress {
  country: string;
  city: string;
  road: string;
  building: string;
}

class Product {
  id: number;
  name: string;
  price_uah: number;

  constructor(name?: string, price?: number) {
    this.id = Math.random();
    if (name) this.name = name;
    if (price) this.price_uah = price;
  }
}

class Delivery {
  data: Date;
  constructor(date: Date) {
    this.data = date;
  }
}

class DeliveryHome extends Delivery {
  address: IHomeAddress;
  constructor(date: Date, addr: IHomeAddress) {
    super(date);
    this.address = addr;
  }
}

class DeliveryPoint extends Delivery {
  magazineId: number;
  constructor(date: Date, magazineId: number) {
    super(date);
    this.magazineId = magazineId;
  }
}

class Cart {
  protected _products: Array<Product>;
  #deliveryData: Delivery | DeliveryHome;

  constructor() {
    this._products = [];
  }

  set products(item: Product) {
    this._products.push(item);
  }

  deleteProduct(productId: number) {
    this._products = this._products.filter(prod => prod.id != productId);
  }

  getTotalPrice(): number {
    return this._products.reduce((total, product) => total + product.price_uah, 0);
  }

  set deliveryData(data: DeliveryHome | DeliveryPoint) {
    this.#deliveryData = data;
  }

  checkout(): string {
    if (this.#deliveryData && this._products.length) {
      return 'OK';
    } else return 'NOT OK';
  }
}
