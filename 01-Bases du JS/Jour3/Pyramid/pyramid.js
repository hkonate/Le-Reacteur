let str = "";
const pyramid = (stairs) => {
  if (stairs === 1) {
    return "X";
  }
  let limit = 1;
  let blank = stairs;
  for (let i = 0; i < stairs; i++) {
    for (let k = 0; k < blank; k++) {
      str += " ";
    }
    blank--;
    for (let j = 0; j < limit; j++) {
      str += "X";
    }
    limit += 2;
    if (i !== stairs - 1) {
      str += "\n";
    }
  }
  return str;
};
console.log(pyramid(8));
