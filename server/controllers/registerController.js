const User = require("../src/models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var config = require("../config");

//Just for test the communication between all files
exports.test = function(req, res) {
  res.send("resgisterController is ok :)");
};

exports.createNewUser = function(req, res) {
  if (req.body.password === req.body.confirm_password) {
    bcrypt.hash(req.body.password, 10, function(err, hash) {
      if (err) {
        res.send(err => "something wrong...");
      } else {
        let user = new User({
          username: req.body.username,
          email: req.body.email,
          password: hash
        });
        user.save(function(err) {
          if (err) {
            return res.send({ message: "username or email already exist" });
          } else {
            var token = jwt.sign({ id: user._id }, config.secret, {
              expiresIn: 86400 // expires in 24 hours
            });
            res.status(200).json(token);
          }
        });
      }
    });
  } else res.send("Password ans confirm password must be different...");
};

exports.getAllUsers = function(req, res) {
  User.find({}, function(err, users) {
    var userMap = {};
    users.forEach(function(user) {
      userMap[user._id] = user;
    });
    res.json(userMap);
  });
};
