import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter your username"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
    },
    role: {
      type: String,
      default: "user",
    },

    otp: Number,
    otpExpires: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

//hash password (using bcrypt)
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

//compare password
userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

//generate JWT token
userSchema.methods.generateJWTToken = async function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
};

export default mongoose.model("User", userSchema);
