const axios = require("axios");

const currencyConverter = (amount, devise, to_converter, callback) => {
  axios
    .get(
      "https://api.apilayer.com/fixer/latest?apikey=BpY6SBp9Iunpl810mw06E4fJdPU1oDZy"
    )
    .then((response) => {
      let str = "";
      let result;
      let change;
      if (devise === "eur") {
        change = response.data.rates[to_converter.toUpperCase()].toFixed(3);
        result = (
          response.data.rates[to_converter.toUpperCase()] * amount
        ).toFixed(3);
      } else {
        change = (
          response.data.rates[to_converter.toUpperCase()] /
          response.data.rates[devise.toUpperCase()]
        ).toFixed(3);
        result = (
          (response.data.rates[to_converter.toUpperCase()] /
            response.data.rates[devise.toUpperCase()]) *
          amount
        ).toFixed(3);
      }
      str = `${amount} ${devise.toUpperCase()} > ${result} ${to_converter.toUpperCase()} (taux de change appliqué : ${change})`;
      callback(str);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
currencyConverter(15, "eur", "usd", (message) => {
  console.log(message); // Devra afficher : `15 EUR > 18.34 USD (taux de change appliqué : 1.223)`.
});
