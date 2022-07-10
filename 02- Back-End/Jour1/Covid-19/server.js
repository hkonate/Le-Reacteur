const express = require("express");
const covid = require("./covid_yw0c7p.json");
const app = express();
app.use(express.json());
let arr = [];
app.get("/", (req, res) => {
  let obj = {};
  for (let i = 0; i < covid.length; i++) {
    arr[i] = {
      name: covid[i].name,
      cases: covid[i].latest_data.confirmed,
      "obj.deaths": covid[i].latest_data.deaths,
      recovered: covid[i].latest_data.recovered,
    };
  }
  res.json(arr);
});

app.post("/by-country", (req, res) => {
  for (let i = 0; i < covid.length; i++) {
    if (covid[i].name === req.body.country) {
      arr = {
        name: covid[i].name,
        cases: covid[i].latest_data.confirmed,
        "obj.deaths": covid[i].latest_data.deaths,
        recovered: covid[i].latest_data.recovered,
      };
    }
  }
  res.json(arr);
});

app.listen(3000, () => {
  console.log("LIVEEEEEE");
});
