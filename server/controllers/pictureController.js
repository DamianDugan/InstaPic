const Picture = require('../src/models/pictureSchema');

//Just for test the communication between all files
exports.test = function(req, res) {
  res.send('pictureController is ok :)');
};

//Post a new picture
exports.pictureCreate = function(req, res) {
  let picture = new Picture({
    user_id: req.body.user_id,
    image: req.body.image,
    description: req.body.description,
    album_id: req.body.album_id,
    camera: req.body.camera,
    localisation: req.body.localisation
  });
  picture.save(function(err) {
    if (err) {
      return res.send(err);
    }
    res.send('Picture Created successfully');
  });
};

//Get all picture all of album of all users
exports.getAllPictures = function(req, res) {
  Picture.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.send('ErrorMessage : ' + err);
    });
};

//Get one picture by id
exports.getOnePicture = function(req, res) {
  Picture.findById(req.params.id, function(err, picture) {
    if (err) {
      res.send('Picture does not exist...');
    }
    res.send(picture);
  });
};

//Delete on picture by id
exports.deleteOnePicture = function(req, res) {
  Picture.findOneAndDelete(req.params.id, function(err) {
    if (err) {
      res.send('Picture not found...');
    }
    res.send('Picture deleted ! :)');
  });
};
