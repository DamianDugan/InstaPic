const mongoose = require("mongoose");
const config = require("./../config");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = config.port;
var app = express();

const picture = require("../routes/pictureRoute");
const register = require("../routes/registerRoute");

//CONNEXION TO DATABASE
mongoose
  .connect(
    config.db,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch(e => {
    console.log("Error while DB connecting");
    console.log(e);
  });

// LISTEN ON PORT SERVER
app.listen(port, () => {
  console.log(`Listening on port ${port} ...`);
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/picture", picture);
app.use("/user", register);

const tata = "tata";
