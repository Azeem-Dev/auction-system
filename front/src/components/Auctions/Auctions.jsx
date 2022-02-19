import "./Auctions.css";
import { List, Avatar, Space, Tag } from "antd";
import { FireOutlined } from "@ant-design/icons";
import React from "react";
const AuctionsComponent = () => {
  const listData = [];
  for (let i = 0; i < 23; i++) {
    listData.push({
      id: i,
      href: "https://ant.design",
      title: `Item Name`,
      avatar: "https://joeschmoe.io/api/v1/random",
      tags: [
        <Tag color="magenta">magenta</Tag>,
        <Tag color="red">red</Tag>,
        <Tag color="volcano">volcano</Tag>,
        <Tag color="orange">orange</Tag>,
        <Tag color="gold">gold</Tag>,
        <Tag color="lime">lime</Tag>,
        <Tag color="green">green</Tag>,
        <Tag color="cyan">cyan</Tag>,
        <Tag color="blue">blue</Tag>,
        <Tag color="geekblue">geekblue</Tag>,
        <Tag color="purple">purple</Tag>,
        <Tag color="#f50">#f50</Tag>,
        <Tag color="#2db7f5">#2db7f5</Tag>,
        <Tag color="#87d068">#87d068</Tag>,
        <Tag color="#108ee9">#108ee9</Tag>,
      ],
      content:
        "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
    });
  }
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
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.tags.map((tag) => tag)}
            />
            {item.content}
          </List.Item>
        )}
      />
    </div>
  );
};

export default AuctionsComponent;
