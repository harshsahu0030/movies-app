import Footer from "../components/Footer";
import HomeNavbar from "../components/HomeNavbar";
import BgImage from "../assets/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_large.jpg";
import { useState } from "react";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";

const OptVerification = () => {
  //states
  const [otp, setOtp] = useState("");

  return (
    <div className="login_code_section">
      <img src={BgImage} alt="backgorund-image" />
      <div className="wrapper">
        <HomeNavbar />
        <div className="container">
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
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
          />
          <button className="signin-btn">Submit</button>

          <span>
            <Link>Recent OTP?</Link>
          </span>

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

export default OptVerification;
