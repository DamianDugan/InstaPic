const express = require("express");
const router = express.Router();

const pictureController = require("../controllers/pictureController");

router.get("/test", pictureController.test);

router.post("/create", pictureController.pictureCreate);

router.get("/", pictureController.getAllPictures);

router.get("/:id", pictureController.getOnePicture);

router.delete("/delete/:id", pictureController.deleteOnePicture);

module.exports = router;
