import mongoose from "mongoose";

const otpModel = new mongoose.Schema(
  {
    otp: {
      type: Number,
      requred: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    expire: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("OTP", otpModel);
