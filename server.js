require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const db = require("./config/database");
const Flight = require("./models/flight");
const MO = require("method-override");
const Destination = require("./models/destination");

// View Engine Middleware Configure
const reactViewsEngine = require("jsx-view-engine").createEngine();
app.engine("jsx", reactViewsEngine);
// This line tells the render method the default file extension to look for.
app.set("view engine", "jsx");
// This line sets the render method's default location to look for a jsx file to render. Without this line of code we would have to specific the views directory everytime we use the render method
app.set("views", "./views");

// Custom Middleware
app.use(express.urlencoded({ extended: false }));

app.use(MO("_method"));

//accessing static files from public folder like css, imgs, fonts
app.use(express.static("public"));

// I.N.D.U.C.E.S
//index route//
app.get("/flights", async (req, res) => {
  try {
    const foundFlight = await Flight.find({});
    res.render("Index", { flight: foundFlight });
  } catch (err) {
    res.status(400).send(err);
  }
});

//New route//
app.get("/flights/new", (req, res) => {
  res.render("New");
});

//Create(post)route: recv info from new route and create new flight and display on index route with other flights on a list//
app.post("/flights", async (req, res) => {
  try {
    const newflight = await Flight.create(req.body);
    res.redirect("/flights");
  } catch (err) {
    res.status(400).send(err);
  }
});

//Update route
app.put("/flights/:id", async (req, res) => {
  try {
    const updatetFlight = await Flight.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.redirect(`flight/${req.params.id}`, {
      flight: editFlight,
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

//Show route
app.get("/flights/:id", async (req, res) => {
  try {
    const newFlight = await Flight.findById(req.params.id).populate(
      "destinations"
    );
    res.render("Show", { Flight: newFlight });
  } catch (err) {
    res.status(400).send(err);
  }
});

//induces destinations
//Create
app.post("/destinations/:id", async (req, res) => {
  try {
    const newDestination = await Destination.create(req.body);

    const updatedFlight = await Flight.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { destinations: newDestination._id } },
      { new: true }
    );
    res.redirect(`/flights/${req.params.id}`);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
