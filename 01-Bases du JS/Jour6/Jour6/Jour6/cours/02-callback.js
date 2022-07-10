const displayMessage = (name) => {
  console.log(`Le compte de ${name} a bien été créé`);
};

// displayMessage("Tom");

const createAccount = (userName, cb) => {
  // Lorsque j'apelle cette fonction, on fait un console.log de l'argument userName
  console.log(`Création du compte de ${userName}`);
  // Et ensuite j'appelle la fonction passée en callback à createAccount (donc ici displayMessage) en lui donnant comme argument userName
  cb(userName); // displayMessage("Tom")
};

createAccount("Tom", displayMessage);
