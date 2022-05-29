import { Card, Tag } from "antd";
import Meta from "antd/lib/card/Meta";

const FeaturedCategory = ({ featuredCategory }) => {
  console.log(featuredCategory);
  return (
    <>
      {" "}
      <Card
        onClick={() => console.log("test")}
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src={`data:image/jpeg;base64,${featuredCategory?.image}`}
            style={{ opacity: "0.8" }}
          />
        }
      >
        <Meta
          title={featuredCategory?.productName}
          description={<Tag color="#f50">{featuredCategory?.categoryName}</Tag>}
        />
      </Card>
    </>
  );
};

export default FeaturedCategory;
