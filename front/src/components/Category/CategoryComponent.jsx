import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getUtil } from "../../utils/api/auction-system-api";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";

const CategoryComponent = ({ categoryId, subcategoryId }) => {
  console.log(categoryId, subcategoryId);
  const [items, setItems] = useState([{}]);
  useEffect(() => {
    console.log(categoryId, subcategoryId);
    getUtil(
      `Categories/GetAuctionItemsByCategoryId/${
        categoryId == "" || categoryId == undefined ? subcategoryId : categoryId
      }/${subcategoryId != "" && subcategoryId != undefined}`
    ).then((c) => setItems(c?.data));
  }, [categoryId, subcategoryId]);

  return (
    <>
      <Container style={{ padding: "0 100px" }}>
        {items?.length == 0 ? (
          <h4>No Data Found for Selected Category</h4>
        ) : (
          <Row style={{ marginBottom: "30px" }}>
            {items?.map((item) => {
              return (
                <Col>
                  <FeaturedProduct item={item} />
                </Col>
              );
            })}
          </Row>
        )}
      </Container>
    </>
  );
};

export default CategoryComponent;
