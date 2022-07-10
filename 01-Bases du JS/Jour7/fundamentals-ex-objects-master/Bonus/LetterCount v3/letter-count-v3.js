const letterCount = (str) => {
  if (!str) {
    return -1;
  }
  let winner = -1;
  let repeatLetters = 0;
  let result = 0;
  let newStr = "";
  const obj = {
    words: str.split(" "),
  };
  for (let i = 0; i < obj.words.length; i++) {
    obj[obj.words[i]] = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0,
    ];
  }
  for (let i = 0; i < obj.words.length; i++) {
    for (let j = 0; j < obj.words[i].length; j++) {
      if (
        obj.words[i].charCodeAt(j) >= 97 &&
        obj.words[i].charCodeAt(j) <= 122
      ) {
        obj[obj.words[i]][obj.words[i].charCodeAt(j) - 97]++;
      }
    }
  }
  for (let i = 0; i < obj.words.length; i++) {
    for (let j = 0; j < obj[obj.words[i]].length; j++) {
      if (obj[obj.words[i]][j] > 1) {
        repeatLetters += obj[obj.words[i]][j];
      }
    }
    if (result < repeatLetters) {
      winner = i;
      result = repeatLetters;
    }
    repeatLetters = 0;
  }
  // Check if they is a winner && Filter non alphabetic characters && add to new string
  if (winner !== -1) {
    for (let i = 0; i < obj.words[winner].length; i++) {
      if (
        obj.words[winner].charCodeAt(i) >= 97 &&
        obj.words[winner].charCodeAt(i) <= 122
      ) {
        newStr += obj.words[winner][i];
      }
    }
    return newStr; //return string
  }
  return winner;
};
console.log(letterCount("hello apple pie")); // Affichera `hello`

console.log(letterCount("")); // Affichera `-1`

console.log(letterCount("c'est elle, emmanuelle, tellement belle !"));
