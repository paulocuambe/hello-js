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
  } else {
    result.push(start)
  }

  return result;
}

function sum(values) {
  total = 0;
  for (value of values) {
    total += value;
  }

  return total;
}

console.log(range(2, 26));
console.log(sum(range(1, 26)));
console.log(sum(range(1, 100, 2)));
console.log(range(10, 2, -3));
console.log(sum(range(10, 2, -3)));
