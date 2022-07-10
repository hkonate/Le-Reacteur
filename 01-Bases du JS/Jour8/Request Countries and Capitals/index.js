const { default: axios } = require("axios");
const countries = require("axios");

axios
  .get("https://countriesnow.space/api/v0.1/countries/capital")
  .then((response) => {
    let char = "";
    for (let i = 0; i < response.data.data.length; i++) {
      char += response.data.data[i].name + " : ";
      if (response.data.data[i].capital === "") {
        char += "N/A";
      } else {
        char += response.data.data[i].capital;
      }
      if (i !== response.data.data.length - 1) {
        char += "\n";
      }
    }
    console.log(char);
  })
  .catch((error) => {
    console.log(error.message);
  });
