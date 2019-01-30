const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AlbumSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true
    },
    pictures_id: {
      type: Array
    },
    name: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Album", AlbumSchema);
