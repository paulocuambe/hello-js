function reverseArray(array) {
  let newArray = [];
  for (const element of array) {
    newArray.unshift(element);
  }
  return newArray;
}

function reverseArrayInPlace(array) {
  array.splice(0, array.length, ...reverseArray(array));
  return array;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("--Reverse array--\n");
console.log("Reverse: ", reverseArray(array));
console.log("Original: ", array);

console.log("\n--Reverse in place--\n");
console.log("Reverse: ", reverseArrayInPlace(array));
console.log("Original: ", array);
