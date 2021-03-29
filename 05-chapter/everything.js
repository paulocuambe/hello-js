function every(array = [], callback) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      return false;
    }
  }
  return true;
}

function everyWithSome(array = [], callback) {
  return !array.some((n) => !callback(n));
}

console.log(every([1, 3, 5], (n) => n < 10));
// → true
console.log(every([2, 4, 16], (n) => n < 10));
// → false
console.log(every([], (n) => n < 10));
// → true
console.log(every([10, 10, 10], (n) => n == 10));
// → true
console.log(every([2, 4, 16, 11], (n) => n == 10));
// → false

console.log("\nTest using some version\n");
console.log(everyWithSome([1, 3, 5], (n) => n < 10));
// → true
console.log(everyWithSome([2, 4, 16], (n) => n < 10));
// → false
console.log(everyWithSome([], (n) => n < 10));
// → true
console.log(everyWithSome([10, 10, 10], (n) => n == 10));
// → true
console.log(everyWithSome([2, 4, 16, 11], (n) => n == 10));
// → false
