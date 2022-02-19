import { Card } from "react-bootstrap";
import BidNowButton from "../BidNowButton/BidNowButton";

const NewArrivalCard = () => {
  return (
    <>
      <Card
        bg={"light"}
        text={"dark"}
        style={{ width: "350px" }}
        className="mb-2"
      >
        <Card.Header>
          <Card.Title>Item Name</Card.Title>
        </Card.Header>
        <Card.Body style={{ display: "flex" }}>
          <div style={{ width: "180px", marginRight: "20px" }}>
            <Card.Img
              src="https://images.unsplash.com/photo-1645119917964-1b0763695ec7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              style={{ objectFit: "cover" }}
            />
          </div>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            <BidNowButton />
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default NewArrivalCard;
