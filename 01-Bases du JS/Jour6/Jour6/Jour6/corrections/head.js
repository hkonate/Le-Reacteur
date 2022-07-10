/*
  Description :
  Gets the first element of array.

  Arguments :
  1) The array to query.

  Returns :
  The first element of array.
*/

// Début de votre code
const head = (tab) => {
  //   const firstElement = tab[0];
  //   return firstElement;

  //   return tab[0];

  //   const firstElement = tab.shift();
  //   return firstElement;

  return tab.shift();
};

// Fin de votre code

console.log(head([2, 3, 4])); // Doit afficher `2`
