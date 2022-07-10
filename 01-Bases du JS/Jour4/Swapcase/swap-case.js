const swapCase = (str) => {
  let temp = str.split("");
  for (let i = 0; i < temp.length; i++) {
    {
      if (temp[i] >= "A" && temp[i] <= "Z") {
        temp[i] = temp[i].toLowerCase();
      } else if (temp[i] >= "a" && temp[i] <= "z") {
        temp[i] = temp[i].toUpperCase();
      }
    }
  }
  return temp.join("");
};

console.log(swapCase("Hello"));
console.log(swapCase("Le Reacteur"));
