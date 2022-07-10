const lowerUpper = (str) => {
  let array = str.toLowerCase().split(" ");
  let temp = "";
  for (let i = 0; i < array.length; i++) {
    for (let j = 0, count = 1; j < array[i].length; j++, count++) {
      if (count % 2 === 0 && j !== 0) {
        temp += array[i][j].toUpperCase();
      } else {
        temp += array[i][j];
      }
    }
    if (i !== array.length - 1) {
      temp += " ";
    }
  }
  return temp;
};

console.log(lowerUpper("La ville de Paris"));
