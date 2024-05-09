import jwt from "jsonwebtoken";
import UserModel from "../models/userModel.js";
import { catchAsyncErrors } from "../utils/catchAsyncErrors.js";
import ErrorHandler from "../utils/errorHandler.js";

export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Please Login", 401));
  }

  const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await UserModel.findById(decodedData._id);
  next();
});
