import { Input, message } from "antd";
import {
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postUtil } from "../../utils/api/auction-system-api";
const LoginComponent = ({ isAdmin = false }) => {
  const [usernameOrEmail, setUserNameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const Login = () => {
    if (usernameOrEmail != "" && password != "") {
      let apiUrl = isAdmin ? "auth/admin-login" : "auth/login";
      postUtil(apiUrl, {
        usernameOrEmail,
        password,
      })
        .then((c) => {
          localStorage.setItem("userId", c.data);
          if(isAdmin) {
            localStorage.setItem("isAdmin",true);
          }
          navigate("/");
        })
        .catch((err) => {
          message.error(err.response.data);
          console.log("err", err);
        });
    } else {
      message.error("All Fields are required");
    }
  };
  return (
    <div
      style={{
        marginLeft: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "50%" }} className="right">
        <Input
          size="large"
          placeholder="Username/Email"
          prefix={<UserOutlined />}
          style={{ margin: "10px 0" }}
          value={usernameOrEmail}
          onChange={(e) => setUserNameOrEmail(e.target.value)}
        />
        <Input.Password
          size="large"
          placeholder="Password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          style={{ margin: "10px 0" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button
        variant="primary"
        style={{
          padding: "10px 40px",
          fontSize: "18px",
          fontWeight: "400",
        }}
        onClick={Login}
      >
        Login
      </Button>
    </div>
  );
};

export default LoginComponent;
