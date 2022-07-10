const isWeekend = (str) => {
  if (new Date(str).getDay() === 0 || new Date(str).getDay() === 6) {
    return "weekend";
  }
  return "not weekend";
};
console.log(isWeekend("Nov 11 2019")); // "not weekend"
console.log(isWeekend("Dec 7 2019")); // "weekend"
