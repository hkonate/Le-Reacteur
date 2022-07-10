const express = require("express");

const app = express();
app.use(express.json());

app.post("/calculate", (req, res) => {
  if (typeof req.body.num1 !== "number" || typeof req.body.num2 !== "number") {
    res.status(400).json({
      message: "num1 et/ou num2 ne sont pas des nombres",
    });
  } else if (Object.keys(req.body).length !== 3) {
    res.status(400).json({
      message: "l'un des 3 paramètres body est manquant",
    });
  }
  switch (req.body.operator) {
    case "+":
      res.json({ result: `${req.body.num1 + req.body.num2}` });
      break;
    case "-":
      res.json({ result: `${req.body.num1 - req.body.num2}` });
      break;
    case "*":
      res.json({ result: `${req.body.num1 * req.body.num2}` });
      break;
    case "/":
      res.json({ result: `${req.body.num1 / req.body.num2}` });
      break;
    default:
      res.status(400).json({
        message:
          "l'opérateur mathématique n'existe pas (ce n'est ni + ni - ni / ni *)",
      });
  }
  let result = req.body.num1 + req.body.num2;
});

app.listen(3000, () => {
  console.log("LIVE!!!!");
});
