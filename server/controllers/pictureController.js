const Picture = require('../src/models/pictureSchema');

//Post a new picture
exports.pictureCreate = function(req, res) {
  let picture = new Picture({
    user_id: req.body.user_id,
    image: req.file.path,
    description: req.body.description,
    album_id: req.body.album_id,
    camera: req.body.camera,
    localisation: req.body.localisation
  });
  picture.save(function(err) {
    if (err) {
      console.log(err);
      return res.send(err);
    }
    console.log('success');
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

//Update picture
exports.update = function(req, res) {
  Picture.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .exec()
    .then(result => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).send("Picture not found");
      }
    })
    .catch(err => {
      res.status(500).send("Error : " + err);
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

//Function like picture

function isLiked(body, picture) {
  let check = false;
  if (picture.likes) {
    picture.likes.forEach(function(like) {
      if (body.likes == like) {
        check = true;
      }
    });
  }
  return check;
}

exports.alreadyLiked = function(req, res) {
  Picture.findById(req.params.id, function(err, picture) {
    if (err) {
      res.send("Picture does not exist...");
    }
    if (isLiked(req.params, picture)) {
      res.status(200).json("Already liked");
    } else {
      res.status(200).json("Not liked");
    }
  });
};

exports.like = function(req, res) {
  Picture.findById(req.params.id, function(err, picture) {
    if (err) {
      res.send("Picture does not exist...");
    }
    if (isLiked(req.body, picture)) {
      res.status(403).send("Already liked");
      return;
    }

    Picture.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $push: { likes: req.body.likes }
      }
    )
      .exec()
      .then(result => {
        if (result) {
          res.status(200).json(result);
        } else {
          res.status(404).send("Picture not found");
        }
      })
      .catch(err => {
        res.status(500).send("Error : " + err);
      });
  });
};

//Function unlike picture
exports.unlike = function(req, res) {
  Picture.findById(req.params.id, function(err, picture) {
    if (err) {
      res.send("Picture does not exist...");
    }
    if (!isLiked(req.body, picture)) {
      res.status(403).send("Not liked");
      return;
    }

    Picture.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $pull: { likes: req.body.likes }
      }
    )
      .exec()
      .then(result => {
        if (result) {
          res.status(200).json(result);
        } else {
          res.status(404).send("Picture not found");
        }
      })
      .catch(err => {
        res.status(500).send("Error : " + err);
      });
  });
  // Picture.findById(req.params.id, function(err, picture) {
  //   if (err) {
  //     res.send("Picture does not exist...");
  //   }
  //   picture.likes.forEach(function(like) {
  //     if (req.body.likes) {
  //       Picture.findByIdAndUpdate(
  //         { _id: req.params.id },
  //         {
  //           $pull: { likes: req.body.likes }
  //         }
  //       )
  //         .exec()
  //         .then(result => {
  //           if (result) {
  //             res.status(200).json(result);
  //           } else {
  //             res.status(404).send("Picture not found");
  //           }
  //         })
  //         .catch(err => {
  //           res.status(500).send("Error : " + err);
  //         });
  //     } else return;
  //   });
  // });
};
