import { Input, Select } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Button } from "react-bootstrap";

const { Option } = Select;
const AddCategoryComponent = () => {
  return (
    <div
      style={{
        marginLeft: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "50%" }}>
        <form>
          <Input
            size="large"
            placeholder="Category Name"
            prefix={<QuestionCircleOutlined />}
            style={{ width: "100%" }}
          />
          <Select
            placeholder="Select Category"
            style={{ width: "100%", margin: "20px 0" }}
            allowClear
          >
            <Option value="lucy">Electronics</Option>
          </Select>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button variant="primary">Add Category</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategoryComponent;
