let str = "";

const box = (col, row) => {
  for (let i = 0; i < row; i++) {
    if (i === 0) {
      str += "/";
      for (let j = 0; j < col - 2; j++) {
        str += "*";
      }
      if (col > 1) {
        str += "\\";
      }
    } else if (i === row - 1) {
      str += "\\";
      for (let j = 0; j < col - 2; j++) {
        str += "*";
      }
      if (col > 1) {
        str += "/";
      }
    } else {
      str += "*";
      for (let i = 0; i < col - 2; i++) {
        str += " ";
      }
      if (col > 1) {
        str += "*";
      }
    }
    if (i !== row - 1) {
      str += "\n";
    }
  }
  return str;
};

console.log(box(2, 5));
