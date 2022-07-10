/*
  Description :
  Repeats the given string n times. You should not use the existing `repeat` string method.

  Arguments :
  1) The string to repeat.
  2) The number of times to repeat the string.
  
  Returns :
  The repeated string.
*/

// Début de votre code
const repeat = (str, num) => {
  let newStr = "";

  for (let i = 1; i <= num; i++) {
    newStr += str;
  }

  return newStr;
};
// Fin de votre code

console.log(repeat("*", 3)); // Doit afficher `***`

console.log(repeat("abc", 2)); // Doit afficher `abcabc`

console.log(repeat("abc", 0)); // Doit afficher  ``
