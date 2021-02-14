for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

console.log("\n--- Solution 2 ---");

for (let i = 1; i <= 100; i++) {
  let content = "";
  if (i % 3 == 0) content += "Fizz";
  if (i % 5 == 0) content += "Buzz";
  console.log(content || i);
}
