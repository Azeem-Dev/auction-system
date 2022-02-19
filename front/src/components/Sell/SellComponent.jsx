import { Input, DatePicker } from "antd";
import { AccountBookOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const { RangePicker } = DatePicker;

const SellComponent = () => {
  return (
    <div
      style={{
        marginLeft: "10px",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="left"
      >
        <Input
          size="large"
          placeholder="Product Name"
          prefix={<AccountBookOutlined />}
          style={{ margin: "20px 0" }}
        />
        <TextArea
          showCount
          maxLength={500}
          placeholder="Product Description"
          style={{ height: "120px", width: "100%" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "20px 0",
            width: "100%",
          }}
        >
          <label style={{ margin: "0 0 10px 0" }}>Auction Start End Date</label>
          <RangePicker
            onChange={(dates, datesStrings) => console.log(dates, datesStrings)}
          />
        </div>
      </div>
      <div className="right" style={{ flex: "1" }}>
        Test
      </div>
    </div>
  );
};

export default SellComponent;
