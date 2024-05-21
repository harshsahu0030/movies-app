import Logo from "../assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { sidebarData } from "../data/sidebar";
import React, { useRef } from "react";
import { IoClose } from "react-icons/io5";

const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  //ref
  const toggleRef = useRef();

  return (
    <div className="sidebar_section">
      <div className="left">
        <img src={Logo} alt="logo" onClick={() => navigate("/home")} />

        <ul>
          {sidebarData
            ? sidebarData.navigations.map((item, i) => (
                <li
                  key={i}
                  className={
                    pathname.toString() === item.url.toString() ? "active" : ""
                  }
                  onClick={() => navigate(item.url)}
                >
                  {React.createElement(item.icon)}

                  <span>{item.name}</span>
                </li>
              ))
            : ""}
        </ul>
      </div>
      <div className="right">
        <IoClose />
      </div>
    </div>
  );
};

export default Sidebar;
