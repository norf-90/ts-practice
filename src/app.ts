// ====== Mixins ====== Ніхуя непонятно, но очень интересно

{
  type Constructor = new (...args: any[]) => {};
  type GConstructor<T = {}> = new (...args: any[]) => T; // повертає значення типу Т (в нашому випадку типу классу)

  class List {
    constructor(public items: string[]) {}
  }

  class Accardion {
    isOpened: boolean;
  }

  type ListType = GConstructor<List>; // // повертає значення типу List
  type AccardionType = GConstructor<Accardion>;

  class ExtendedListСlass extends List {
    first() {
      return this.items[0];
    }
  }

  /* Міксін. Функція приймає класс (не його екземпляр)  генеруэмого типу (який наслідується від ListType) і розширяє його в класі ExtendedList та повертає ExtendedList */
  function ExtendedList<TBase extends ListType & AccardionType>(Base: TBase) {
    return class ExtendedList extends Base {
      first() {
        return { item: this.items[0], isOpened: this.isOpened };
      }
    };
  }
  class AccardionClass {
    isOpened: boolean;
    constructor(public items: string[]) {}
  }
  const list = ExtendedList(AccardionClass); // в list знаходиться посилання на класс ExtendedList
  const res = new list(['first', 'second']); // створюємо екземпляр класу ExtendedList
  console.log(res);
}

// ====== Generics in Classes ======
class Resp<D, E> {
  data?: D;
  error?: E;
  constructor(data?: D, error?: E) {
    if (data) this.data = data;
    if (error) this.error = error;
  }
}

const resp = new Resp<string, number>('some data', 1);
const resp2 = new Resp<string, number>('data');
resp2.error;

// -------------------------------------
class HTTPResp<F> extends Resp<string, number> {
  code: F;

  setCode(code: F) {
    this.code = code;
  }
}
const resp3 = new HTTPResp();

// ====== Generic's limits ======
{
  class Vehicle {
    run: number;
  }
  function kmToMiles<T extends Vehicle>(vehicle: T): T {
    vehicle.run = vehicle.run / 0.62;
    return vehicle;
  }

  class LSV extends Vehicle {
    capacity: number;
  }
  const vehicle = kmToMiles(new Vehicle());
  const lsv = kmToMiles(new LSV());
  const someVehicle = kmToMiles({ run: 1 });
  // ------------------------------------------------------------------
  function logId(id: string | number): string | number {
    console.log(id);
    return id;
  }
  function logId2<T extends string | number, Y>(id: T, additionalData: Y): { id: T; data: Y } {
    console.log(id);
    console.log(additionalData);
    return { id, data: additionalData };
  }
}

// ====== Generics in types =======

{
  function logMiddleware<T>(data: T): T {
    console.log(data);
    return data;
  }
  function getSplittedHalf<T>(data: Array<T>): Array<T> {
    const l = data.length / 2;
    return data.splice(0, l);
  }
  const split: <T>(data: Array<T>) => Array<T> = getSplittedHalf;
  // --------------------------------------------
  interface ILogLine<T> {
    timeStamp: Date;
    data: T;
  }

  type LogLineType<T> = {
    timeStamp: Date;
    data: T;
  };

  const logline: LogLineType<{ a: number }> = {
    timeStamp: new Date(),
    data: {
      a: 1,
    },
  };
}

// ====== Function with generic ======
{
  function logMiddleware(data: any): any {
    console.log(data);
    return data;
  }
  function logMiddlewareGeneric<T>(data: T): T {
    console.log(data);
    return data;
  }

  const res = logMiddleware(10);
  const resWithGeneric = logMiddlewareGeneric<number>(10);
  const resWithGeneric2 = logMiddlewareGeneric<string>('str');

  // -------------------------------------------
  function getSplittedHalf<T>(data: Array<T>): Array<T> {
    const l = data.length / 2;
    return data.splice(0, l);
  }
  getSplittedHalf([1, 23, 3]);
}

// ====== built-in generic ======
{
  const num: Array<number> = [1, 2, 3];
  async function test() {
    const a = new Promise<number>((resolve, reject) => {
      resolve(1);
    });
  }

  const check: Record<string, boolean> = {
    drive: true,
    kpp: false,
  };
}
