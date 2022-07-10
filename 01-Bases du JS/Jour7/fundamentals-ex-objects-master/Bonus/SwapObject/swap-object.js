/*const user = {
    Steven: "firstname",
    Persia: "lastname"
  };
  
  to this :
  
  const user = {
    firstname: "Steven",
    lastname: "Persia"
  };
  
  Code*/

const swap = (obj) => {
  const swaped = {};
  const key = Object.keys(obj);
  for (let i = 0; i < key.length; i++) {
    swaped[obj[key[i]]] = key[i];
  }
  return swaped;
};

const user = {
  Steven: "firstname",
  Persia: "lastname",
};

console.log(swap(user)); //return {firstname: "Steven", lastname: "Persia"}
