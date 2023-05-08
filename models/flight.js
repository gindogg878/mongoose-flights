//destructuring schema and model from monngoose and setting them to own vars
const { Schema, model } = require("mongoose");

const flightSchema = new Schema({
  airline: { type: String, enum: ["American", "Southwest", "United"] },
  flightNo: { type: Number, required: true, min: 10, max: 9999 },
  departs: { type: Date, default: Date.now() },
  airport: {
    type: String,
    enum: ["AUS", "DAL", "LAX", "SAN", "SEA"],
    default: "SAN",
  },
  destinations: [{ type: Schema.Types.ObjectId, ref: "Destination" }],
});

const Flight = model("Flight", flightSchema);

module.exports = Flight;

// default: Date.now() + 365 * 24 * 60 * 60 * 1000 },
