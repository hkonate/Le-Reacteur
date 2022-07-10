const backspace = (str) => {
  let newStr = [];
  let count = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === "@") {
      count++;
    } else if (count === 0) {
      newStr.push(str[i]);
    } else {
      count--;
    }
  }
  return newStr.reverse().join("");
};

console.log(backspace("Rer@ayu@@ctt@eupm@@r")); // Must returns "Reacteur"

console.log(backspace("YOO@")); // Must returns "YO"

console.log(backspace("@@@")); // Must returns ""

console.log(backspace("")); // Must returns ""
