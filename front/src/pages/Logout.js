import { Navigate } from "react-router-dom";

const Logout = () => {
  localStorage.removeItem("userId");
  return <Navigate to="/login" />;
};

export default Logout;
