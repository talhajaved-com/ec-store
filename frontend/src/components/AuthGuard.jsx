import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const AuthGuard = ({ children }) => {

  const data = JSON.parse(localStorage.getItem("data"));

  if (!data) {
    return <Navigate to="/login" replace />;
  }

  

  return data ? <>{children}</> : null;
};

AuthGuard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthGuard;
