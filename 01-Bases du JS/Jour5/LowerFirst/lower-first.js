/*
  Description :
  Converts the first character of string to lower case.

  Arguments :
  1) The string to convert.

  Returns :
  The converted string.
*/

// Début de votre code
const lowerFirst = (str) => str[0].toLowerCase() + str.slice(1);
// Fin de votre code

console.log(lowerFirst("Fred")); // Doit afficher `fred`

console.log(lowerFirst("FRED")); // Doit afficher `fRED`
