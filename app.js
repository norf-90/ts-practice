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
// --------------------------------------------
var Role;
(function (Role) {
  Role[(Role['ADMIN'] = 0)] = 'ADMIN';
  Role[(Role['USER'] = 1)] = 'USER';
})(Role || (Role = {}));
var person = { role: Role.ADMIN };
if (person.role === Role.ADMIN) {
  console.log('Role: ', Role.ADMIN);
}
