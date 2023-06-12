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

// --------------------------------------

// const num = 10;
// const str = 'Some string';
// const bool = true;
// const empty = null;
// const notParam = undefined;

// ---------------------------------------

// function foo(num: number, str: string, bool: boolean, emty: null) {
//   // some logic
// }

// --------------------------------------

// function foo(num = 10, str = 'some string', bool = true, empty = null) {
//   // some logic
// }

// --------------------------------------

// let arrString: string[];
// // arrString = ['text', 1]; // err

// let arrNumber: number[];
// // arrNumber = [1, 'text'];  // err

// let arrAny: any[];
// arrAny = [1, 'text'];

// let arrObj: { name: string }[];
// // arrObj = [{ name: 'Alex' }, { name: 1 }]; // err

// const obj: object = {};
// const obj2: { name?: string } = {};
// obj2.name = 'alex';

// -------------------------------------------------

// const data: {
//   id: number;
//   price: number;
//   permission: string[];
//   details: {
//     title: string;
//     description?: string;
//   };
// } = {
//   id: 1,
//   price: 10.0,
//   permission: ['read', 'write'],
//   details: {
//     title: 'new product',
//     description: 'this is awesome product!',
//   },
// };

// -------------------------------------------------
// let some: any;
// some = 10;
// some = 'string';
// some = {};

// let num: number;
// num = some;

// -----------------------------------------------
// !!!!!!! WARNING !!!!!!
// let some: any;
// some = {};
// let num: number;
// num = some;

// ------------------------------------------
// let some: unknown;
// some = 10;
// let num: number;
// num = some; //ERROR

// let some: unknown;
// some = 10;
// let num: number;
// if (typeof some === 'number') {
//   num = some; // without error
// }

// --------------TUPLE------------
// let fixed: [string, number];
// fixed = ['text', 1];
// fixed = ['text', 1, 1]; // ERROR
// fixed = [1, 'text'];    // ERROR

//  -------------------------------------
//  WARNING
// let fixed: [string, number];
// fixed: ['text', 10];
// fixed.push('add this text');

// --------------ENUM ??? ------------------------------

// enum Role {
//   ADMIN,
//   USER,
// }

// const person = { role: Role.ADMIN };
// if (person.role === Role.ADMIN) {
//   console.log('Role: ', Role.ADMIN);
// }

// ---------Union Type----------------------------------

// let union: string | number;
// union = 'text';
// union = 10;

// function combine(param1: number | string, param2: number | string) {
//   return param1 + param2; // ERROR
// }

// function combine(param1: number | string, param2: number | string) {
//   if (typeof param1 === 'number' && typeof param2 === 'number') {
//     return param1 + param2;
//   } else {
//     return param1.toString() + param2.toString();
//   }
// }

// -----------Literal Type-----------------

// let literal: 'first' | 'second';
// literal = 'first';

// function greeting(action: 'hello' | 'bye') {
//   if (action === 'hello') {
//     console.log('hello, user!');
//   } else {
//     console.log('bye, user');
//   }
// }

// greeting('foo'); // ERROR

// ------------------Return Type---------------
// function returnResult(num: number): number {
//   return 1;
// }

// function returnNothing(): void {
//   console.log('print some text');
// //   return 1; // ERROR
// }

// -----------NEVER-------------------------
// function generateError(message: string, status: number): never {
//   throw { message, status };
// }
// generateError('An error', 500);

// ----------FUNCTION TYPE-------------------------
// let callback: (num: number) => void
// callback = (num) =>{
//   console.log(num);
// }
// callback('string') // error

// function calc(
//   param1: number,
//   param2: number,
//   callback: (num1: number, num2: number) => number
// ): void {
//   console.log('result', callback(param1, param2));
// }

// calc(1, 1, (num1, num2) => num1 + num2);
// calc(1, 1, (num1, num2) => num1 - num2);

// --------------Custom Types-----------------------------------
// // Опишемо тип
// type DatabaseDate = {
//   id: Number;
//   price: Number;
//   permission: string[];
//   details: {
//     title: string;
//     description?: String;
//   };
// };
// // Призначимо тип для об'єкта
// const firstData: DatabaseDate = {
//   id: 1,
//   price: 10.99,
//   permission: ['read', 'write'],
//   details: {
//     title: 'New product',
//     description: 'this is awesome product',
//   },
// };

// const secondData: DatabaseDate = {
//   id: 1,
//   price: 10.99,
//   permission: ['read', 'write'],
//   details: {
//     title: 'New product',
//   },
// };

// export { DatabaseDate };

// ---------------------OPTIONAL PARAMETERS --------------------
// function optional(num?: number): void {}
// optional();

// type CustomType = {
//   name: string;
//   sex?: 'man' | 'woman';
// };

// const person: CustomType = {
//   name: 'Don',
// };
// person.sex = 'man';
