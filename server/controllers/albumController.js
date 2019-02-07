const Album = require('../src/models/AlbumSchema');

//Get ALL
exports.getAllAlbums = function(req, res) {
  Album.find({ user_id: req.params.id }, function(err, albums) {
    if (err) {
      res.send('no albums in the db');
    } else {
      console.log(req.params);
      res.send(albums);
    }
  });
};

// create a new album
exports.createAlbum = function(req, res) {
  let newAlbum = new Album({
    user_id: req.body.user_id,
    // pictures_id: req.body.pictures_id,
    name: req.body.name
  });
  console.log(req.body.user_id + ' heyyo');
  console.log(req.body.name);
  newAlbum.save(function(err, resp) {
    if (err) {
      console.log(err);
      res.send({ message: 'Album not created' });
    } else {
      res.status(200).json(newAlbum);
      console.log('Album created');
    }
  });
};
