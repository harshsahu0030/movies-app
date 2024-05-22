import React from "react";
import Logo from "../assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { sidebarData } from "../data/sidebar";
import { IoClose } from "react-icons/io5";
import propTypes from "prop-types";

const Sidebar = ({ toggleRef, handleToggle }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="sidebar_section" ref={toggleRef}>
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
      <div className="right" onClick={handleToggle}>
        <IoClose />
      </div>
    </div>
  );
};
Sidebar.propTypes = {
  toggleRef: propTypes.object,
  handleToggle: propTypes.func,
};

export default Sidebar;
