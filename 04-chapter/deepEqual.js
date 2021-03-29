function deepEqual(a, b) {
  if (a === b) return true;

  if (a == null || typeof a != "object" || b == null || typeof b != "object") return false;

  if (Object.keys(a).length != Object.keys(b).length) return false;

  for (let key in a) {
    if (!Object.keys(b).includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}

console.log(deepEqual({ a: 1, b: 2, c: { h: 1 } }, { a: 1, b: 2, c: { h: 1 } }));
console.log(deepEqual({ a: 1, b: 254 }, { a: 1, b: 212 }));
