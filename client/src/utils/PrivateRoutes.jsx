import { Navigate, Outlet } from "react-router-dom";
import propTypes from "prop-types";

const PrivateRoutes = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

PrivateRoutes.propTypes = {
  isAuthenticated: propTypes.bool,
};

export default PrivateRoutes;
