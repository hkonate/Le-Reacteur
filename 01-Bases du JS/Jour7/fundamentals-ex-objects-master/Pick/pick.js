/*
  Description :
  Creates an object composed of the picked object properties.

  Arguments :
  1) The source object.
  2) The property paths to pick.

  Returns :
  The new object.
*/

// Début de votre code
const pick = (obj, select) => {
  const picked = {};
  for (let i = 0; i < select.length; i++) {
    if (obj[select[i]]) {
      picked[select[i]] = obj[select[i]];
    }
  }
  return picked;
};
// Fin de votre code

console.log(pick({ a: 1, b: "2", c: 3 }, ["a", "c"])); // Doit afficher { a: 1, c: 3 }
