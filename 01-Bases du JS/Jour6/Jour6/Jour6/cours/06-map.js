// Map renvoit un nouveau tableau construit à partir du premier ; chaque élément du premier tableau ayant été donné à la callback comme argument. Le tableau en sortie est composé des valeur de retour de la callback.

const tab = [1, 2, 3, 4, 5];

// const double = (num) => {
//   return num * 2;
// };

// const newTab = tab.map(double);

const newTab = tab.map((num) => {
  return num * 2;
});
console.log(newTab);
