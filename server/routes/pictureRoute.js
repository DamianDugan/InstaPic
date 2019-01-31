const express = require('express');
const router = express.Router();

const pictureController = require('../controllers/pictureController');

router.get('/test', pictureController.test);

router.post('/create', pictureController.pictureCreate);

var multer = require('multer');
// set the directory for the uploads to the uploaded to
var DIR = './uploads/';
//define the type of upload multer would be doing and pass in its destination, in our case, its a single file with the name photo   //dest: DIR

let storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },

  filename: function(req, file, cb) {
    console.log(file);
    cb(null, file.fieldname + '-' + Date.now() + '.jpg');
  }
});
var upload = multer({ storage: storage }).single('photo');

//our file upload function.
router.post('/upload', function(req, res, next) {
  var path = '';
  upload(req, res, function(err) {
    if (err) {
      // An error occurred when uploading
      console.log(err);
      return res.status(422).send('an Error occured');
    }
    // No error occured.
    path = req.file.path;
    return pictureController.pictureCreate(req, res);
    // return res.send('Upload Completed for ' + path);
  });
});

router.get('/', pictureController.getAllPictures);

router.get('/:id', pictureController.getOnePicture);

router.delete('/delete/:id', pictureController.deleteOnePicture);

module.exports = router;
