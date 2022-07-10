/*
  Description :
  Converts the first character of string to lower case.

  Arguments :
  1) The string to convert.

  Returns :
  The converted string.
*/

// Début de votre code
const lowerFirst = (str) => {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    // console.log(str[i]);
    if (i === 0) {
      newStr = newStr + str[i].toLowerCase();
    } else {
      newStr = newStr + str[i];
    }
  }

  return newStr;
};

// const lowerFirst = (str) => {
//   // Ça ne marche pas avec les string, mais avec les tableaux oui !
//   //   str[0] = str[0].toLowerCase();
//   //   return str;
//   const tab = str.split("");
//   tab[0] = tab[0].toLowerCase();
//   //   console.log(tab);
//   return tab.join("");
// };

const lowerFirst = (str) => {
  return str.slice(0, 1).toLowerCase() + str.slice(1);
};

// Fin de votre code

console.log(lowerFirst("Fred")); // Doit afficher `fred`

console.log(lowerFirst("FRED")); // Doit afficher `fRED`
