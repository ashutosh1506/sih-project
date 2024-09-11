import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


// This function checks if the user is logged in.
const PrivateRoute = ({ element }) => {
    const { isAuthenticated } = useAuth();
  
    return isAuthenticated ? element : <Navigate to="/login" />;
  };
  
  export default PrivateRoute;