const express = require('express');
const router = express.Router();

const pictureController = require('../controllers/pictureController');

router.get('/test', pictureController.test);

router.post('/create', pictureController.pictureCreate);

// //our file upload function.
// router.post('/create', function(req, res, next) {
//   var path = '';
//   upload(req, res, function(err) {
//     if (err) {
//       // An error occurred when uploading
//       console.log(err);
//       return res.status(422).send('an Error occured');
//     }
//     // No error occured.
//     path = req.file.path;
//     return res.send('Upload Completed for ' + path);
//   });
// });

router.get('/', pictureController.getAllPictures);

router.get('/:id', pictureController.getOnePicture);

router.delete('/delete/:id', pictureController.deleteOnePicture);

module.exports = router;
