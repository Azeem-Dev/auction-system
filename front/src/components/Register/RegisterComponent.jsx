import { Input, Select, message } from "antd";
import {
  UserOutlined,
  MailOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterComponent.css";
import { Button } from "react-bootstrap";
import { postUtil } from "../../utils/api/auction-system-api";

const { Option } = Select;
const { TextArea } = Input;

const RegisterComponent = () => {
  const navigate = useNavigate();

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [userType, setUserType] = useState("");
  const [address, setAddress] = useState("");

  const Register = () => {
    if (
      username != "" &&
      password != "" &&
      confirmPassword != "" &&
      email != "" &&
      phoneNumber != "" &&
      userType != "" &&
      address != ""
    ) {
      if (password !== confirmPassword) {
        message.error("make sure password matches");
      } else {
        postUtil("auth/register", {
          username,
          email,
          password,
          phoneNo: phoneNumber,
          userType,
          address,
        })
          .then((c) => {
            if (c.data) navigate("/login");
          })
          .catch((err) => {
            message.error(err.response.data);
            console.log("err", err);
          });
      }
    } else {
      message.error("all fields are required");
    }
  };
  return (
    <div style={{ marginLeft: "10px" }}>
      <form>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "10px 0",
          }}
        >
          <Input
            size="large"
            placeholder="Username"
            prefix={<UserOutlined />}
            style={{ width: "49%" }}
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            size="large"
            placeholder="Email"
            prefix={<MailOutlined />}
            style={{ width: "49%" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "10px 0",
          }}
        >
          <Input.Password
            size="large"
            placeholder="Password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            style={{ width: "49%" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input.Password
            size="large"
            placeholder="Confirm Password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            style={{ width: "49%" }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "10px 0",
          }}
        >
          <Input
            size="large"
            placeholder="Phone Number"
            prefix={<PhoneOutlined />}
            style={{ width: "49%" }}
            value={phoneNumber}
            onChange={(e) => setphoneNumber(e.target.value)}
          />
          <Select
            placeholder="Select User Type"
            allowClear
            style={{ width: "49%" }}
            onSelect={(val, opt) => {
              console.log(val, opt);
              setUserType(val);
            }}
          >
            <Option value="seller">Seller</Option>
            <Option value="buyer">Buyer</Option>
          </Select>
        </div>

        <TextArea
          showCount
          maxLength={300}
          placeholder="Enter Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <div
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="primary"
            style={{
              padding: "10px 40px",
              fontSize: "18px",
              fontWeight: "400",
            }}
            onClick={Register}
          >
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterComponent;
