// ========================= BASE TYPES ===============================================================

// let num: number;
// let str: string;
// let bool: boolean;
// let empty: null;
// let notParam: undefined;
// num = 10;
// str = 'some string';
// bool = true;
// empty = null;
// notParam = undefined;

// or
// const num = 10;
// const str = 'some string';
// const bool = true;
// const empty = null;
// const notParam = undefined;

// function foo(num: number, str: string, bool: boolean, empty: null) {}
// function foo(num = 10, str = 'some string', bool = true, empty = null) {}

// let arrString: string[];
// arrString = ['Text', 1]; // error
// arrString = ['some', 'text'];
// let arrNumber: number[];
// arrNumber = ['text', 1]; // error
// arrNumber = [1, 2];
// let arrAny: any[];
// arrAny = ['some', 'text'];
// arrAny = [1, 2];
// let arrObj: { name: string }[];
// arrObj = [{ name: 'Alex' }];
// arrObj = [{ name: 'Alex' }, { name: 1 }];   // error

// const obj: object = {};
// const obj2: {} = {};
// const obj3: { name?: string } = {};
// obj3.name = 'Alex';

const data: {
  id: number;
  price: number;
  permission: string[];
  details: {
    title: string;
    description?: string;
  };
} = {
  id: 1,
  price: 10.99,
  permission: ['read', 'write'],
  details: {
    title: 'New product',
    description: 'This is awesome product',
  },
};
