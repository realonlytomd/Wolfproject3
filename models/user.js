
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  //chore: [{ type: Schema.Types.ObjectID, ref: "Chore" }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;

