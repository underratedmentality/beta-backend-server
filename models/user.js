const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { isEmail } = require("validator");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      validate: [isEmail, "provide valid email"],
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: [7, "minimum password length is 7"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
