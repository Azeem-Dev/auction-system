import { Accordion, Button, Card } from "react-bootstrap";

const FeaturedProduct = ({ item }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={`data:image/jpeg;base64,${item?.image}`}
          width="150px"
          height="150px"
          style={{ objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{item?.name}</Card.Title>
          <Card.Text>
            {item?.description?.substring(0, 100)}
            ...
          </Card.Text>
          <Button variant="primary">Start Bidding</Button>
        </Card.Body>
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Highest Bid</Accordion.Header>
            <Accordion.Body>
              The Highest Bid for this Product Currently is (${item?.higestBid}{" "}
              )
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card>
    </>
  );
};

export default FeaturedProduct;
