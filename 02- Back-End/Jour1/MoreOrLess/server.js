const express = require("express");

const app = express();
let random = Math.floor(Math.random() * 100);

app.get("/guess", (req, res) => {
  let number = Number(req.query.num);
  if (number === undefined && typeof number !== "number") {
    res.json({ message: "no number was sent" });
  } else if (number > 100 && number < 0) {
    res.json({ message: "the number must be between 0 and 100." });
  } else if (number > random) {
    res.json({ result: "C'est moins!" });
  } else if (number < random) {
    res.json({ result: "C'est plus!" });
  } else if (number === random) {
    res.json({ result: "C'est gagné!" });
  }
});

app.listen(3000, () => {
  console.log("LIVE!!!!!");
});
