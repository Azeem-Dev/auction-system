import { Input, DatePicker } from "antd";
import { AccountBookOutlined, DollarOutlined } from "@ant-design/icons";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import { useState } from "react";

const { TextArea } = Input;
const { RangePicker } = DatePicker;

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";

  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }

  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }

  return isJpgOrPng && isLt2M;
};

const SellComponent = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [imagePath, setImagePath] = useState("");

  const handleChange = (info) => {
    console.log(info);
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }

    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
    setImagePath(info.file.response);
    console.log(info.file.response);
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

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
        <Input
          size="large"
          placeholder="Starting Bid"
          prefix={<DollarOutlined />}
          style={{ margin: "20px 0" }}
        />
        <Input
          size="large"
          placeholder="Market Value"
          prefix={<DollarOutlined />}
          style={{ margin: "20px 0" }}
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
      <div
        className="right"
        style={{
          flex: "1",
        }}
      >
        <Upload
          name="auction-item-picture"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action="https://localhost:7131/api/upload"
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {imageUrl ? (
            <div style={{ width: "250px", height: "250px" }}>
              <img
                src={imageUrl}
                alt="avatar"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          ) : (
            uploadButton
          )}
        </Upload>
      </div>
    </div>
  );
};

export default SellComponent;
