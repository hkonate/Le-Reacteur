const vowelCount = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u" ||
      str[i] === "y"
    ) {
      count++;
    }
  }
  return count;
};

console.log(vowelCount("thereactor"));
