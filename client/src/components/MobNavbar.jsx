import { IoMenu } from "react-icons/io5";
import Logo from "../assets/Netflix_Logo_PMS.png";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const MobNavbar = () => {
  const navigate = useNavigate();


  


  
  return (
    <div className="mob_navbar_section">
      <IoMenu />
      <img src={Logo} alt="logo" onClick={() => navigate("/home")} />
      <Sidebar />
    </div>
  );
};

export default MobNavbar;
