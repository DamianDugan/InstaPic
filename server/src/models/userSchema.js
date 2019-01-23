const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    followers: {
      type: Array
    },
    following: {
      type: Array
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
