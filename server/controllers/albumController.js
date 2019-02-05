const express = require('express');
const users = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');

//Get ALL
exports.getAllAlbums = function(req, res) {
  User.find({}, function(err, albums) {
    if (err) {
      res.send('no albums in the db');
    } else {
      res.send(albums);
    }
  });
};

exports.createAlbum = function(req, res) {
  let album = new Album({
    user_id: req.body._id,
    pictures_id: req.body.pictures_id,
    name: req.body.name
  })
    .save(function(err) {
      if (err) {
        console.log(err);
        return res.send({ message: 'username or email already exist' });
      } else {
        var token = jwt.sign({ id: user._id }, config.secret, {
          expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).json(token);
      }
    })
    .catch(err => {
      res.status(500).send('error: ' + err);
    });
};
