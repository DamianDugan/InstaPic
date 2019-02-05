const express = require('express');
const router = express.Router();

const albumController = require('../controllers/albumController');

router.get('/', albumController.getAllUsers);
outer.post('/', albumController.userLogin);
router.get('/:id', userController.getUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
