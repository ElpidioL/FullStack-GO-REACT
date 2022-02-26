import { Navigate } from "react-router-dom";
import { GetCookies } from "./scripts/getCookies";

export const PrivateRoute = ({ children}) => {
  GetCookies()

  if (window.colour && window.email) {
    return children
  }
      
  return <Navigate to="/login" />
}