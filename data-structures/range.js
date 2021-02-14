function range(start, end, step = 1) {
  let result = [];
  if (start < end) {
    for (let value = start; end >= value; value += step) {
      result.push(value);
    }
  } else if (start > end && step < 0) {
    for (let value = start; end <= value; value += step) {
      result.push(value);
    }
  }

  return result;
}

console.log(range(1, 26));
console.log(range(1, 100, 2));
console.log(range(10, 2, -3));
