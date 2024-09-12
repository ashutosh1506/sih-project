import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

// This function checks if the user is logged in.
const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      alert("Please login first");
    }
  }, [isAuthenticated]);

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
