const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PictureSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    album_id: {
      type: String,
      default: "N/A"
    },
    likes: [
      {
        type: Array
      }
    ],
    comments: {
      type: Array
    },
    camera: {
      type: String
    },
    localisation: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Picture", PictureSchema);
