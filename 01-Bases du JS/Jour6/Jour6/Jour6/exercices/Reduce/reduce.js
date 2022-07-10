/*
  Description :
  Reduces collection to a value which is the accumulated result of running each element in collection thru iteratee, where each successive invocation is supplied the return value of the previous. The iteratee is invoked with two arguments: accumulator, value.

  Arguments :
  1) The collection to iterate over.
  2) The function invoked per iteration.
  
  Returns :
  The accumulated value.
*/

// Début de votre code
const reduce = (arr, callback) => {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res = callback(res, arr[i]);
  }
  return res;
};
// Fin de votre code

const result = reduce([0, 1, 2, 3, 4], (previousValue, currentValue) => {
  return previousValue + currentValue;
});

console.log(result); // Doit afficher `10`
