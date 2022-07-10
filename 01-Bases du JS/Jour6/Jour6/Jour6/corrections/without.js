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
const without = (tab, toExclude) => {
  const newTab = [];
  //   Je parcours tab
  for (let i = 0; i < tab.length; i++) {
    const elementToFilter = tab[i];
    // Pour chaque élément dans tab, si il est présent dans toExclude, je ne fais rien ; sinon je le push dans newTab
    // Quel est l'index de elementToFilter dans toExclude ? Si c'est -1, c'est qu'il n'est pas présent donc je le push dans newTab
    if (toExclude.indexOf(elementToFilter) === -1) {
      newTab.push(elementToFilter);
    }
  }
  return newTab;
};
// Fin de votre code

console.log(without([2, 1, 2, 3], [1, 2])); // Doit afficher `[3]`
