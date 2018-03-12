<<<<<<< HEAD
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const passportLocalMongoose = require("passport-local-mongoose")
// const User = new Schema({
//     username: { type: String, required: true },
//     password: { type: String, required: true }
//     // firstName: String,
//     // lastName: String
// });
// User.plugin(passportLocalMongoose);
// module.exports = mongoose.model("User", User);

// const User = mongoose.model("User", userSchema);

// module.exports = User;
=======
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  //chore: [{ type: Schema.Types.ObjectID, ref: "Chore" }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
>>>>>>> 4513b82c1015814854aad05d38d27249bb327ce1
