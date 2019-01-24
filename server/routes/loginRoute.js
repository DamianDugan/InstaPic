const express = require("express");
const router = express.Router();

const loginController = require("../controllers/loginController");

router.get("/test", loginController.test);

router.post("/", loginController.userLogin);

//router.get("/", loginController.getAllUsers);

module.exports = router;
