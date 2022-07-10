const doop = (tab) => {
  if (tab.length !== 3) {
    return "ERROR";
  } else if (
    Number.isInteger(tab[0]) === false ||
    Number.isInteger(tab[2]) === false
  ) {
    return "ERROR";
  } else if (
    tab[1] !== "+" &&
    tab[1] !== "-" &&
    tab[1] !== "*" &&
    tab[1] !== "/" &&
    tab[1] !== "%"
  ) {
    return "ERROR";
  }
  let result = 0;
  if (tab[1] === "+") {
    result = tab[0] + tab[2];
  } else if (tab[1] === "-") {
    result = tab[0] - tab[2];
  }
  if (tab[1] === "*") {
    result = tab[0] * tab[2];
  }
  if (tab[1] === "/") {
    result = tab[0] / tab[2];
  }
  if (tab[1] === "%") {
    result = tab[0] % tab[2];
  }
  return result;
};

console.log(doop([5, "+", 4])); // Affichera : 9
console.log(doop([9, "*", 2])); // Affichera : 18
console.log(doop([11, "-", 4])); // Affichera : 7
console.log(doop([-1, "*", 4])); // Affichera : -4
console.log(doop([10.1, "-", 2])); // Affichera : ERROR
console.log(doop([8])); // Affichera : ERROR
