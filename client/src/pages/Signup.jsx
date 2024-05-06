import Footer from "../components/Footer";
import HomeNavbar from "../components/HomeNavbar";
import BgImage from "../assets/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_large.jpg";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="signup_section">
      <img src={BgImage} alt="backgorund-image" />

      <div className="wrapper">
        <HomeNavbar />
        <div className="container">
          <h2>Welcome!</h2>
          <p>
            Welcome you to Netflix! where you find all kind of moviews, shows
            etc.
          </p>
          <input className="input" type="text" placeholder="Email Address" />
          <input className="input" type="password" placeholder="Password" />
          <button
            className="signin-btn"
            onClick={() => navigate("/register/code/1234")}
          >
            Sign Up{" "}
          </button>

          <p>
            Already have account? <Link to="/login">Sign in now</Link>.
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

export default Signup;
