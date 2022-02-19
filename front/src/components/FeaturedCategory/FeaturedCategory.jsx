import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

const FeaturedCategory = () => {
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
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            style={{ opacity: "0.8" }}
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </>
  );
};

export default FeaturedCategory;
