import { Avatar, List, message, Tag } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUtil } from "../../utils/api/auction-system-api";

const SellerAuctionsComponent = () => {
  const [listData, setListData] = useState([{}]);

  useEffect(() => {
    getUtil("auctions/GetUserAuctionItems/" + localStorage.getItem("userId"))
      .then((c) => {
        setListData(c.data[0]);
      })
      .catch((err) => message.error("something went wrong"));
  }, []);
  return (
    <div style={{ marginLeft: "10px" }}>
      <AuctionList listData={listData} />
    </div>
  );
};

const AuctionList = ({ listData }) => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log(listData);
  }, [listData]);

  const IconText = ({ icon, text, url, data }) => (
    <div
      style={{
        fontSize: "18px",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={() => navigate(url, { state: data })}
      className="bid-now-list-button"
    >
      {React.createElement(icon)}
      {text}
    </div>
  );
  return (
    <div>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 5,
        }}
        dataSource={listData}
        renderItem={(item) => {
          return (
            <List.Item
              key={item.id}
              actions={[
                <IconText
                  icon={EditOutlined}
                  text="Edit Auction"
                  key="list-vertical-star-o"
                  url="/edit-auction"
                  data={item}
                />,
                <IconText
                  icon={DeleteOutlined}
                  text="Delete Auction"
                  key="list-vertical-star-o"
                />,
              ]}
              extra={
                <div style={{ width: "272px", height: "272px" }}>
                  <img
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                    alt="logo"
                    src={`data:image/jpeg;base64,${item?.image}`}
                  />
                </div>
              }
            >
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={<a>{item?.name}</a>}
                description={item?.categories?.map((cat) => (
                  <Tag color="#108ee9">{cat}</Tag>
                ))}
              />
              {item?.description}
            </List.Item>
          );
        }}
      />
    </div>
  );
};

export default SellerAuctionsComponent;
