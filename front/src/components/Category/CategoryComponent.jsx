import { Col, Container, Row } from "react-bootstrap";
import { Pagination } from "antd";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";

const CategoryComponent = ({ categoryId, subcategoryid }) => {
  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };
  return (
    <>
      <Container style={{ padding: "0 100px" }}>
        <Row style={{ marginBottom: "30px" }}>
          <Col>
            <FeaturedProduct />
          </Col>
          <Col>
            <FeaturedProduct />
          </Col>
          <Col>
            <FeaturedProduct />
          </Col>
        </Row>
        <Row>
          <Col>
            <FeaturedProduct />
          </Col>
          <Col>
            <FeaturedProduct />
          </Col>
          <Col>
            <FeaturedProduct />
          </Col>
        </Row>
      </Container>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "50px 0 0 0",
        }}
      >
        <Pagination
          showSizeChanger
          onShowSizeChange={onShowSizeChange}
          defaultCurrent={3}
          total={100}
        />
      </div>
    </>
  );
};

export default CategoryComponent;
