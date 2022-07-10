let str = "";
const box = (col, row) => {
  for (let i = 0; i < row; i++) {
    if (i === 0 || i === row - 1) {
      str += "o";
      for (let j = 0; j < col - 2; j++) {
        str += "-";
      }
      if (row >= 1 && col > 1) {
        str += "o";
      }
    } else {
      if (i === 0 || i < row - 1) {
        str += "|";
        for (let j = 0; j < col - 2; j++) {
          str += " ";
        }
        if (col > 1) {
          str += "|";
        }
      }
    }
    if (i !== row - 1) {
      str += "\n";
    }
  }
  return str;
};

consolelog(box(1, 5));
