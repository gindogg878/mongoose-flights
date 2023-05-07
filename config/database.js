const mongoose = require("mongoose");
require("dotenv").config();
//global config
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

//connect to mongodb
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//connection error/success
//define callback functions for various events//
db.on("error", (err) => console.log(err.message + " is mongodb not running?"));
db.on("open", () => {
  console.log("mongo connected: ");
});
db.on("close", () => console.log("mongo disconnected"));

module.exports = db;
