import { Navigate } from "react-router-dom";

const Logout = () => {
  localStorage.removeItem("userId");
  localStorage.removeItem("isAdmin");
  return <Navigate to="/login" />;
};

export default Logout;
