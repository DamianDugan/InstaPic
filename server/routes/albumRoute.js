const express = require('express');
const router = express.Router();

const albumController = require('../controllers/albumController');

router.post('/', albumController.createAlbum);
router.get('/:id', albumController.getAllAlbums);
// router.put('/:id', albumController.updateUser);
// router.delete('/:id', albumController.deleteUser);

module.exports = router;
