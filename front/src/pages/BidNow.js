import { Image, Input, InputNumber, Button } from "antd";
import { DollarOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
const BidNow = () => {
  const { TextArea } = Input;

  const [bidItem, setbidItem] = useState({});
  useEffect(() => {
    let item = JSON.parse(localStorage.getItem("bid-item"));
    setbidItem(item);
  }, []);
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
        Bid Now
      </h1>
      <div
        style={{
          width: "60%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ width: "150px", height: "150px" }}>
          <Image
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={`data:image/jpeg;base64,${bidItem?.image}`}
          />
        </div>
        <TextArea
          placeholder="Product Name"
          autoSize
          style={{ margin: "10px 0" }}
          value={bidItem?.name}
          disabled
        />
        <TextArea
          placeholder="Product Description"
          autoSize
          style={{ margin: "10px 0" }}
          value={bidItem?.description}
          disabled
        />
        <TextArea
          placeholder="Start Date"
          autoSize
          style={{ margin: "10px 0" }}
          value={bidItem?.startDate}
          disabled
        />
        <TextArea
          placeholder="End Date"
          autoSize
          style={{ margin: "10px 0" }}
          value={bidItem?.endDate}
          disabled
        />
        <Input
          placeholder="Max Bid"
          style={{ margin: "10px 0" }}
          prefix={<DollarOutlined />}
          value={bidItem?.higestBid}
          disabled
        />

        <div style={{ margin: "10px 0" }}>
          <label style={{ margin: "0 5px" }}>Your Bid</label>
          <InputNumber
            min={
              bidItem?.higestBid == 0
                ? bidItem?.startingBid
                : bidItem?.higestBid
            }
            max={1000000}
            keyboard
            defaultValue={
              bidItem?.higestBid == 0
                ? bidItem?.startingBid
                : bidItem?.higestBid
            }
          />
        </div>

        <Button type="primary" size="large">
          Bid Now
        </Button>
      </div>
    </div>
  );
};

export default BidNow;
