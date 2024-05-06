import Footer from "../components/Footer";
import HomeNavbar from "../components/HomeNavbar";
import BgImage from "../assets/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_large.jpg";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();

  //states

  return (
    <div className="forgot_password_section">
      <img src={BgImage} alt="backgorund-image" />
      <div className="wrapper">
        <HomeNavbar />
        <div className="container">
          <h2>Reset Password</h2>
          <input className="input" type="text" placeholder="New Password" />
          <input className="input" type="text" placeholder="Confirm Password" />
          <button className="signin-btn" onClick={() => navigate("/")}>
            Submit
          </button>

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

export default ResetPassword;
