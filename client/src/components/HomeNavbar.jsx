import { useNavigate } from "react-router-dom";
import Logo from "../assets/Netflix_Logo_PMS.png";
import Language from "./Language";

const HomeNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className="home_navbar_section">
      <img src={Logo} alt="logo" onClick={() => navigate("/")} />

      <div>
        <Language />
        <button onClick={() => navigate("/login")}>Sign in</button>
      </div>
    </div>
  );
};

export default HomeNavbar;
