/*
  L'objectif de cet exercice est d'afficher "o---o" sur plusieurs lignes.
  Exemple si `height` vaut 4 :
  o---o
  o---o
  o---o
  o---o
*/

// Début de votre code
const generateString = (num) => {
  let str = "";
  for (let i = 0; i < num; i++) {
    str += "o---o";
    if (i !== num - 1) {
      str += "\n";
    }
  }
  return str;
};
// Fin de votre code

const height = 4;
console.log(generateString(height));
