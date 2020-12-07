let value = "#";
for (let i = 1; i <= 7; i++) {
  console.log(value);
  value += "#";
}

// Second option
for (let text = "#"; text.length <= 7; text += "#") {
  console.log(text);
}
