// La callback donnée en premier argument à setTimeout s'éxécute au bout du nombre de millisecondes données en deuxième argument.

// const displayMessage = () => {
//   console.log("message");
// };

// setTimeout(displayMessage, 3000);

console.log("Début");
setTimeout(() => {
  console.log("message");
}, 4000);
console.log("Fin");
