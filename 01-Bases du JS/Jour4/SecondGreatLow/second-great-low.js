const secondGreatLow = (tab) => {
  for (let i = 0; i < tab.length; i++) {
    if (typeof tab[i] !== "number") {
      return "ERROR";
    }
  }
  let maxValue = tab[0];
  let minValue;
  let secMaxValue = 0;
  let secMinValue = 0;
  let array = [];
  if (tab.length > 2) {
    for (let i = 0; i < tab.length; i++) {
      if (maxValue < tab[i]) {
        maxValue = tab[i];
      }
    }
    minValue = maxValue;
    for (let i = 0; i < tab.length; i++) {
      if (minValue > tab[i]) {
        minValue = tab[i];
      }
    }

    secMinValue = maxValue;
    secMaxValue = minValue;

    for (let i = 0; i < tab.length; i++) {
      if (secMaxValue < tab[i] && tab[i] !== maxValue) {
        secMaxValue = tab[i];
      }
      if (secMinValue > tab[i] && tab[i] !== minValue) {
        secMinValue = tab[i];
      }
    }
  } else if (tab.length === 2) {
    if (tab[0] > tab[1]) {
      secMaxValue = tab[0];
      secMinValue = tab[1];
    } else {
      secMaxValue = tab[1];
      secMinValue = tab[0];
    }
  } else {
    array = [tab[0]];
    return array;
  }
  array = [secMinValue, secMaxValue];
  return array;
};

console.log(secondGreatLow([1, 42, 42, 180])); // Affichera [42, 42]
console.log(secondGreatLow([4, 90])); // Affichera [90, 4]
console.log(secondGreatLow([7, 7, 12, 98, 106])); // Affichera [12, 98]
console.log(secondGreatLow([8])); // Affichera [8, 8]
console.log(secondGreatLow([-12, -12, -12])); // Affichera [-12, -12]
console.log(secondGreatLow(["ABC", 9, 4, 10])); //  Affichera : ERROR
