import Footer from "../components/Footer";
import HomeNavbar from "../components/HomeNavbar";
import BgImage from "../assets/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_large.jpg";
import { Link, useNavigate } from "react-router-dom";

const LoginCode = () => {
  const navigate = useNavigate();

  //states

  return (
    <div className="login_code_section">
      <img src={BgImage} alt="backgorund-image" />
      <div className="wrapper">
        <HomeNavbar />
        <div className="container">
          <h2>Sign In By Code</h2>
          <input className="input" type="text" placeholder="Email Address" />
          <button
            className="signin-btn"
            onClick={() => navigate("/login/code/23232")}
          >
            Sign In{" "}
          </button>
          <span>OR</span>
          <button onClick={() => navigate("/login")}>
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginCode;
