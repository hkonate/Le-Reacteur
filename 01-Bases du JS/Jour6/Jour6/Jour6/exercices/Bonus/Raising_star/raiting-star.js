const ratingStar = (num) => {
  let str = "";
  let notInt = false;
  if (typeof num !== "number") {
    return "Please provide a number.";
  }
  let stars = Math.trunc(num);
  if (num > 0 && Number.isInteger(num) === false) {
    notInt = true;
  }

  for (let i = 0; i < 5; i++) {
    if (i < stars) {
      str += "★";
    } else if (notInt) {
      str += "✪";
      notInt = false;
    } else {
      str += "☆";
    }
  }
  return str;
};

console.log(ratingStar(5)); // Must returns "★★★★★"

console.log(ratingStar(3)); // Must returns "★★★☆☆"

console.log(ratingStar(2.5)); // Must returns "★★✪☆☆"

console.log(ratingStar(4.5)); // Must returns "★★★★✪"

console.log(ratingStar(0)); // Must returns "☆☆☆☆☆"

console.log(ratingStar()); // Must returns "Please provide a number."

console.log(ratingStar("3")); // Must returns "Please provide a number."
