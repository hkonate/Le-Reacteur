const cleanObject = (obj) => {
  const arr = Object.keys(obj[0]);
  let upperCase;
  let temp;
  obj.forEach((element) => {
    console.log(Object.keys(element));
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "height") {
        element[arr[i]] = Number(element[arr[i]]);
      } else if (typeof element[arr[i]] === "string") {
        upperCase = true;
        temp = element[arr[i]];
        for (let j = 0; j < temp.length; j++) {
          if (temp[j] !== " " && upperCase) {
            element[arr[i]] = temp[j].toUpperCase();
            upperCase = false;
          } else if (temp[j] !== " ") {
            element[arr[i]] += temp[j];
          }
        }
      } else if (element[arr[i]] === undefined) {
        delete element[arr[i]];
      } else if (element[arr[i]] === true) {
        element[arr[i]] = false;
      } else {
        element[arr[i]] = true;
      }
    }
  });
  return obj;
};

const heroes = [
  {
    alias: "   deadpool  ",
    firstname: "    Wade",
    lastname: "wilson  ",
    height: "188",
    country: undefined,
    isActive: true,
  },
  {
    alias: " wolverine ",
    firstname: "james   ",
    lastname: "howlett",
    height: "      160",
    country: "canada",
    isActive: false,
  },
];

console.log(cleanObject(heroes));
