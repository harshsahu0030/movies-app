import { FiArrowUpRight } from "react-icons/fi";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import MobNavbar from "../components/MobNavbar";

const Account = () => {
  const navigate = useNavigate();
  return (
    <div className="search_section">
      <MobNavbar />
      <div className="wrapper">
        <div className="left">
          <Sidebar />
        </div>
        <div className="right">
          <div className="left">
            <h2>Account</h2>

            <div
              className="search_links"
              onClick={() => navigate("/account/change-password")}
            >
              <FiArrowUpRight />
              <span>Change Password</span>
            </div>
            <div className="search_links">
              <FiArrowUpRight />
              <span>Contact Us</span>
            </div>
            <div className="search_links">
              <FiArrowUpRight />
              <span>Help</span>
            </div>
            <div className="search_links">
              <FiArrowUpRight />
              <span>Know us more</span>
            </div>
            <div className="search_links">
              <FiArrowUpRight />
              <span>Logout</span>
            </div>
          </div>
          <div className="right">
            <div className="user_data">
              <table>
                <tbody>
                  <tr>
                    <td>Username:</td>
                    <td>harsh0030</td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>harsh0030sahu@gmail.com</td>
                  </tr>
                  <tr>
                    <td>Joined At:</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
