const mongoose = require("mongoose");
const config = require("./../config");
const express = require("express");
const port = config.port;

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

var app = express();

// LISTEN ON PORT SERVER
app.listen(port, () => {
  console.log(`Listening on port ${port} ...`);
});
