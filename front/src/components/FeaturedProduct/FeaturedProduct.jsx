import { Accordion, Button, Card } from "react-bootstrap";

const FeaturedProduct = ({ item }) => {
  console.log("====================================");
  console.log(item);
  console.log("====================================");
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1645071735492-cba69ec155e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1164&q=80"
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
              The Highest Bid for this Product Currently is (${item?.higestBid})
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card>
    </>
  );
};

export default FeaturedProduct;
