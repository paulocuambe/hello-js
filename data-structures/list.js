// Your code here.
function arrayToList(array) {
  if (array.length == 1) {
    return { value: array[0], rest: null };
  }
  const value = array[0];
  array.shift();
  return { value, rest: arrayToList(array) };
}

// → {value: 10, rest: {value: 20, rest: {value: 30, rest: null}}}
function listToArray(obj) {
  if (!obj.rest) {
    return [obj.value];
  }

  return [obj.value, ...listToArray(obj.rest)];
}

// console.log(prepend(10, prepend(20, null)));
function prepend(element, list) {
  return { value: element, rest: list };
}

// {value: 10, rest: {value: 20, rest: null}}; // 20
function nth(list, number) {
  if (!list) return undefined;
  if (number === 0) return list.value;
  return nth(list.rest, number - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: {value: 30, rest: null}}}
console.log(listToArray(arrayToList([10, 20, 30, 40])));
// → [10, 20, 30, 40]
console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// // → 20
