const User = require("../src/models/userSchema");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");

//Just for test the communication between all files
exports.test = function(req, res) {
  res.send("resgisterController is ok :)");
};

exports.createNewUser = function(req, res) {
  let user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    confirm_password: req.body.confirm_password
  });
  if (password === confirm_password) {
    bcrypt.hash(password, 10, function(err, hash) {
      if (err) {
        res.send("Password ans confirm password must be different...");
      }
      user.save(function(err) {
        if (err) {
          return res.send(err);
        }
        res.send("Picture Created successfully");
      });
    });
  }
};
