const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/drugstore-app");

const Drug = mongoose.model("Drug", {
  name: {
    type: String,
    default: "",
  },
  quantity: {
    type: Number,
  },
});

app.post("/create", async (req, res) => {
  try {
    let once = true;
    if (req.body.name && req.body.quantity) {
      const arr = await Drug.find();
      arr.forEach((element) => {
        if (element.name === req.body.name) {
          res.status(400).json({ error: { message: "Drug already exists" } });
          once = false;
        }
      });
      if (once) {
        const newDrug = new Drug({
          name: req.body.name,
          quantity: req.body.quantity,
        });
        await newDrug.save();
        res.json({
          id: newDrug.id,
          name: newDrug.name,
          quantity: newDrug.quantity,
        });
      }
    } else {
      res.status(404).json({ error: "Missing argument" });
    }
  } catch (error) {
    console.log({ error: error.message });
  }
});

app.get("/", async (req, res) => {
  try {
    const drugs = await Drug.find();
    res.json(drugs);
  } catch (error) {
    console.log({ error: error.message });
  }
});

app.post("/drugs/add", async (req, res) => {
  try {
    if (req.body.id && req.body.quantity) {
      const arr = await Drug.find();
      arr.forEach(async (element) => {
        if (element.id === req.body.id) {
          element.quantity += Number(req.body.quantity);
          await element.save();
          res.status(200).json("Drug Added");
        }
      });
    } else {
      res.status(400).json({
        error: {
          message: "Bad request",
        },
      });
    }
  } catch (error) {
    console.log({ error: error.message });
  }
});

app.post("/drugs/remove", async (req, res) => {
  try {
    if (req.body.id && req.body.quantity) {
      const arr = await Drug.find();
      arr.forEach(async (element) => {
        if (element.id === req.body.id) {
          if (element.quantity < req.body.quantity) {
            res.status(400).json({
              error: {
                message: "Invalid quantity",
              },
            });
          } else {
            element.quantity -= Number(req.body.quantity);
            await element.save();
          }
        }
      });
      res.status(200).json("Drug Removed");
    } else {
      res.status(400).json({
        error: {
          message: "Bad request",
        },
      });
    }
  } catch (error) {
    console.log({ error: error.message });
  }
});

app.get("/drugs/quantity", async (req, res) => {
  try {
    if (req.query.id) {
      const arr = await Drug.find();
      arr.forEach((element) => {
        if (element.id === req.query.id) {
          res.status(200).json({ quantity: element.quantity });
        }
      });
      if (!exist) {
        res.status(400).json({ error: { message: "Id doesn't exist" } });
      }
    } else {
      res.status(400).json({ error: { message: "Id Missing" } });
    }
  } catch (error) {
    console.log({ error: error.message });
  }
});

app.delete("/delete", async (req, res) => {
  try {
    if (req.body.id) {
      await Drug.findByIdAndDelete(req.body.id);
      await Drug.save();
      res.status(200).json({ message: "Drug deleted" });
    } else {
      res.status(400).json({ error: { message: "Id missing" } });
    }
  } catch (error) {
    console.log({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Live!!!!!!!!");
});
