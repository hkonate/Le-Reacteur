const express = require("express");
const color = require("./colors_ou27qd.json");

const app = express();

app.get("/send-a-color", (req, res) => {
  if (color[req.query.color]) {
    const hexaColor = {};
    hexaColor["color"] = req.query.color;
    hexaColor["Hexa"] = color[req.query.color];
    res.json(hexaColor);
  } else {
    res.status(400).json({ message: "color not found" });
  }
});
app.listen(3000, () => {
  console.log("LIVE !!!!!!");
});
