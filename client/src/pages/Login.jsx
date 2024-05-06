import Footer from "../components/Footer";
import HomeNavbar from "../components/HomeNavbar";
import BgImage from "../assets/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_large.jpg";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login_section">
      <img src={BgImage} alt="backgorund-image" />
      <div className="wrapper">
        <HomeNavbar />
        <div className="container">
          <h2>Sign In</h2>
          <input className="input" type="text" placeholder="Email Address" />
          <input className="input" type="password" placeholder="Password" />
          <button className="signin-btn">Sign In </button>
          <span>OR</span>
          <button onClick={() => navigate("/login/code")}>
            Use a Sign-in code{" "}
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

export default Login;
