import { Input } from "antd";
import {
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { Button } from "react-bootstrap";
const LoginComponent = () => {
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
          placeholder="Username"
          prefix={<UserOutlined />}
          style={{ margin: "10px 0" }}
        />
        <Input.Password
          size="large"
          placeholder="Password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          style={{ margin: "10px 0" }}
        />
      </div>
      <Button
        variant="primary"
        style={{
          padding: "10px 40px",
          fontSize: "18px",
          fontWeight: "400",
        }}
      >
        Login
      </Button>
    </div>
  );
};

export default LoginComponent;
