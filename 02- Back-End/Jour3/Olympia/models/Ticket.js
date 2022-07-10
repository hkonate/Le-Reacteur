const mongoose = require("mongoose");

const Ticket = mongoose.model("Ticket", {
  mail: String,
  username: String,
  category: String,
  seats: Number,
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
  },
});

module.exports = Ticket;
