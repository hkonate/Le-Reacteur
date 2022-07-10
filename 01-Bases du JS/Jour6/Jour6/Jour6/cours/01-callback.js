const sayHello = (arg) => {
  console.log("Hello " + arg);
};

// sayHello("Alexis");

const sayGoodbye = (arg) => {
  console.log("Goodbye " + arg);
};

// sayGoodbye("Tom");

const salut = () => {
  console.log("salut");
};

// salut();

const saySomething = (name, callback) => {
  //   console.log(name);
  //   console.log(callback);
  callback(name);
};

// saySomething("Tom", sayHello);
saySomething("Alexis", sayGoodbye);
