// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

const findOdd = (xs: number[]): number => {
  let result = 0;
  xs.forEach(number => {
    let counter = 0;
    xs.forEach(value => {
      if (value === number) counter++;
    });
    if (!(counter % 2 === 0)) result = number;
  });
  return result;
};

// console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]) === 5);
// console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]) === -1);
// console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]) === 5);
// console.log(findOdd([10]) === 10);
// console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]) === 10);

// ==================================================================================================

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
const solution = (str: string, ending: string): boolean => str.endsWith(ending);
// console.log(solution('abcde', 'cde') === true);
// console.log(solution('abcde', 'abc') === false);
// console.log(solution('abc', '') === true);

// ========================================================================================================

// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

const isTriangle = (a: number, b: number, c: number): boolean =>
  a + b > c && a + c > b && c + b > a;
// console.log(isTriangle(1, 2, 2) === true);
// console.log(isTriangle(7, 2, 2) === false);

// =========================================================================================================

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

class Kata {
  static validatePin(pin: string): boolean {
    const regexp = new RegExp(/^\d{4}$/);
    const regexp2 = new RegExp(/^\d{6}$/);
    return regexp.test(pin) || regexp2.test(pin);
  }
}

// console.log(Kata.validatePin('1'));
// console.log(Kata.validatePin('12'));
// console.log(Kata.validatePin('123'));
// console.log(Kata.validatePin('12345'));
// console.log(Kata.validatePin('1234567'));
// console.log(Kata.validatePin('-1234'));
// console.log(Kata.validatePin('1.234'));
// console.log(Kata.validatePin('00000000'));
// console.log('');

// console.log(Kata.validatePin('a234'));
// console.log(Kata.validatePin('.234'));
// console.log('');

// console.log(Kata.validatePin('1234'));
// console.log(Kata.validatePin('0000'));
// console.log(Kata.validatePin('1111'));
// console.log(Kata.validatePin('123456'));
// console.log(Kata.validatePin('098765'));
// console.log(Kata.validatePin('000000'));
// console.log(Kata.validatePin('123456'));
// console.log(Kata.validatePin('090909'));

// =======================================================================================================

// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

const nbYear = (p0: number, percent: number, aug: number, p: number): number => {
  let counter = 0;
  for (p0; p0 <= p; ) {
    p0 += Math.floor(p0 * (percent / 100) + aug);
    counter += 1;
  }
  return counter;
};
// console.log(nbYear(1500, 5, 100, 5000));
// console.log(nbYear(1500000, 2.5, 10000, 2000000));
// console.log(nbYear(1500000, 0.25, 1000, 2000000));
// console.log(nbYear(1500000, 0.25, -1000, 2000000));
