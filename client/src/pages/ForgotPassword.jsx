import HomeNavbar from "../components/HomeNavbar";
import BgImage from "../assets/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_large.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { CLEAR_ERRORS, CLEAR_MESSAGES } from "../app/constants/userConstant";
import { forgotPasswordAction } from "../app/actions/userAction";
import Loader from "../components/Loader";

const ForgotPassword = () => {
  const navigate = useNavigate();

  //redux
  const dispatch = useDispatch();
  const { loading, message, error, otp } = useSelector((state) => state.user);

  //states
  const [email, setEmail] = useState("");

  //function
  const handleSubmit = () => {
    dispatch(forgotPasswordAction(email));
  };

  //useEffect
  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: CLEAR_MESSAGES });
      navigate(`/password/forgot/code/${otp}`, {
        state: {
          role: "resetPassword",
        },
      });
    }
    if (error) {
      toast.error(error);
      dispatch({ type: CLEAR_ERRORS });
    }
  }, [email, dispatch, message, error, otp, navigate]);

  return (
    <>
      {loading ? <Loader /> : ""}
      <div className="forgot_password_section">
        <img src={BgImage} alt="backgorund-image" />
        <div className="wrapper">
          <HomeNavbar />
          <div className="container">
            <h2>Forgot Password</h2>
            <input
              name="email"
              className="input"
              type="text"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="signin-btn"
              onClick={handleSubmit}
              disabled={loading}
            >
              Submit
            </button>

            <p>
              Password Remembered? <Link to="/login">Sign in now</Link>.
            </p>

            <p>
              This page is protected by Google reCAPTCHA to ensure you are not a
              bot. <Link> Learn more</Link>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
