const express = require("express");
const app = express();
const parisArrdt = require("./points-de-collectes-des-sapins_1_gkhjtm.json");

app.get("/", (req, res) => {
  if (req.query.arrdt > 0 && req.query.arrdt < 21) {
    let arr = [];
    let arrdt = Number(req.query.arrdt);
    for (let i = 0; i < parisArrdt.length; i++) {
      if (parisArrdt[i].fields.arrdt === arrdt) {
        arr.push({
          garden: parisArrdt[i].fields.jardin,
          address: parisArrdt[i].fields.adresse,
          arrdt: arrdt,
        });
      }
    }
    res.json(arr);
  } else {
    res.status(400).json({
      message: `${req.query.arrdt} n'est pas un arrondissement de Paris.`,
    });
  }
});

app.listen(3000, () => {
  console.log("LIVE!!!!!!!!!!!!!!");
});
