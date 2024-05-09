import Footer from "../components/Footer";
import HomeNavbar from "../components/HomeNavbar";
import BgImage from "../assets/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_large.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CLEAR_ERRORS, CLEAR_MESSAGES } from "../app/constants/userConstant";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { loginUserCodeAction } from "../app/actions/userAction";

const LoginCode = () => {
  const navigate = useNavigate();

  //redux
  const dispatch = useDispatch();
  const { loading, message, error, email, otp } = useSelector(
    (state) => state.user
  );

  //states
  const [loginEmail, setLoginEmail] = useState("");

  //functions

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUserCodeAction(loginEmail));
  };

  //useEffect
  useEffect(() => {
    if (email) {
      setLoginEmail(email);
    }
    if (message) {
      toast.success(message);
      dispatch({ type: CLEAR_MESSAGES });
      navigate(`/login/code/${otp}`, {
        state: {
          role: "login",
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
      <div className="login_code_section">
        <img src={BgImage} alt="backgorund-image" />
        <div className="wrapper">
          <HomeNavbar />
          <form className="container" onSubmit={handleSubmit}>
            <h2>Sign In By Code</h2>
            <input
              name="email"
              className="input"
              type="email"
              placeholder="Email Address"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <button type="submit" className="signin-btn" disabled={loading}>
              Sign In
            </button>
            <span>OR</span>
            <button type="button" onClick={() => navigate("/login")}>
              Use Password to Login
            </button>
            <span>
              <Link to={"/password/forgot"}>Forgot Password?</Link>
            </span>
            <p>
              New to Netflix? <Link to="/register">Sign up now</Link>.
            </p>
            <p>
              This page is protected by Google reCAPTCHA to ensure you are not a
              bot. <Link> Learn more</Link>.
            </p>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default LoginCode;
