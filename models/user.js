

const mongoose = require("mongoose");
const Schema1 = mongoose.Schema1;

const passportLocalMongoose = require("passport-local-mongoose")
const User = new Schema1({
    username: String,
    passwrod: String,
    firstName: String,
    lastName: String
});
User.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", User);

const User = mongoose.model("User", userSchema);

module.exports = User;