import { isNullOrUndefined } from "util";
import OtpModel from "../models/otpModel.js";
import UserModel from "../models/userModel.js";
import { catchAsyncErrors } from "../utils/catchAsyncErrors.js";
import ErrorHandler from "../utils/errorHandler.js";
import { generateOTP } from "../utils/generateOtp.js";
import { sendMail } from "../utils/sendMail.js";
import crypto from "crypto";

//--------------------------------------------------
//check user
export const checkUserController = catchAsyncErrors(async (req, res, next) => {
  const { email } = req.body;

  let user = await UserModel.findOne({ email });

  if (user) {
    return res.status(200).json({
      success: true,
      message: "exist",
      email,
    });
  } else {
    return res.status(200).json({
      success: true,
      message: "doesn't exist",
      email,
    });
  }
});

//--------------------------------------------------
//register verify user controller
export const registerUserController = catchAsyncErrors(
  async (req, res, next) => {
    const { email } = req.body;

    let user = await UserModel.findOne({ email });

    if (user) {
      return next(new ErrorHandler("user already exist.. please login", 400));
    }

    const otpNumber = await generateOTP();

    const subject = "Email Verification for Netflix";

    const text = `Email Verfication of ${email} for Netflix - ${otpNumber}`;

    // email, subject, text
    await sendMail(req.body.email, subject, text);

    const otp = await OtpModel.create({
      ...req.body,
      otp: otpNumber,
      expire: new Date(Date.now() + 30 * 60 * 1000),
    });

    return res.status(200).json({
      success: true,
      message: `OTP successfully send to email - ${req.body.email}`,
      otp: otp._id,
    });
  }
);

//--------------------------------------------------
//register resend otp controller
export const registerResendOTPController = catchAsyncErrors(
  async (req, res, next) => {
    const { email } = req.body;
    const otp = await OtpModel.findById(req.params.id);

    if (!otp) {
      return next(new ErrorHandler("otp not exist.. please re-register", 400));
    }

    const otpNumber = otp.otp;

    const subject = "Email Verification for Lgin in Netflix";

    const text = `Email Verfication of  ${email} for  Netflix - ${otpNumber}`;

    // email, subject, text
    await sendMail(email, subject, text);

    return res.status(200).json({
      success: true,
      message: `OTP successfully send to email - ${email}`,
    });
  }
);

//--------------------------------------------------
//register user controller
export const registerUserVerfiedController = catchAsyncErrors(
  async (req, res, next) => {
    const optId = await OtpModel.findById(req.params.id);
    const { otp, email } = req.body;

    if (!otp) {
      return next(new ErrorHandler("Please enter OTP", 400));
    }

    if (parseInt(otp) !== parseInt(optId.otp)) {
      return next(new ErrorHandler("Invalid OTP", 400));
    }

    if (parseInt(optId.expire) < Date.now()) {
      return next(new ErrorHandler("Invalid OTP", 400));
    }

    let user = await UserModel.findOne({ email });

    if (user) {
      return next(new ErrorHandler("user already exist.. please login", 400));
    }

    req.body.otp = null;

    user = await UserModel.create(req.body);

    const subject = "Thank your for registering on Shoehub";

    const text = `Thank your ${req.body.username} for registering on Netflix`;

    // email, subject, text
    await sendMail(req.body.email, subject, text);

    const token = await user.generateJWTToken();

    await optId.deleteOne();

    // options for cookie
    const options = {
      Expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      HttpOnly: true,
    };

    return res
      .status(201)
      .cookie("token", token, options)
      .json({
        success: true,
        message: `Welcome! ${user.username}`,
        user,
        token,
      });
  }
);

//--------------------------------------------------
//login user controller
export const loginUserController = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please fill the inputs to login", 400));
  }

  let user = await UserModel.findOne({ email });

  if (!user) {
    return next(
      new ErrorHandler("user not exist.. please register first", 400)
    );
  }

  const comparePassword = await user.matchPassword(password);

  if (!comparePassword) {
    return next(new ErrorHandler("Invalid email and password", 400));
  }

  const token = await user.generateJWTToken();

  // options for cookie
  const options = {
    Expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    HttpOnly: true,
    Secure: true,
  };

  return res
    .status(200)
    .cookie("token", token, options)
    .json({
      success: true,
      message: `Welcome Back! ${user.username}`,
      user,
      token,
    });
});

//--------------------------------------------------
//login user Code controller
export const loginUserCodeController = catchAsyncErrors(
  async (req, res, next) => {
    const { email } = req.body;

    if (!email) {
      return next(new ErrorHandler("Please fill the inputs to login", 400));
    }

    let user = await UserModel.findOne({ email });

    if (!user) {
      return next(
        new ErrorHandler("user not exist.. please register first", 400)
      );
    }

    const otpNumber = await generateOTP();

    const subject = "Email Verification for Lgin in Netflix";

    const text = `Email Verfication of ${email} for Netflix - ${otpNumber}.`;

    // email, subject, text
    await sendMail(req.body.email, subject, text);

    user.otp = otpNumber;
    user.otpExpires = new Date(Date.now() + 30 * 60 * 1000);

    await user.save();

    return res.status(200).json({
      success: true,
      message: `OTP successfully send to email - ${req.body.email}`,
      otp: user._id,
    });
  }
);

//--------------------------------------------------
//login user verifiled controller
export const loginUserVerifiedController = catchAsyncErrors(
  async (req, res, next) => {
    const user = await UserModel.findById(req.params.id);
    const { otp } = req.body;

    if (!user) {
      return next(
        new ErrorHandler("user not exist.. please register first", 400)
      );
    }

    if (!otp) {
      return next(new ErrorHandler("Please enter OTP", 400));
    }

    if (parseInt(otp) !== parseInt(user.otp)) {
      return next(new ErrorHandler("Invalid OTP", 400));
    }

    if (parseInt(user.otpExpires) < Date.now()) {
      return next(new ErrorHandler("Invalid OTP", 400));
    }

    const token = await user.generateJWTToken();

    // options for cookie
    const options = {
      Expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      HttpOnly: true,
      Secure: true,
    };

    user.otp = null;
    user.otpExpires = Date.now();
    await user.save();

    return res
      .status(200)
      .cookie("token", token, options)
      .json({
        success: true,
        message: `Welcome Back! ${user.username}`,
        user,
      });
  }
);

//--------------------------------------------------
//load user
export const loadUserController = catchAsyncErrors(async (req, res, next) => {
  const user = await UserModel.findById(req.user._id);

  return res.status(200).json({
    success: true,
    user,
  });
});

//logout user controller
export const logoutUserController = catchAsyncErrors(async (req, res, next) => {
  const user = await UserModel.findById(req.user._id);

  // options for cookie
  const options = {
    Expires: new Date(Date.now()),
    HttpOnly: true,
  };

  res
    .status(200)
    .cookie("token", null, options)
    .json({
      success: true,
      message: `See your soon! ${user.username}`,
    });
});

//--------------------------------------------------
//forgot password controller
export const forgotPasswordController = catchAsyncErrors(
  async (req, res, next) => {
    const { email } = req.body;

    if (!email) {
      return next(new ErrorHandler("Please fill the inputs to login", 400));
    }

    let user = await UserModel.findOne({ email });

    if (!user) {
      return next(
        new ErrorHandler("user not exist.. please register first", 400)
      );
    }

    const otpNumber = await generateOTP();
    const resetToken = await user.generateResetToken();

    const subject = "Email Verification for Lgin in Netflix";

    const text = `Email Verfication of  ${email} for  Netflix - ${otpNumber}`;

    // email, subject, text
    await sendMail(req.body.email, subject, text);

    user.otp = otpNumber;
    user.otpExpires = new Date(Date.now() + 30 * 60 * 1000);

    await user.save();

    return res.status(200).json({
      success: true,
      message: `OTP successfully send to email - ${req.body.email}`,
      otp: resetToken,
    });
  }
);

//--------------------------------------------------
//forgot password verified controller
export const forgotPasswordVerifiedController = catchAsyncErrors(
  async (req, res, next) => {
    // creating token hash
    const resetToken = crypto
      .createHash("sha256")
      .update(req.params.id)
      .digest("hex");

    const user = await UserModel.findOne({
      resetToken,
      resetTokenExpire: { $gt: Date.now() },
    });

    const { otp } = req.body;

    if (!user) {
      return next(
        new ErrorHandler("user not exist.. please register first", 400)
      );
    }

    if (!otp) {
      return next(new ErrorHandler("Please enter OTP", 400));
    }

    if (parseInt(otp) !== parseInt(user.otp)) {
      return next(new ErrorHandler("Invalid OTP", 400));
    }

    if (parseInt(user.otpExpires) < Date.now()) {
      return next(new ErrorHandler("Invalid OTP", 400));
    }

    user.otp = null;
    user.otpExpires = Date.now();
    await user.save();

    return res.status(200).json({
      success: true,
      message: `User Verified`,
      otp: user.resetToken,
    });
  }
);

//--------------------------------------------------
//reset password controller
export const resetPasswordController = catchAsyncErrors(
  async (req, res, next) => {
    // creating token hash
    const resetToken = crypto
      .createHash("sha256")
      .update(req.params.id)
      .digest("hex");

    const user = await UserModel.findOne({
      resetToken,
      resetTokenExpire: { $gt: Date.now() },
    });

    const { newPassword, confirmPassword } = req.body;

    if (newPassword !== confirmPassword) {
      new ErrorHandler("Password not match", 400);
    }

    if (!user) {
      return next(
        new ErrorHandler("user not exist.. please register first", 400)
      );
    }

    user.password = confirmPassword;
    user.resetToken = null;
    user.resetTokenExpire = new Date(Date.now());

    await user.save();

    return res.status(200).json({
      success: true,
      message: `Password Updated`,
    });
  }
);

//--------------------------------------------------
//resend otp controller
export const resendOTPController = catchAsyncErrors(async (req, res, next) => {
  const user = await UserModel.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHandler("user not exist.. please register first", 400)
    );
  }

  const otpNumber = user.otp;

  const subject = "Email Verification for Lgin in Netflix";

  const text = `Email Verfication of  ${user.email} for  Netflix - ${otpNumber}`;

  // email, subject, text
  await sendMail(user.email, subject, text);

  return res.status(200).json({
    success: true,
    message: `OTP successfully send to email - ${user.email}`,
  });
});
