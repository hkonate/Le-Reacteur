/*
  Description :
  Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

  Arguments :
  1) The array to compact.

  Returns :
  The new array of filtered values.
*/

// Début de votre code
const compact = (array) => {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (
      array[i] !== false &&
      array[i] !== null &&
      array[i] !== 0 &&
      array[i] !== "" &&
      array[i] !== undefined &&
      array[i] !== NaN
    ) {
      newArr.push(array[i]);
    }
  }
  return newArr;
};
// Fin de votre code

console.log(compact([0, 1, false, 2, "", 3])); // Doit afficher `[1, 2, 3]`
