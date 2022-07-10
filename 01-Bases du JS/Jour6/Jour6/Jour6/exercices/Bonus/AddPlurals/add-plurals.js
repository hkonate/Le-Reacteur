const addPlurals = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].slice(-2) === "al") {
      newArr.push(arr[i].slice(0, -2) + "aux");
    } else {
      newArr.push(arr[i] + "s");
    }
  }
  return newArr;
};

const words = ["cheval", "sport", "animal", "formateur", "journal"];

console.log(addPlurals(words)); //returns ["chevaux", "sports", "animaux", "formateurs", "journaux"]
