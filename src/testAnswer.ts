{
  class Product {
    constructor(public id: number, public title: string, public price: number) {}
  }

  class Delivery {
    constructor(public date: Date) {}
  }

  class HomeDelivery extends Delivery {
    constructor(date: Date, public address: string) {
      super(date);
    }
  }

  class ShopDelivery extends Delivery {
    shopId: number;
    constructor(shopId: number) {
      super(new Date());
      this.shopId = shopId;
    }
  }

  type DeliveryOptions = HomeDelivery | ShopDelivery;

  class Cart {
    private products: Product[] = [];
    private delivery: DeliveryOptions;

    addProduct(product: Product): void {
      this.products.push(product);
    }

    deleteProduct(productId: number): void {
      this.products = this.products.filter((p: Product) => p.id != productId);
    }

    getSum(): number {
      return this.products.map((p: Product) => p.price).reduce((p1: number, p2: number) => p1 + p2);
    }

    setDelivery(delivery: DeliveryOptions): void {
      this.delivery = delivery;
    }

    checkout() {
      if (this.products.length === 0) {
        throw new Error('Cart is empty');
      }
      if (!this.delivery) {
        throw new Error("Haven't delivery data");
      }
      return {
        success: true,
      };
    }
  }

  const cart = new Cart();
  cart.addProduct(new Product(1, 'cookies', 10));
  cart.addProduct(new Product(2, 'pie', 30));
  cart.addProduct(new Product(3, 'chockolate', 30));
  cart.deleteProduct(3);
  cart.setDelivery(new HomeDelivery(new Date(), 'some address'));
  console.log(cart.getSum());
}
