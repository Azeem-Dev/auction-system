import { useNavigate } from "react-router-dom";
import { Accordion, Button, Card } from "react-bootstrap";

const FeaturedProduct = ({ item }) => {
  const navigate = useNavigate();
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
          <Button
            variant="primary"
            onClick={() => {
              localStorage.setItem("bid-item", JSON.stringify(item));
              navigate("/bid-now/" + item.id);
            }}
          >
            Start Bidding
          </Button>
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
