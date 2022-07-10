const migratoryBirds = (arr) => {
  let count = [0, 0, 0, 0, 0];
  let winner = 0;
  for (let i = 0; i < arr.length; i++) {
    count[arr[i] - 1]++;
  }
  for (let i = 0; i < count.length; i++) {
    if (count[i] > winner) {
      winner = count[i];
    }
  }
  return count.indexOf(winner) + 1;
};

console.log(migratoryBirds([1, 4, 4, 4, 5, 3])); // doit afficher `4`

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])); // doit afficher `3`

console.log(
  migratoryBirds([
    5, 2, 2, 2, 4, 1, 1, 2, 4, 2, 2, 2, 4, 1, 2, 4, 1, 2, 4, 4, 3, 2, 3, 1, 3,
    3, 4, 3, 5, 2, 5, 3, 4, 1, 3, 2, 3, 3, 3, 5, 2, 4, 1, 5, 4, 5, 4, 4, 4, 5,
    3, 2, 1, 1, 3, 1, 1, 5, 5, 3, 5, 2, 2, 4, 5, 2, 4, 3, 2, 4, 4, 5, 3, 2, 3,
    2, 4, 5,
  ])
); // doit afficher `2`

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 2, 1, 3, 5])); // doit afficher `1`

console.log(
  migratoryBirds([2, 1, 5, 3, 2, 5, 1, 5, 5, 4, 4, 2, 1, 5, 4, 5, 3, 3, 3])
); // doit afficher `5`
