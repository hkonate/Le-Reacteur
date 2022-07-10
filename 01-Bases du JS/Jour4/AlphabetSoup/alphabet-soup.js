const alphabetSoup = (str) => {
  let array = str.split("");
  return array.sort().join("");
};

console.log(alphabetSoup("hello"));
console.log(alphabetSoup("thereactor"));
console.log(alphabetSoup("hooplah"));
