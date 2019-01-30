const mongoose = require('mongoose');
const config = require('./../config');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = config.port;
var app = express();

// var multer = require('multer');
// // set the directory for the uploads to the uploaded to
// var DIR = './uploads/';
// //define the type of upload multer would be doing and pass in its destination, in our case, its a single file with the name photo
// var upload = multer({dest: DIR}).single('photo');

const picture = require('../routes/pictureRoute');
const register = require('../routes/registerRoute');
const login = require('../routes/loginRoute');
const user = require('../routes/userRoute');

//CONNEXION TO DATABASE
mongoose
  .connect(
    config.db,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('Connected to mongoDB');
  })
  .catch(e => {
    console.log('Error while DB connecting');
    console.log(e);
  });

// LISTEN ON PORT SERVER
app.listen(port, () => {
  console.log(`Listening on port ${port} ...`);
});

app.use(cors());

app.use(function(req, res, next) {
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/picture', picture);
app.use('/user', user);
app.use('/login', login);
app.use('/signup', register);
