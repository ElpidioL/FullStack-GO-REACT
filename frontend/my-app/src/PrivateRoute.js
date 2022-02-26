import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children}) => {
  
  console.log(children.props.Auth , children.props.Email)
  if (children.props.Auth && children.props.Email) {
    return children
  }
      
  return <Navigate to="/login" />
}