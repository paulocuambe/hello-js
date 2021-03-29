function flatten(array) {
  return array.reduce((accumulator, current) => {
    if (Array.isArray(current)) {
      return accumulator.concat(current);
    } else {
      accumulator.push(current);
      return accumulator;
    }
  });
}

let arrays = [[1, 2, 3], [4, 5], 321, [12, 2, [12, 3]]];
console.log(flatten(arrays));
