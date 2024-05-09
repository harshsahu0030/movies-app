import express from "express";
import {
  checkUserController,
  forgotPasswordController,
  forgotPasswordVerifiedController,
  loadUserController,
  loginUserCodeController,
  loginUserController,
  loginUserVerifiedController,
  logoutUserController,
  registerResendOTPController,
  registerUserController,
  registerUserVerfiedController,
  resendOTPController,
  resetPasswordController,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.route("/user/exist").post(checkUserController);

router.route("/register").post(registerUserController);

router.route("/register/resend-otp/:id").post(registerResendOTPController);

router.route("/register/:id").post(registerUserVerfiedController);

router.route("/login").post(loginUserController);

router.route("/login/code").post(loginUserCodeController);

router.route("/password/forgot").post(forgotPasswordController);

router.route("/password/forgot/:id").post(forgotPasswordVerifiedController);

router.route("/password/reset/:id").put(resetPasswordController);

router.route("/resend-otp/:id").get(resendOTPController);

router.route("/login/code/:id").post(loginUserVerifiedController);

router.route("/load").get(isAuthenticated, loadUserController);

router.route("/logout").get(isAuthenticated, logoutUserController);

export default router;
