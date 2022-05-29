import "./Auctions.css";
import { List, Avatar, Space, Tag, message } from "antd";
import { FireOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { getUtil } from "../../utils/api/auction-system-api";
const AuctionsComponent = () => {
  const [listData, setListData] = useState([{}]);

  useEffect(() => {
    getUtil("auctions/GetAllAuctions")
      .then((c) => {
        setListData(c.data);
        console.log(c.data);
      })
      .catch((err) => message.error("something went wrong"));
  }, []);

  const IconText = ({ icon, text }) => (
    <div
      style={{
        fontSize: "18px",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
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
          pageSize: 3,
        }}
        dataSource={listData}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            actions={[
              <IconText
                icon={FireOutlined}
                text="Bid Now"
                key="list-vertical-star-o"
              />,
            ]}
            extra={
              <img
                width={272}
                height={272}
                src={`data:image/jpeg;base64,${item?.image}`}
                style={{ objectFit: "cover" }}
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={<a>{item?.productName}</a>}
              description={item?.categories?.map((cat) => {
                <>
                  <Tag color="green">{cat.name}</Tag>
                  {cat?.subcategories?.map((subcat) => (
                    <Tag color="green">{subcat.name}</Tag>
                  ))}
                </>;
              })}
            />
            {item?.description}
          </List.Item>
        )}
      />
    </div>
  );
};

export default AuctionsComponent;
