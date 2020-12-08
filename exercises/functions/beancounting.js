function countBs(word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === "B") count++;
  }

  return count;
}
function countChar(word, char) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === char) count++;
  }

  return count;
}

console.log(countBs("Paulo"));
console.log(countBs("Be are good man. Be brave. Be honest"));
console.log(countChar("Paulo", "a"));
console.log(countChar("Be are good man. Be brave. Be honest.", "a"));
