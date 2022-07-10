/*
  Description :
  Gets all but the first element of array.

  Arguments :
  1) The array to query.

  Returns :
  The slice of array.
*/

// Début de votre code
const tail = (tab) => {
  //   tab.shift();
  //   return tab;

  //   const sliced = tab.slice(1);
  //   return sliced;

  return tab.slice(1);
};
// Fin de votre code

console.log(tail([1, 2, 3])); // Doit afficher `[2, 3]`
