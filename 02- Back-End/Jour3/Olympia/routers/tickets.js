const express = require("express");
const router = express.Router();

const Event = require("../models/Event");
const Ticket = require("../models/Ticket");

router.post("/tickets/book", async (req, res) => {
  const event = await Event.findOne({ id: req.body.eventId });
  try {
    if (
      req.body.mail &&
      req.body.username &&
      req.body.category &&
      req.body.seats &&
      req.body.eventId
    ) {
      if (event.seats[req.body.category] < req.body.seats) {
        res.status(400).json({
          error: {
            message: "Not enough available seats for this category",
          },
        });
      } else {
        const newTicket = new Ticket({
          mail: req.body.mail,
          username: req.body.username,
          category: req.body.category,
          seats: req.body.seats,
          event: event,
        });
        event.seats[newTicket.category] -= newTicket.seats;
        await newTicket.save();
        await event.save();

        res.json({ message: `${newTicket.seats} seats successfully booked` });
      }
    } else {
      res.status(400).json({
        error: {
          message: "Invalid request",
        },
      });
    }
  } catch (error) {
    console.log({ error: error.message });
  }
});

router.post("/tickets", async (req, res) => {
  res.json(
    await Ticket.find(req.body).populate({ path: "event", select: "" }).exec()
  );
});
module.exports = router;
