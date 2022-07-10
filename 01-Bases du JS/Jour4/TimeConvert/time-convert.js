const timeConvert = (num) => {
  let mins = Math.floor(num / 60);
  let hours = Math.floor(mins / 60);
  let secs = num - mins * 60;
  if (mins > 60) {
    mins -= 60;
  }
  let str = "";
  if (hours > 9) {
    str += hours + ":";
  } else {
    str += `0${hours}:`;
  }
  if (mins > 9) {
    str += mins + ":";
  } else {
    str += `0${mins}:`;
  }
  if (secs > 9) {
    str += secs;
  } else {
    str += `0${secs}`;
  }
  return str;
};

console.log(timeConvert(126)); // Affichera "00:02:06"
console.log(timeConvert(4804)); // Affichera "01:20:04"
