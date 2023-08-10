// ========== ENUMS ============================

enum StatusCode {
  SUCCESS = 1,
  IN_PROCESS = 'p',
  FAILED = 'f',
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
