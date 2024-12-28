const mongoose = require("mongoose");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "FirstName atleast 3 Character Long .. "],
    },
    lastname: {
      type: String,
      required: true,
      minlength: [3, "LastName atleast 3 Character Long .. "],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, "Email must be at least 5 characters long"],
  },
  password: {
    type: String,
    required: true,
    select: false, // when we find user and send back to client in respone then password not send by  with the help of this property
  },
  socketId: {
    type: String,
  },
});
UserSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ id: this._id }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
  return token;
};

UserSchema.methods.ComparePassword = async function (password) {
  return await bcrypt.compare(password , this.password);
};

UserSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const UserModel = mongoose.model("UberCloneuserModel", UserSchema);
module.exports = UserModel;
