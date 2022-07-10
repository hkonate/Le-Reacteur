/*
  Description :
  Creates an array of values by running each element in collection thru iteratee. The iteratee is invoked with one argument: value.
  
  Arguments :
  1) The collection to iterate over.
  2) The function invoked per iteration.
  
  Returns :
  The new mapped array.
*/

// Début de votre code
const map = (col, func) => {
  let arr = [];
  for (let i = 0; i < col.length; i++) {
    arr.push(func(col[i]));
  }
  return arr;
};
// Fin de votre code

const callback = (value) => {
  return value * 2;
};

console.log(map([1, 2, 3], callback)); // Doit afficher `[2, 4, 6]`

console.log(map([4, 1, 3])); // Doit déclencher une erreur `TypeError : ... is not a function`
