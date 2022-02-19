import LoginComponent from "../components/Login/LoginComponent";

const Login = () => {
  return (
    <div
      style={{
        margin: "100px 0",
        padding: "0 100px",
        width: "100%",
        height: "100%",
      }}
    >
      <h1
        style={{ marginLeft: "10px", fontSize: "50px", fontWeight: "400" }}
        className="auctions-heading"
      >
        Login
      </h1>
      <LoginComponent />
    </div>
  );
};

export default Login;
