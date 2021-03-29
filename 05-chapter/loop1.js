function loop(value, test, update, body) {
  for (let index = value; test(index); index = update(index)) {
    body(index);
  }
}
loop(
  0,
  (n) => n <= 20,
  (n) => n + 1,
  (n) => console.log(`value: ${n}`)
);
