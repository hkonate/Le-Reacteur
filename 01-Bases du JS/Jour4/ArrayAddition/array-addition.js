const arrayAddition = (tab) => {
  let bigger = 0;
  let result = 0;

  for (let i = 0; i < tab.length; i++) {
    if (bigger < tab[i]) {
      bigger = tab[i];
    }
  }

  for (let i = 0; i < tab.length; i++) {
    if (tab[i] !== bigger) {
      result += tab[i];
    }
  }
  if (bigger === result) {
    return true;
  }
  return false;
};

console.log(arrayAddition([1, 2, 3, 12, 6])); // Affichera true
console.log(arrayAddition([1, 2, 3, 4])); // Affichera false
