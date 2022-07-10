/*
  Description :
  Gets the size of collection by returning its length.

  Arguments :
  1) The collection to inspect.

  Returns :
  The collection size.
*/

// Début de votre code
const size = (str) => {
  if (Array.isArray(str) || typeof str === "string") {
    return str.length;
  }
  return 0;
};
// Fin de votre code

console.log(size("pebbles")); // Doit afficher `7`

// Pour l'exemple suivant, vous pourriez avoir besoin de `Array.isArray`
// Voir https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
console.log(size([1, 2, 3])); // Doit afficher `3`

console.log(size()); // Doit afficher `0`

console.log(size(null)); // Doit afficher `0`

console.log(size(10)); // Doit afficher `0`

console.log(size(true)); // Doit afficher `0`
