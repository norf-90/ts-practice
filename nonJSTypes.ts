// ===================== ANY & UNKNOWN ===================
// let some: any;
// some = 10;
// some = 'some string';
// some = {};
// let num: number;
// num = some;

import { type } from 'os';

// let some: unknown;
// some = 10;
// let num: number;
// if (typeof some === 'number') {
//   num = some;
// }

// ======================== TURPLE ========================
// let fixed: [string, number];
// fixed = ['text', 10];
// fixed = [10, 'text']; // error

// let fixed: [string, number];
// fixed = ['text', 10];
// fixed.push('Add this text');

// ========================= ENUM ===========================
// enum Role {
//   ADMIN = 'admin',
//   USER = 'user',
// }
// const person = {
//   role: Role.ADMIN,
// };
// if (person.role === Role.ADMIN) {
//   console.log('Role: ', Role.ADMIN);
// }

// ======================= UNION TYPE =============================
// let union: string | number;
// union = 'text';
// union = 1;
// union = {}; // error

// function combine(param1: number | string, param2: number | string) {
//   if (typeof param1 === 'number' && typeof param2 === 'number') {
//     return param1 + param2;
//   } else {
//     return param1.toString() + param2.toString();
//   }
// }

// ======================= LITERAL TYPE ===============================
// let literal: 'first' | 'second';
// literal = 'first';
// // literal = 'third';  // error

// function greeting(action: 'hello' | 'bye') {
//   if (action === 'hello') {
//     console.log('hello user!');
//   } else {
//     console.log('bye user!');
//   }
// }
// greeting('hi'); // error

// ==================== RETURN TYPE ============================

// function returnResult(num: number): number {
// //   return 'str'; // error
//   return num;
// }

// function print(): void {
//   console.log('print some text');
// //   return 'print some text';     // error
// }

// function generateEror(message: string, status: number): never {
//   throw { message, status };
// }

// ================== FUNCTION TYPE =====================
// let callback: (num: number) => void;
// callback = num => {
//   console.log(num);
// };
// // callback('string');     // error

// function calc(
//   param1: number,
//   param2: number,
//   callback: (num1: number, num2: number) => number
// ): void {
//   console.log('Result: ', callback(param1, param2));
// }
// calc(1, 1, (num1, num2) => num1 + num2);
// calc(10, 5, (num1, num2) => num1 - num2);

// ================== CUSTOM TYPES ====================
// type DatabaseDate = {
//   id: number;
//   price: number;
//   permission: string[];
//   details: {
//     title: string;
//     description?: string;
//   };
// };

// const data1: DatabaseDate = {
//   id: 1,
//   price: 10.99,
//   permission: ['read', 'write'],
//   details: {
//     title: 'New product',
//     description: 'This is awesome product!',
//   },
// };

// ============= OPTIONAL PARAMS ===============
type CustomType = {
  name: string;
  sex?: 'man' | 'woman';
};

const person: CustomType = {
  name: 'Don',
};
person.sex = 'man';
