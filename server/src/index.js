const mongoose = require("mongoose");
const config = require("./../config");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = config.port;
var app = express();

const picture = require("../routes/pictureRoute");
const register = require("../routes/registerRoute");
const login = require("../routes/loginRoute");
const user = require("../routes/userRoute");

//CONNEXION TO DATABASE
mongoose
  .connect(config.db, { useNewUrlParser: true })
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
app.use(require('morgan')('dev'));

app.use(function(req, res, next) {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/uploads", express.static("uploads"));
app.use("/picture", picture);
app.use("/user", user);
app.use("/login", login);
app.use("/signup", register);
