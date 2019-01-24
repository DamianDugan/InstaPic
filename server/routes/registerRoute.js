const express = require("express");
const router = express.Router();

const registerController = require("../controllers/registerController");

router.get("/test", registerController.test);

router.post("/create", registerController.createNewUser);

module.exports = router;
