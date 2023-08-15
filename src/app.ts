// ============= Asserts =================
interface User9 {
  name: string;
}
const curUser = {};
asserUser(curUser);
curUser.name = 'Oleksandr';

function asserUser(obj: unknown): asserts obj is User9 {
  if (typeof obj === 'object' && !!obj && 'name' in obj) {
    return;
  }
  throw new Error('Not user');
}

// ============= TYPE GUARD ==============
interface User8 {
  name: string;
  email: string;
  login: string;
}
const currentUser = {
  name: 'Oleksandr',
  email: 'oleksandr@mail.com',
  login: 'norf',
} as User8;
interface Admin {
  name: string;
  role: number;
}

function loggId(id: string | number) {
  if (isString(id)) {
    console.log(id);
  } else {
    console.log(id);
  }
}

// type guard
function isString1(x: string | number): x is string {
  return typeof x === 'string';
}
// -----------------------------------------
function isAdmin(user: User8 | Admin): user is Admin {
  return 'role' in user;
}

function isAdminAlternative(user: User8 | Admin): user is Admin {
  return (user as Admin).role !== undefined;
}

function setRole(user: User8 | Admin) {
  if (isAdmin(user)) {
    user.role = 0;
  } else {
    throw new Error('User is not Admin');
  }
}

// =========== TYPE CASTING ================
let a7 = 5;
let b7: string = a7.toString();

let c = 'some string';
let d: number = parseFloat(c);

let e = new String(a7).valueOf();

interface User7 {
  name: string;
  email: string;
  login: string;
}

const user8 = {
  name: 'Oleksandr',
  email: 'oleksandr@mail.com',
  login: 'norf',
} as User7;
const user9 = <User7>{
  // not recommended, don't work in React
  name: 'Oleksandr',
  email: 'oleksandr@mail.com',
  login: 'norf',
};
// -----------------------------------------
const user7: User7 = {
  name: 'Oleksandr',
  email: 'oleksandr@mail.com',
  login: 'norf',
};
interface Admin {
  name: string;
  role: number;
}
const admin1: Admin = {
  ...user7,
  role: 1,
};

function userToAdmin(user: User7): Admin {
  return {
    name: user.name,
    role: 1,
  };
}
// =========== NULL ========================
const n: null = null;
const n1: null = undefined;
const n2: any = null;
const n3: number = null;
const n4: string = null;
const n5: boolean = null;
const n6: undefined = null;

interface User6 {
  name: string;
}

function getUser() {
  if (Math.random() > 0.5) {
    return null;
  } else {
    return {
      name: 'Oleksandr',
    } as User6;
  }
}
const user6 = getUser();
if (user6) {
  const n55 = user6.name;
}
// =========== NEVER =======================
function generateError(message: string): never {
  throw new Error(message);
}

function dumpError(): never {
  while (true) {}
}

function rec(): never {
  return rec();
}
// -----------------------------------------
type paymentAction = 'refund' | 'checkout' | 'reject';
function processAction(action: paymentAction) {
  switch (action) {
    case 'refund':
      console.log('do refund');
      break;
    case 'checkout':
      console.log('do checkout');
      break;
    case 'reject':
      console.log('do reject');
      break;
    default:
      const _: never = action;
      throw new Error('something goes wrong');
  }
}
// -----------------------------------------

function isString(x: string | number): boolean {
  if (typeof x === 'string') return true;
  else if (typeof x === 'number') return false;
  generateError('something goes wrong');
}

// =========== UNKNOWN =====================
let input: unknown;
input = 3;
input = ['string some '];

function run(i: unknown) {
  if (typeof i === 'number') {
    i++;
  } else {
    i;
  }
}
run(input);

// -------------------------------------------------

async function getData() {
  try {
    fetch('');
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}
// -------------------------------------------------------
async function getDataForce() {
  try {
    fetch('');
  } catch (error) {
    const e = error as Error;
    console.log(e.message);
  }
}
// -------------------------------------------------------
type U1 = unknown | null;
type U2 = unknown & string;

// =========== VOID ========================
function logID4(id: string | number): void {
  console.log(id);
}
const a = logID4(1);

function multiply4(f: number, s?: number) {
  if (!s) {
    return f * f;
  }
  return f * s;
}

type voidFunc = () => void;
const f1: voidFunc = () => {};
const f2: voidFunc = () => {
  return true;
};
const b = f2();

const skills = ['dev', 'devops'];
const user4 = {
  s: ['s'],
};
skills.forEach(skill => user4.s.push(skill));
// =========== OPTIONAL ====================
interface User {
  login: string;
  password?: string;
}
const user: User = {
  login: 'mail.com',
};
// ---------------------------------------------
function multiply(first: number, second?: number): number {
  if (!second) {
    return first * first;
  }
  return first * second;
}
// -------------------------------------------------
interface UserPro {
  login: string;
  password?: {
    type: 'primary' | 'secondary';
  };
}
function testPass(user: UserPro) {
  const t = user.password?.type;
  console.log(t);
}
// -----------------------------------------------------
function test(param?: string) {
  const t = param ?? multiply(5);
  console.log(t);
}

// =========== TYPES or INTERFACES =========
type ID = string | number;
interface IDI {
  ID: string | number;
}

interface User3 {
  name: string;
}
interface User3 {
  age: number;
}
const user3: User3 = {
  name: 'as',
  age: 33,
};

// =========== INTERFACES ==================
interface User2 {
  name: string;
  age: number;
  skills: string[];

  log: (id: number) => string;
}

interface Role2 {
  roleId: number;
}

interface UserWithRole2 extends User2, Role2 {
  cratedAt: Date;
}

let user2: UserWithRole2 = {
  name: 'asd',
  age: 11,
  skills: ['1', '2'],
  roleId: 1,
  cratedAt: new Date(),
  log(id) {
    return id.toString();
  },
};
// ---------------------------------------
interface UserDic {
  [index: number]: User;
}
type UserDic2v = {
  [index: number]: User;
};
// =========== TYPE ALIASES ================
type User1 = {
  name: string;
  age: number;
  skills: string[];
};

type Role1 = {
  name: string;
  id: number;
};

// type UserWithRole = User & Role;
// let user: UserWithRole = {
//   id: 1,
//   name: 'asd',
//   age: 11,
//   skills: ['1', '2'],
// };
type UserWithRole1 = {
  user: User1;
  role: Role1;
};

let user1: UserWithRole1 = {
  user: {
    name: 'some name',
    age: 22,
    skills: ['1', '2'],
  },
  role: {
    name: 'dev',
    id: 130394,
  },
};

type httpMethod = 'post' | 'get';
function fetchWithAuth(url: string, method: httpMethod) {
  console.log(url, method);
}

// ========== LITERAL TYPES =================

function fetchWithAuth1(url: string, method: 'post' | 'get') {
  console.log(url, method);
}
fetchWithAuth1('https://someurl', 'get');
let method = 'post';
fetchWithAuth1('htpps://someurl', method as 'post');

// ================== UNION ==================

function logId(id: string | number | boolean) {
  if (typeof id === 'string') {
    console.log(id.toLowerCase());
  } else if (typeof id === 'number') {
    console.log(id);
  } else {
    console.log(id);
  }
}

function logError(err: string | string[]) {
  if (Array.isArray(err)) {
    console.log(err);
  } else {
    console.log(err);
  }
}

function logObj(obj: { a: number } | { b: number }) {
  if ('a' in obj) {
    console.log(obj.a);
  } else {
    console.log(obj.b);
  }
}

function logMultipleIds(a: string | number, b: string | boolean) {
  if (a === b) {
    console.log(a);
  } else {
    console.log(a);
  }
}
const result2 = {
  message: 'Платеж успешен',
  statusCode: StatusCode.SUCCESS,
};

// statusCode
// 1 - success
// 2 - in progress
// 3 - rejected

if (result2.statusCode === StatusCode.SUCCESS) {
}

function action(status: StatusCode) {
  console.log(status);
}
action(StatusCode.SUCCESS);
action(1);
// action('p');

const enum Roles {
  ADMIN,
  USER,
}

const res2 = Roles.ADMIN;

// ========Read only=========================
const skill: readonly [number, string] = [1, 'Dev'];
// skill[0] = 2;

const skillValues: readonly string[] = ['Dev', 'DevOps'];
// skills[0] = '';
// skillValues.push(' ');

const skillValues2: ReadonlyArray<string> = ['str1', 'str2'];

// ==============TUPLE===========================
// const skill: [number, string] = [1, 'Dev'];
// const [id, skillName] = skill;

// const arr: [number, string, ...boolean[]] = [1, 'some string', true, true, false];

// ============== Arrays ========================
const skills: string[] = ['Dev', 'DevOps'];

for (const skill of skills) {
  console.log(skill.toLocaleLowerCase());
}

const result = skills
  .filter((s: string) => s !== 'DevOps')
  .map(s => s + '!')
  .reduce((a, b) => a + b);
console.log(result);

// ============== functions types =======================
function getFullName(userEntity: { firstName: string; surname: string }): string {
  return `${userEntity.firstName} ${userEntity.surname}`;
}

const getFullNameArrow = (firstName: string, surname: string): string => {
  return `${firstName} ${surname}`;
};

const user = {
  firstName: 'Oleksandr',
  surname: 'Shmatko',
  city: 'Kyiv',
  age: 33,
};

// console.log(getFullName(user));
// =========================================================================

let revenue: number = 1000;
let bonust: number = 500;
let c: string = 'sdf';
let b: boolean = true;

let res: number = revenue + bonust;
// console.log(res);
