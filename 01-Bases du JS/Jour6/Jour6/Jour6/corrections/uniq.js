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
  // Je crée un tableau vide
  const newTab = [];
  // Je parcours tab
  for (let i = 0; i < tab.length; i++) {
    const element = tab[i];
    // Si l'élément sur lequel je boucle n'est pas dans newTab, je l'y met
    if (newTab.indexOf(element) === -1) {
      newTab.push(element);
    }
    // Sinon, si il est déjà dans newTab, je l'ignore
  }

  return newTab;
};
// Fin de votre code

console.log(uniq([2, 1, 2])); // Doit afficher `[2, 1]`
