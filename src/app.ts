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
