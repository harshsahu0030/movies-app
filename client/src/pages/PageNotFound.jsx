import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <div className="login_section">
      <div className="wrapper">
        <form className="container">
          <h2>Page Not Found</h2>

          <p>404 Error</p>
          <p>
            <Link to={isAuthenticated ? "/home" : "/"}>Back To Home Page</Link>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default PageNotFound;
