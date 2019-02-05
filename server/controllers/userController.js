const User = require('../src/models/userSchema');
const bcrypt = require('bcrypt');

//FUNCTION GET ALL USERS
exports.getAllUsers = function(req, res) {
  User.find()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.statut(500).send('Error : ' + err);
    });
};

//FUNCTION GET JUST ONE USER WITH ID
exports.getUser = function(req, res) {
  User.findById(req.params.id)
    .then(result => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).send('User not found');
      }
    })
    .catch(err => {
      res.status(500).send('Error : ' + err);
    });
};

//FUNCTION FOR UPDATE ONE USER
exports.updateUser = function(req, res) {
  bcrypt.hash(req.body.password, 10, function(err, hash) {
    body = {
      username: req.body.username,
      email: req.body.email,
      password: hash,
      picture: req.body.picture,
      description: req.body.description,
      isAdmin: req.body.isAdmin,
      followers: req.body.followers,
      following: req.body.following,
      isBanned: req.body.isBanned
    };
    options = {
      upsert: true,
      new: true
    };
    User.findByIdAndUpdate({ _id: req.params.id }, body, options)
      .exec()
      .then(result => {
        if (result) {
          res.status(200).json(result);
        } else {
          res.status(404).send('User not found');
        }
      })
      .catch(err => {
        res.status(500).send('Error : ' + err);
      });
  });
};

//FUNCTION DELETE ONE USER BY ID
exports.deleteUser = function(req, res) {
  User.findByIdAndDelete(req.params.id)
    .then(result => {
      if (result) {
        res.status(200).json({
          text: 'User deleted with success'
        });
      } else {
        res.status(404).send('User not found');
      }
    })
    .catch(err => {
      res.status(500).send('Error : ' + err);
    });
};
