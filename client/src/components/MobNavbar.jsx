import { IoMenu } from "react-icons/io5";
import Logo from "../assets/Netflix_Logo_PMS.png";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useEffect, useRef, useState } from "react";

const MobNavbar = () => {
  const navigate = useNavigate();

  //state
  const [toggle, setToggle] = useState(false);

  //ref
  const toggleRef = useRef();

  //function
  const handleToggle = async () => {
    await setToggle(() => !toggle);
  };

  useEffect(() => {
    if (toggle) {
      toggleRef.current.style.width = "80%";
      toggleRef.current.style.visibility = "visible";
      toggleRef.current.style.opacity = 1;
    } else {
      toggleRef.current.style.width = "0";
      toggleRef.current.style.visibility = "hidden";
      toggleRef.current.style.opacity = 0;
    }
  }, [toggle]);

  return (
    <div className="mob_navbar_section" onClick={() => handleToggle("open")}>
      <IoMenu />
      <img src={Logo} alt="logo" onClick={() => navigate("/home")} />
      <Sidebar toggleRef={toggleRef} handleToggle={handleToggle} />
    </div>
  );
};

export default MobNavbar;
