const breakingRecords = (score) => {
  let min = score[0];
  let max = score[0];
  let minCount = 0;
  let maxCount = 0;
  let arr = [];
  for (let i = 0; i < score.length; i++) {
    if (score[i] > max) {
      max = score[i];
      maxCount++;
    } else if (score[i] < min) {
      min = score[i];
      minCount++;
    }
  }
  arr.push(maxCount);
  arr.push(minCount);
  return arr;
};

console.log(breakingRecords([13, 14, 9, 17, 33, 11])); // devra afficher [3, 1]

console.log(breakingRecords([4, 7, 21, 36, 12, 28, 35, 4, 24, 42])); // devra afficher [4, 0]
