let mongoose = require("mongoose");

const server = "ds163694.mlab.com:63694";
const database = "instapic";
const user = "root";
const password = "root";

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`);

let UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model("User", UserSchema);
