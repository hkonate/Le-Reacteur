const checkNums = (num1, num2) => {
  if (num2 > num1) {
    return "num2 est supérieur à num1";
  } else if (num2 < num1) {
    return "num2 est inférieur à num1";
  } else {
    return "num1 et num2 sont équivalents";
  }
};

checkNums(67, 67);
