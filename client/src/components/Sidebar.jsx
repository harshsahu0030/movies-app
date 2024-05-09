import Logo from "../assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { sidebarData } from "../data/sidebar";
import React from "react";

const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="sidebar_section">
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
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
};

export default Sidebar;
