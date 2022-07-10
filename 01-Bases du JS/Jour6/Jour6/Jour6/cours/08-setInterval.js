// la callback donnée en premier argument à setInterval est éxécutée à chaque nombre de millisecondes données en deuxième argument

// const display = () => {
//   console.log("message");
// };

// setInterval(display, 2000);

let counter = 0;

console.log("A");

const stop = setInterval(() => {
  console.log(counter);
  counter++;
  if (counter === 3) {
    console.log("Fin");
    clearInterval(stop);
  }
}, 2000);

console.log("B");
