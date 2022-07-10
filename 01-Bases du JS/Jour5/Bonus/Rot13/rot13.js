const rot13 = (str) => {
  const tab1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const tab2 = "abcdefghijklmnopqrstuvwxyz";
  let array = "";
  for (let i = 0; i < str.length; i++) {
    if (tab1.indexOf(str[i]) !== -1) {
      if (tab1.indexOf(str[i]) + 13 > tab1.length - 1) {
        array += tab1[tab1.indexOf(str[i]) + 13 - tab1.length];
      } else {
        array += tab1[tab1.indexOf(str[i]) + 13];
      }
    } else if (tab2.indexOf(str[i]) !== -1) {
      if (tab2.indexOf(str[i]) + 13 > tab2.length - 1) {
        array += tab2[tab2.indexOf(str[i]) + 13 - tab2.length];
      } else {
        array += tab2[tab2.indexOf(str[i]) + 13];
      }
    } else {
      array += str[i];
    }
  }
  return array;
};
console.log(rot13("abc")); // nop

console.log(rot13("My horse is Amazing.")); // Zl ubefr vf Nznmvat.

console.log(rot13("AkjhZ zLKIJz , 23y")); // NxwuM mYXVWm , 23l

console.log(rot13("-12")); // -12
