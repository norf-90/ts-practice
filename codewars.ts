// Complete the solution so that it reverses the string passed into it.

function solution(str: string): string {
  return str.split('').reverse().join('');
}

// You have to create a function calcType, which receives 3 arguments: 2 numbers, and the result of an unknown operation performed on them (also a number).Based on those 3 values you have to return a string, that describes which operation was used to get the given result.The possible return strings are: "addition", "subtraction", "multiplication", "division".

function calcType(a: number, b: number, res: number): string {
  if (a + b === res) return 'addition';
  if (a - b === res || b - a === res) return 'subtraction';
  if (a * b === res) return 'multiplication';
  if (a / b === res || b / a === res) return 'division'; // TODO: your solution here
  return 'undefined';
}

// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
const digitalRoot = (n: number): number => {
  let result: number;
  result = n
    .toString()
    .split('')
    .reduce((sum, index) => sum + Number(index), 0);
  if (result < 10) return result;
  if (result >= 10) return digitalRoot(result);
  return result;
};

// console.log(digitalRoot(16));
// console.log(digitalRoot(942));
// console.log(digitalRoot(132189));
// console.log(digitalRoot(493193));

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!

function getSum(a: number, b: number): number {
  let minNum: number;
  let maxNum: number;
  if (a < b) {
    minNum = a;
    maxNum = b;
  } else {
    minNum = b;
    maxNum = a;
  }
  let result = 0;
  for (let i = minNum; i <= maxNum; i += 1) {
    result += i;
  }

  return result;
}

// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
function getGrade(a: number, b: number, c: number): 'A' | 'B' | 'C' | 'D' | 'F' {
  const score = (a + b + c) / 3;
  if (90 <= score && score <= 100) return 'A';
  if (80 <= score && score < 90) return 'B';
  if (70 <= score && score < 80) return 'C';
  if (60 <= score && score < 70) return 'D';
  return 'F';
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(100, 85, 96));
console.log(getGrade(92, 93, 94));
console.log(getGrade(100, 100, 100));
