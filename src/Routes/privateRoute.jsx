import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const privateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (user) {
    return <div>{children}</div>;
  }
  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default privateRoute;
