import { Input, Select } from "antd";
import {
  UserOutlined,
  MailOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import "./RegisterComponent.css";
import { Button } from "react-bootstrap";

const { Option } = Select;
const { TextArea } = Input;

const RegisterComponent = () => {
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
          />
          <Input
            size="large"
            placeholder="Email"
            prefix={<MailOutlined />}
            style={{ width: "49%" }}
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
          />
          <Input.Password
            size="large"
            placeholder="Confirm Password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            style={{ width: "49%" }}
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
          />
          <Select
            placeholder="Select User Type"
            allowClear
            style={{ width: "49%" }}
            onSelect={(val, opt) => {
              console.log(val, opt);
            }}
          >
            <Option value="Seller">Seller</Option>
            <Option value="Buyer">Buyer</Option>
          </Select>
        </div>

        <TextArea showCount maxLength={300} placeholder="Enter Address" />
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
          >
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterComponent;
