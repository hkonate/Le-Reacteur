/*
  Objectif : Afficher "L'age n'a pas été défini"
*/

const user = {
  name: "Farid",
};

if (user.age) {
  console.log(user.age);
} else {
  console.log("L'age n'a pas été défini");
}
