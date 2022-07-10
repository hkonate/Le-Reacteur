const express = require("express");
const router = express.Router();

const Event = require("../models/Event");

router.post("/events/create", async (req, res) => {
  try {
    const newEvent = new Event({
      date: req.body.date,
      name: req.body.name,
      seats: {
        orchestre: req.body.seats.orchestre,
        mezzanine: req.body.seats.mezzanine,
      },
    });
    await newEvent.save();
    res.json({ message: "Event successfully created" });
  } catch (error) {
    console.log({ error: error.message });
  }
});

router.get("/events/availabilities", async (req, res) => {
  res.json(await Event.find(req.query).exec());
});

router.get("/events", async (req, res) => {
  res.json(await Event.findById(req.query.id));
});

module.exports = router;
