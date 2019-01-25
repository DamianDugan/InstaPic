const express = require("express");
const router = express.Router();

const registerController = require("../controllers/registerController");

router.get("/test", registerController.test);

router.post("/register", registerController.createNewUser);
router.get("/", registerController.getAllUsers);

module.exports = router;
