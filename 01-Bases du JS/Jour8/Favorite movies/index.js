const axios = require("axios");
let str = "";
const movies = ["The+Green+Mile", "the+pursuit+of+happyness", "cast+away"];
axios
  .get(" https://www.omdbapi.com/?t=The+Green+Mile&apikey=b0b116ea")
  .then((response) => {
    str += `Name : ${response.data.Title}\nYear : ${response.data.Year}\nGenre : ${response.data.Genre}\nActors : ${response.data.Actors}\n`;
    str += "----------\n";
  })
  .catch((error) => {
    console.log(error.message);
  });

axios
  .get("http://www.omdbapi.com/?t=the+pursuit+of+happyness&apikey=b0b116ea")
  .then((response) => {
    str += `Name : ${response.data.Title}\nYear : ${response.data.Year}\nGenre : ${response.data.Genre}\nActors : ${response.data.Actors}\n`;
    str += "----------\n";
  })
  .catch((error) => {
    console.log(error.message);
  });

axios
  .get(" https://www.omdbapi.com/?t=cast+away&apikey=b0b116ea")
  .then((response) => {
    str += `Name : ${response.data.Title}\nYear : ${response.data.Year}\nGenre : ${response.data.Genre}\nActors : ${response.data.Actors}\n`;
    str += "----------";
    console.log(str);
  })
  .catch((error) => {
    console.log(error.message);
  });
