const tableMult = (num) => {
  if (typeof num !== "number") {
    return "Vous devez entrer un nombre";
  } else if (Number.isInteger(num) === false) {
    return "Vous devez entrer un nombre entier";
  } else if (num <= 0) {
    return "Vous devez entrer un nombre positif";
  }
  let str = "";
  for (let i = 1; i < num + 2; i++) {
    str += `${i} * ${num} = ${i * num}`;
    if (i !== num + 1) {
      str += "\n";
    }
  }
  return str;
};

console.log(tableMult(9));
console.log(tableMult(-1));
console.log(tableMult("ABC"));
console.log(tableMult(1.1));
