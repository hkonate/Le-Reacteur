/*
  Description :
  Creates an array excluding all given values.

  Arguments :
  1) The array to inspect.
  2) The values to exclude.

  Returns :
  The new array of filtered values.
*/

// Début de votre code
const without = (array, exclude) => {
  let newArr = [];
  let copy = true;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < exclude.length; j++) {
      if (array[i] === exclude[j]) {
        copy = false;
      }
    }
    if (copy) {
      newArr.push(array[i]);
    }
    copy = true;
  }
  return newArr;
};
// Fin de votre code

console.log(without([2, 1, 2, 3], [1, 2])); // Doit afficher `[3]`
