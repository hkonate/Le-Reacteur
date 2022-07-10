// La fonction filter construit un autre tableau qui ne contiendra que les élément du premier tableau qui auront passé le filtre. Elle parcourt le tableau et donne chaque élément en argument à la callback. Si cette dernière renvoit true, l'élément est intégré au nouveau tableau ; si non, non.

const names = [
  "tom",
  "xavier",
  "farid",
  "brice",
  "alexis",
  "gwendoline",
  "bastien",
];

// const onlyB = (str) => {
//   return str[0] === "b";
// };

// const newTab = names.filter(onlyB);

const newTab = names.filter((elem) => elem[0] === "b");
console.log(newTab);
