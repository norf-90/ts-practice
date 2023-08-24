// Необходимо написать функцию сортировки любых
// объектов, которые имеют id по убыванию и по возрастанию

const data = [
  { id: 2, name: 'Петя' },
  { id: 1, name: 'Вася' },
  { id: 3, name: 'Надя' },
];

interface IDataObj {
  id: number;
}

enum Strategy {
  byIncreasing,
  byDecrising,
}

function sortDataById<T extends Array<IDataObj>>(data: T, strategy: 'incr' | 'decr' = 'incr'): T {
  if (strategy === 'decr') {
    return data.sort((a, b) => {
      return b.id - a.id;
    });
  }

  return data.sort((a, b) => {
    return a.id - b.id;
  });
}

console.log(sortDataById([...data]));
console.log(sortDataById([...data], 'decr'));
console.log(sortDataById([...data], 'incr'));
