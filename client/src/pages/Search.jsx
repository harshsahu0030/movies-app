import Sidebar from "../components/Sidebar";
import { FiArrowUpRight } from "react-icons/fi";

const Search = () => {
  return (
    <div className="search_section">
      <div className="wrapper">
        <div className="left">
          <Sidebar />
        </div>
        <div className="right">
          <div className="left">
            <div className="input_container">
              <input type="search" className="input" />
              <button>Search</button>
            </div>
            <hr />

            <div className="search_links">
              <FiArrowUpRight />
              <span>Hello</span>
            </div>
          </div>
          <div className="right">
            <h2>Recomandations</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
