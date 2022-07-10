let str = "";

const box = (col, row) => {
  for (let i = 0; i < row; i++) {
    if (i === 0) {
      str += "A";
      if (col > 3) {
        str += "-";
      }
      if (col > 4) {
        for (let j = 0; j < col - 4; j++) {
          str += "*";
        }
      }
      if (col >= 4) {
        str += "-";
      }
      if (col > 1) {
        str += "B";
      }
    } else if (i === row - 1) {
      str += "D";
      if (col > 3) {
        str += "-";
      }
      if (col > 4) {
        for (let j = 0; j < col - 4; j++) {
          str += "*";
        }
      }
      if (col >= 4) {
        str += "-";
      }
      if (col > 1) {
        str += "C";
      }
    } else {
      str += "|";
      for (let i = 0; i < col - 2; i++) {
        str += " ";
      }
      if (col > 1) {
        str += "|";
      }
    }
    if (i !== row - 1) {
      str += "\n";
    }
  }
  return str;
};

console.log(box(7, 6));
