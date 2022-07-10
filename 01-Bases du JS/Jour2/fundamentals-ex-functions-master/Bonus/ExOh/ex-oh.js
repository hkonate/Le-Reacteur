const exOh = (str) => {
  if (str.split("x").length === str.split("o").length) {
    return true;
  }
  return false;
};

console.log(exOh("x"));
