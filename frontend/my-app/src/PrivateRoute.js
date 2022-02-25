import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children}) => {

  if (children.props.Auth) {
    return children
  }
      
  return <Navigate to="/login" />
}