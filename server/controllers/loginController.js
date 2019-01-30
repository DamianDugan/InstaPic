const express = require("express");
const users = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../src/models/userSchema");
users.use(cors());

process.env.SECRET_KEY = "secret";

//test
exports.test = function(req, res) {
  res.send("octogone sans règles");
};

//login
exports.userLogin = function(req, res) {
  User.findOne({
    email: req.body.email
  }).then(user => {
    if (user) {
        //si le password match
      if (bcrypt.compareSync(req.body.password, user.password)) {
        let usr_info = {
          _id: user._id,
          username: user.username,
          email: user.email
        };
        let token = jwt.sign(usr_info, process.env.SECRET_KEY, {
          expiresIn: "1h"
        });
        res.send({ token: token });
        console.log("octogone sans règles");
       // res.json({ token: token });
        console.log(token);
      } else {
        res.status(500).json({ error: "User does not exist" });
      }
    } else {
        res.status(500).json({ error: "User does not exist" });
      }
    })
    .catch(err => {
        res.status(500).send("error: " + err);
  });
};

//Get ALL
exports.getAllUsers = function(req, res) {
  User.find({}, function(err, users) {
    if (err){
      res.send('no users in the db');
    } else {
    res.send(users);
    }
  });
};