/* 
Необходимо написать функцию toString, которая принимает любой тип
и возвращает его строковое представление. Если не может то возвращает undefined
 */

function toString<T>(data: T): string | undefined {
  try {
    return JSON.stringify(data);
  } catch (_) {
    return undefined;
  }
}

const testValues = [1, 'string', true, null, undefined, NaN, [1, 2, 'sthr'], { value: 'someval' }];

testValues.forEach(el => {
  console.log(toString(el));
});
console.log(' ');

function toStringAnswer<T>(data: T): string | undefined {
  if (Array.isArray(data)) {
    return data.toString();
  }
  switch (typeof data) {
    case 'string':
      return data;
    case 'number':
    case 'symbol':
    case 'bigint':
    case 'boolean':
    case 'function':
      return data.toString();
    case 'object':
      return JSON.stringify(data);
    default:
      return undefined;
  }
}

testValues.forEach(el => {
  console.log(toStringAnswer(el));
});
