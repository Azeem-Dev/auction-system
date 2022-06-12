import { Input, DatePicker, Select } from "antd";
import { Button } from "react-bootstrap";
import { AccountBookOutlined, DollarOutlined } from "@ant-design/icons";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import { useEffect, useState } from "react";
import { baseURL, getUtil, postUtil } from "../../utils/api/auction-system-api";

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

const { Option } = Select;
const SellComponent = ({ isEditView = false, auctiondata = null }) => {
  console.log(auctiondata);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [imagePath, setImagePath] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [startingBid, setStartingBid] = useState(0.0);
  const [marketValue, setMarketValue] = useState(0.0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [categories, setCategories] = useState([{}]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    getUtil("categories/GetAllCategories")
      .then((c) => setCategories(c.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (isEditView && auctiondata) {
      setData();
    }
  }, [auctiondata]);

  const setData = () => {
    setImageUrl(`data:image/jpeg;base64,${auctiondata?.image}`);
    setSelectedCategory(auctiondata.categories[0]);
    setProductName(auctiondata?.name);
    setProductDescription(auctiondata?.description);
    setStartingBid(auctiondata?.startingBid);
    setMarketValue(auctiondata?.marketValue);
    setStartDate(auctiondata?.startDate);
    setEndDate(auctiondata?.EndDate);
  };
  const AddAuctionItem = () => {
    console.log("AddAuctionItem");

    if (
      imagePath == "" &&
      productName == "" &&
      productDescription == "" &&
      startingBid == 0.0 &&
      marketValue == 0.0 &&
      startDate == "" &&
      endDate == ""
    ) {
      message.error("All Fields are required");
    } else {
      let userId = localStorage.getItem("userId");
      if (userId == null || userId == "") {
        message.error("Please Login to add a new Auction Item");
      } else {
        let apiUrl = "Auctions/AddNewAuctionItem";
        const requestItem = {
          ProductName: productName,
          ProductDescription: productDescription,
          StartingBid: startingBid,
          MarketValue: marketValue,
          StartingDate: startDate,
          EndDate: endDate,
          ImagePath: imagePath,
          UserId: userId,
          CategoryId: selectedCategory,
        };

        postUtil(apiUrl, requestItem)
          .then((c) => console.log(c))
          .catch((err) => console.log(err));
      }
    }
  };

  const UpdateAuctionItem=()=>{
    if (
      imageUrl == "" &&
      productName == "" &&
      productDescription == "" &&
      startingBid == 0.0 &&
      marketValue == 0.0 &&
      startDate == "" &&
      endDate == ""
    ) {
      message.error("All Fields are required");
    } else {
      let userId = localStorage.getItem("userId");
      if (userId == null || userId == "") {
        message.error("Please Login to add a new Auction Item");
      } else {
        let apiUrl = "Auctions/UpdateAuctionItem";
        const requestItem = {
          id:auctiondata.id,
          ProductName: productName,
          ProductDescription: productDescription,
          StartingBid: startingBid,
          MarketValue: marketValue,
          StartingDate: startDate,
          EndDate: endDate,
          ImagePath: imagePath,
          UserId: userId,
          CategoryId: selectedCategory,
        };

        postUtil(apiUrl, requestItem)
          .then((c) => console.log(c))
          .catch((err) => console.log(err));
      }
    }
  }

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
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <TextArea
          showCount
          maxLength={500}
          placeholder="Product Description"
          style={{ height: "120px", width: "100%" }}
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        />
        <Input
          size="large"
          placeholder="Starting Bid"
          prefix={<DollarOutlined />}
          style={{ margin: "20px 0" }}
          value={startingBid}
          onChange={(e) => setStartingBid(e.target.value)}
        />
        <Input
          size="large"
          placeholder="Market Value"
          prefix={<DollarOutlined />}
          style={{ margin: "20px 0" }}
          value={marketValue}
          onChange={(e) => setMarketValue(e.target.value)}
        />
        <Select
          placeholder="Select Category"
          style={{ width: "100%", margin: "20px 0" }}
          onSelect={(e) => {
            setSelectedCategory(e);
          }}
          value={selectedCategory}
        >
          {categories.map((category) => {
            return (
              <Option value={"" + category.id} key={category.id}>
                {category.name}
              </Option>
            );
          })}
        </Select>
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
            onChange={(dates, datesStrings) => {
              setStartDate(datesStrings[0]);
              setEndDate(datesStrings[1]);
            }}
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
          action={`${baseURL}upload`}
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
      <Button
        variant="primary"
        style={{
          padding: "10px 40px",
          fontSize: "18px",
          fontWeight: "400",
        }}
        onClick={isEditView ? UpdateAuctionItem: AddAuctionItem}
      >
        Submit
      </Button>
    </div>
  );
};

export default SellComponent;
