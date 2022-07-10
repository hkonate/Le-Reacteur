const displayArray = (tab, option) => {
  return tab.join(option);
};

console.log(displayArray(["Pomme", "Banane", "Abricot", "Cerise"], " "));
console.log(displayArray(["Pomme", "Banane", "Abricot", "Cerise"], ", "));
