// let some: any;
// some = 10;
// some = 'some string';
// some = {};
// let num: number;
// num = some;
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
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role["USER"] = "user";
})(Role || (Role = {}));
var person = {
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    console.log('Role: ', Role.ADMIN);
}
