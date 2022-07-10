const powerFunc = (num, power) => {
  if (power === 0 || num === 0) {
    return "";
  }
  if (power === 1) {
    return num;
  }
  if (num === 1) {
    return 1;
  }
  let result = num;
  let limit = power;

  if (power < 0) {
    limit *= -1;
  }
  for (let i = 1; i < limit; i++) {
    result *= num;
  }
  if (power < 0) {
    result = 1 / result;
  }
  return result;
};
console.log(powerFunc(0, -3));
