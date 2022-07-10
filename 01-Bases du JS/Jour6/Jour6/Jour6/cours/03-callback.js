// Cette fonction accepte une callback en 3ème argument
const date = 50;

const sayWelcome = (name, func, age) => {
  console.log(`Bienvenue, ${name}, sur votre profil`);
  func(age); // displayAge(30); // console.log(`Vous avez 30 ans`);
};

const bonjour = "salut";

// Cette fonction sera donnée en callback/ argument à sayWelcome
// const displayAge = (num) => {
//   console.log(`Vous avez ${num} ans`);
// };

// Appeller sayWelcome

// sayWelcome("Robert", displayAge, 30);

// Idem avec une fonction anonyme :

sayWelcome(
  "Robert",
  (num) => {
    console.log(`Vous avez ${num} ans`);
  },
  30
);
