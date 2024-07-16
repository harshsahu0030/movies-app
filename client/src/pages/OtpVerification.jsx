import HomeNavbar from "../components/HomeNavbar";
import BgImage from "../assets/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_large.jpg";
import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  forgotPasswordVerifiedAction,
  loginUserCodeVerifiedAction,
  registerResendOTPAction,
  resendOTPAction,
  verifiedRegisterUserAction,
} from "../app/actions/userAction";
import { CLEAR_ERRORS, CLEAR_MESSAGES } from "../app/constants/userConstant";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { Helmet } from "react-helmet";

const OptVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  //redux
  const dispatch = useDispatch();
  const { message, error, loading } = useSelector((state) => state.user);
  const {
    message: otpMessage,
    error: otpError,
    loading: otpLoading,
  } = useSelector((state) => state.resendOTP);

  //states
  const [otpNumber, setOtpNumber] = useState("");

  //functions
  const handleSubmit = async () => {
    if (location.state.role) {
      if (location.state.role === "register") {
        await dispatch(
          verifiedRegisterUserAction(id, otpNumber, location.state)
        );
      }
      if (location.state.role === "login") {
        await dispatch(loginUserCodeVerifiedAction(id, otpNumber));
      }

      if (location.state.role === "resetPassword") {
        await dispatch(forgotPasswordVerifiedAction(id, otpNumber));
      }
    }
  };

  const handleResendOTP = async () => {
    if (location.state.role) {
      if (location.state.role === "register") {
        await dispatch(registerResendOTPAction(id, location.state.email));
      }
      if (location.state.role === "login") {
        await dispatch(resendOTPAction(id));
      }
      if (location.state.role === "resetPassword") {
        await dispatch(resendOTPAction(id));
      }
    }
  };

  //useEffect
  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: CLEAR_MESSAGES });

      if (location.state.role === "resetPassword") {
        navigate(`/password/reset/${id}`, {
          state: {
            role: "resetPasswordVerified",
          },
        });
      } else {
        navigate("/home");
      }
    }
    if (error) {
      toast.error(error);
      dispatch({ type: CLEAR_ERRORS });
    }
    if (otpMessage) {
      toast.success(otpMessage);
      dispatch({ type: CLEAR_MESSAGES });
    }
    if (otpError) {
      toast.error(otpError);
      dispatch({ type: CLEAR_ERRORS });
    }
  }, [
    dispatch,
    message,
    error,
    navigate,
    otpMessage,
    otpError,
    id,
    location.state.role,
  ]);

  return (
    <>
      {loading || otpLoading ? <Loader /> : ""}
      <div className="login_code_section">
        <Helmet>
          <title>Nextflix | Otp Verification</title>
        </Helmet>
        <img src={BgImage} alt="backgorund-image" />
        <div className="wrapper">
          <HomeNavbar />
          <form className="container">
            <h2>OTP Verification</h2>
            <OtpInput
              inputStyle={{
                width: "100%",
                padding: "1vmax",
                margin: "0 1vmax",
                fontSize: "1rem",
                backgroundColor: "rgba(0,0,0,0.8)",
                color: "white",
                border: "1px solid gray",
              }}
              value={otpNumber}
              onChange={setOtpNumber}
              numInputs={4}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
            />
            <button
              type="submit"
              className="signin-btn"
              onClick={handleSubmit}
              disabled={loading}
            >
              Submit
            </button>

            <button onClick={handleResendOTP} disabled={otpLoading}>
              Recent OTP?
            </button>

            <p>
              This page is protected by Google reCAPTCHA to ensure you are not a
              bot. <Link> Learn more</Link>.
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default OptVerification;
