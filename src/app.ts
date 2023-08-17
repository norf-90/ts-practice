// ====== Methods ======
{
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

  console.log(user);
  console.log(user2);
  console.log(user3);
  console.log(user4);
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
