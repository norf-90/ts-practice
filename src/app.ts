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
