const palindrome = (str) => {
  const string = str.toUpperCase();
  console.log(string);
  for (let i = 0, j = str.length - 1; i < str.length; i++, j--) {
    console.log(string[i], string[j]);
    while (string[i] === " " || string[j] === " ") {
      if (string[i] === " ") {
        i++;
      }
      if (string[j] === " ") {
        j--;
      }
    }
    if (string[i] !== string[j] && string[i] !== " " && string[j] !== " ") {
      return false;
    }
  }
  return true;
};

console.log(palindrome("azacar"));
