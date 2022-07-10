let str = "";

const box = (col, row) => {
  for (let i = 0; i < row; i++) {
    if (i === 0) {
      str += "A";
      for (let j = 0; j < col - 2; j++) {
        str += "B";
      }
      if (col > 1) {
        str += "A";
      }
    } else if (i === row - 1) {
      str += "C";
      for (let j = 0; j < col - 2; j++) {
        str += "B";
      }
      if (col > 1) {
        str += "C";
      }
    } else {
      str += "B";
      for (let j = 0; j < col - 2; j++) {
        str += " ";
      }
      if (col > 1) {
        str += "B";
      }
    }
    if (i !== row - 1) {
      str += "\n";
    }
  }
  return str;
};

console.log(box(4, 4));
