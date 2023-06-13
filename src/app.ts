class Key {
  private signature: number;
  constructor() {
    this.signature = Math.round(Math.random() * 10);
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: 'open' | 'closed' = 'closed';
  private tenants: Person[] = [];
  constructor(protected key: Key) {}

  comeIn(person: Person): void {
    if (this.door === 'open') {
      this.tenants.push(person);
      console.log('You are welcome');
    } else {
      console.log(`Door is closed`);
    }
  }
  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key) {
    if (this.key === key) {
      this.door = 'open';
      console.log('Door is opening ...');
    }
  }
}

const key = new Key();
console.log(key.getSignature());

const person = new Person(key);
console.log(person.getKey());

const myHouse = new MyHouse(key);
myHouse.comeIn(person);
myHouse.openDoor(person.getKey());
myHouse.comeIn(person);
