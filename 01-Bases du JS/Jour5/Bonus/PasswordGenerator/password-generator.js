const passwordGen = (num) => {
  let array = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let tab = "";
  for (let i = 0; i < num; i++) {
    tab += array.charAt(Math.floor(Math.random() * array.length));
  }
  console.log(Math.random() * array.length, array.length);
  return tab;
};

console.log(passwordGen(8)); // Df1jUNaQ

console.log(passwordGen(8)); // digVQ4zy
