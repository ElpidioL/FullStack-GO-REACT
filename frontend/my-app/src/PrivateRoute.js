import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children}) => {
    var value = document.cookie;
    console.log(value)
    const isAuthenticated = false;
        
    if (isAuthenticated ) {
      return children
    }
      
    return <Navigate to="/login" />
}