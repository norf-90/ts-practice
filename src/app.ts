// ====== Abstract Class ======
{
  abstract class Controller {
    abstract handle(req: any): void;
    handleWithLogs(req: any) {
      console.log('start');
      this.handle(req);
      console.log('end');
    }
  }
  // new Controller() =====> ERROR
  class UserController extends Controller {
    handle(req: any): void {
      console.log(req);
    }
  }
  const c = new UserController();
  c.handleWithLogs('request');

  console.log(' ');
}

// ====== This typing ======
{
  class UserBuilder {
    name: string;

    setName(name: string): this {
      this.name = name;
      return this;
    }
    isAdmin(): this is AdminBuilder {
      return this instanceof AdminBuilder;
    }
  }
  class AdminBuilder extends UserBuilder {
    roles: string;
  }
  const res = new UserBuilder().setName('Oleg');
  res;
  const res2 = new AdminBuilder().setName('Ivan');
  res2;

  let user: UserBuilder | AdminBuilder = new UserBuilder();
  if (user.isAdmin()) {
    console.log(user);
  } else {
    console.log(user);
  }
}

// ====== This ======

{
  class Payment {
    private date: Date = new Date();

    getDate(this: Payment) {
      return this.date;
    }

    getDateArrow = () => {
      return this.date;
    };
  }

  const p = new Payment();
  const user = {
    id: 1,
    paymentDate: p.getDate.bind(p),
    paymentDateArrow: p.getDateArrow,
  };
  console.log(p.getDate());
  console.log(user.paymentDate());
  console.log(user.paymentDateArrow());

  class PaymentPersistent extends Payment {
    save() {
      return super.getDate();
    }
  }
  console.log(new PaymentPersistent().save());

  console.log(' ');
}

// ====== Static ======
{
  class UserService {
    static db: any;

    static getUser(id: number) {
      return UserService.db.findById(id);
    }

    constructor(id: number) {
      id;
    }

    create() {
      // some code
      UserService.db;
    }

    // static block, run after pseudo initialization
    // don't allow to use async code
    static {
      UserService.db = 'sdf';
    }
  }

  UserService.db;
  const inst = new UserService(1);
  inst.create();
  // UserService.id;
}

// ====== Visibility ======
{
  class Vehicle {
    public make: string;
    private damages: string[] = [];
    private _model: string;
    protected run: number = 0;
    #price: number;

    addDamage(damage: string) {
      this.damages.push(damage);
    }

    set model(model: string) {
      this._model = model;
      this.#price = 100;
    }

    get model() {
      return this._model;
    }

    // тем не менее в данном случае можем достучаться з екземпляра класса v (Vehicle)
    // до его приватного свойства
    isPriceEqual(v: Vehicle) {
      return this.#price === v.#price;
    }
  }

  class EuroTruck extends Vehicle {
    setDamge() {
      // this.damage;
    }
    setRun(km: number) {
      this.run = km / 0.62;
    }
  }

  new Vehicle();
  new EuroTruck().make;
  console.log(new Vehicle());
  console.log(new EuroTruck());
}

// ====== Class composition or extending ======
{
  class User {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }

  class Users extends Array<User> {
    searchByName(name: string) {
      return this.filter(u => u.name === name);
    }

    override toString(): string {
      return this.map(u => u.name).join(', ');
    }
  }

  const users = new Users();
  users.push(new User('Oleksandr'));
  users.push(new User('Ivan'));
  console.log(users.toString());

  class UserList {
    users: User[];

    push(u: User) {
      this.users.push(u);
    }
  }
  new UserList();
  // --------------------------------------------------------
  class Payment {
    date: Date;
  }
  class UserWithPayment extends Payment {
    name: string;
  }
  class UserWithPayment2 {
    user: User;
    payment: Payment;
    constructor(user: User, payment: Payment) {
      this.payment = payment;
      this.user = user;
    }
  }
  new UserWithPayment();
  new UserWithPayment2(new User('name'), new Payment());

  console.log('');
}

// ====== Extends ======
{
  type PaymentStatus = 'new' | 'paid';
  class Payment {
    id: number;
    status: PaymentStatus = 'new';

    constructor(id: number) {
      this.id = id;
    }

    pay() {
      this.status = 'paid';
    }
  }

  class ParsistendPayment extends Payment {
    databaseId: number;
    payedAt: Date;

    constructor() {
      const id = Math.random();
      super(id);
    }

    save() {
      // Add to DB
    }

    override pay(date?: Date) {
      // super.pay();
      if (date) {
        this.payedAt = date;
      }
    }
  }

  console.log(new ParsistendPayment());
}

// --------------------------------------

class User {
  name: string = 'user';

  constructor() {
    console.log(this.name);
  }
}

class Admin extends User {
  name: string = 'admin';
  constructor() {
    console.log('log something');
    super();
    console.log(this.name);
  }
}

const admin = new Admin();
// ----------------------------
class HttpError extends Error {
  code: number;
  constructor(message: string, code?: number) {
    super(message);
    this.code = code ?? 500;
  }
}
// ====== Implements ======
{
  interface ILogger {
    log(...args: any[]): void;
    error(...args: any[]): void;
  }

  class Logger implements ILogger {
    log(...args: any[]): void {
      console.log(...args);
    }
    async error(...args: any[]): Promise<void> {
      // some fetch
      console.log(...args);
    }
  }
  new Logger();

  // -------------------------------------------
  interface IPayable {
    pay(paymentId: number): void;
    price?: number;
  }

  interface IDeletable {
    delete(): void;
  }

  class User implements IPayable, IDeletable {
    delete(): void {
      throw new Error('Method not implemented.');
    }
    pay(paymentId: number | string): void {
      // some logic
      console.log(paymentId);
    }
    price?: number | undefined;
  }
  new User();
}
// ====== Getter and Setter ======
{
  class User {
    _login: string;
    password: string;
    createdAt: Date;

    // setters and getter can't be async
    set login(l: string) {
      this._login = 'user-' + l;
      this.createdAt = new Date();
    }

    get login() {
      return this._login;
    }

    // set password(p: string) {
    //   // sync methods
    // }

    async setPassword(p: string) {
      this.password = p;
    } // class methods can by async
  }

  const user = new User();
  user.login = 'Aleksandr';
  console.log(user);
  console.log(user.login);
}

// ====== Method overload ======
{
  class User {
    skills: string[] = [];

    addSkills(skills: string[]): void;
    addSkills(skill: string): void;
    addSkills(skillOrSkills: string | string[]) {
      if (skillOrSkills instanceof Array) {
        this.skills.concat(skillOrSkills);
      } else if (typeof skillOrSkills === 'string') {
        this.skills.push(skillOrSkills);
      }
    }
  }

  new User().addSkills('method overload');
}

// ---------------------
function run(distance: string): number;
function run(distance: number): number;
function run(distance: number | string): string | number {
  if (typeof distance === 'number') {
    console.log(distance);
    return distance;
  } else if (typeof distance === 'string') {
    const res: number = isNaN(Number.parseInt(distance)) ? -1 : Number.parseInt(distance);
    console.log(res);
    return res;
  } else {
    console.log(0);
    return 0;
  }
}
run(1);
run('5555sgfkgj');
run('sldkfj');

// ====== Methods ======
{
  enum PaymentStatus {
    Holded,
    Processed,
    Reversed,
  }
  class Payment {
    id: number;
    status: PaymentStatus;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: number) {
      this.id = id;
      this.createdAt = new Date();
      this.status = PaymentStatus.Holded;
    }

    getPaymentLifeTime(): number {
      return new Date().getTime() - this.createdAt.getTime();
    }

    unholdPaymetn(): void {
      if (this.status === PaymentStatus.Processed) {
        throw new Error('Платеж не может быть возвращен');
      }
      this.status = PaymentStatus.Reversed;
      this.updatedAt = new Date();
    }
  }

  const payment = new Payment(1);
  // console.log(payment);
  payment.unholdPaymetn();
  // console.log(payment);
  const time = payment.getPaymentLifeTime();
  time;
  // console.log(time);
}

// ====== Constructor ======
{
  class User {
    name: string;
    age: number;

    constructor();
    constructor(name: string);
    constructor(age: number);
    constructor(name: string, age: number);
    constructor(ageOrName?: string | number, age?: number) {
      if (typeof ageOrName === 'string') {
        this.name = ageOrName;
      } else if (typeof ageOrName === 'number') {
        this.age = ageOrName;
      }

      if (typeof age === 'number') {
        this.age = age;
      }
    }
  }
  const user = new User('Oleksandr');
  const user2 = new User();
  const user3 = new User(33);
  const user4 = new User('Olkesandr', 33);
  user;
  user2;
  user3;
  user4;

  // console.log(user);
  // console.log(user2);
  // console.log(user3);
  // console.log(user4);
}

// ====== Class initialization ======
{
  class User {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }

  const user = new User('Oleksandr');
  // console.log(user);
  user.name = 'Oleksandr Shmatko';
  // console.log(user);

  class Admin {
    role: number;
  }
  const admin = new Admin();
  admin.role = 1;
}
