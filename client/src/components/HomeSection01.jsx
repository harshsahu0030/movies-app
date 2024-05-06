import HomeNavbar from "./HomeNavbar";
import SubscriptionInput from "./SubscriptionInput";
import BgImage from "../assets/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_large.jpg";

const HomeSection01 = () => {
  return (
    <div className="home_section01">
      <img src={BgImage} alt="backgorund-image" />
      <div className="wrapper">
        <HomeNavbar />
        <div className="container">
          <h1>Unlimited movies, TV shows and more</h1>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <p>
            Ready to watch? Enter your email or mobile number to create or
            restart your membership.
          </p>
          <SubscriptionInput />
        </div>
      </div>
    </div>
  );
};

export default HomeSection01;
