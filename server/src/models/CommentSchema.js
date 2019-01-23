const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true
    },
    body: {
      type: String
    },
    picture_id: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", CommentSchema);
