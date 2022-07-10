let str = "";
const NumberToLetters = (num) => {
  let count = 0;
  //   if (typeof num !== Number) {
  //     return "Paramètre invalide";
  //   }
  let divider = 1;
  count = str.length - 1;
  console.log(str.length);
  for (let i = 0; i < count; i++) {
    divider *= 10;
  }
  console.log(divider);
  if (num > 19) {
    if (num / 10 < 3) {
      str += "vingt";
      num -= 20;
    } else if (num / 10 < 4) {
      num -= 30;
      str += "trente";
    } else if (num / 10 < 5) {
      str += "quarante";
      num -= 40;
    } else if (num / 10 < 6) {
      str += "cinquante";
      num -= 50;
    } else if (num / 10 < 7) {
      str += "soixante";
      num -= 60;
    }

    if (num === 1) {
      str += " et ";
    } else if (num !== 0) {
      str += "-";
    }
  }
  if (num > 9) {
    if (num === 10 || (num > 16 && num < 20)) {
      str += "dix";
      console.log(num);
      if (divider === 1) {
        str += "-";
        num -= 10;
      }
    } else if (num === 11) {
      str += "onze";
    } else if (num === 12) {
      str += "douze";
    } else if (num === 13) {
      str += "treize";
    } else if (num === 14) {
      str += "quatorze";
    } else if (num === 15) {
      str += "quinze";
    } else if (num === 16) {
      str += "seize";
    } else if (num === 17) {
      str += "dix";
    } else if (num === 18) {
      str += "dix";
    } else if (num === 19) {
      str += "dix";
    }
  }
  console.log(num);
  if (num === 1) {
    str += "un";
  } else if (num === 2) {
    str += "deux";
  } else if (num === 3) {
    str += "trois";
  } else if (num === 4) {
    str += "quatre";
  } else if (num === 5) {
    str += "cinq";
  } else if (num === 6) {
    str += "six";
  } else if (num === 7) {
    str += "sept";
  } else if (num === 8) {
    str += "huit";
  } else if (num === 9) {
    str += "neuf";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

console.log(NumberToLetters(61));
