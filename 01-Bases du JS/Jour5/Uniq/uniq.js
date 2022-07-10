/*
  Description :
  Creates a duplicate-free version of an array, in which only the first occurrence of each element is kept. The order of result values is determined by the order they occur in the array.

  Arguments :
  1) The array to inspect.
  
  Returns :
  The new duplicate free array.
*/

// Début de votre code
const uniq = (tab) => {
  let array = [];
  let copy = 0;
  for (let i = 0; i < tab.length; i++) {
    if (i === 0) {
      array.push(tab[i]);
    } else {
      for (let j = 0; j < array.length; j++) {
        if (tab[i] === array[j]) {
          copy = 1;
        }
      }
      if (!copy) {
        array.push(tab[i]);
      }
      copy = 0;
    }
  }
  return array;
};
// Fin de votre code

console.log(uniq([2, 1, 2])); // Doit afficher `[2, 1]`
