import { Collapse } from "antd";
import { Button, Figure } from "react-bootstrap";
import Timer from "../Timer/Timer";

const { Panel } = Collapse;
const TopItem = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "90vh",
        backgroundColor: "#eef1f8",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "0 200px",
      }}
    >
      <div
        className="left"
        style={{ display: "flex", flexDirection: "column", flex: "1" }}
      >
        <h3 style={{ fontSize: "70px", fontWeight: "500" }}>
          Leather
          <br />
          <span style={{ paddingLeft: "20px" }}>Gloves</span>
        </h3>
        <p style={{ fontSize: "20px", fontWeight: "300" }}>
          We want to create a range of beautiful, practical and modern outerwear
          that doesn't cost the earth.
        </p>
        <Button
          variant="primary"
          style={{ width: "220px", marginBottom: "20px" }}
        >
          Start Bidding
        </Button>
        <Timer />
        <Collapse accordion ghost expandIconPosition="right">
          <Panel header="Current Highest Bid" key="1">
            <p>The Highest Bid for this Product Currently is ($23.3)</p>
          </Panel>
        </Collapse>
      </div>

      <div className="right" style={{ flex: "1" }}>
        <Figure>
          <Figure.Image
            width={350}
            height={350}
            alt="171x180"
            src="https://images.unsplash.com/photo-1525304937537-4d586f394674?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
          <Figure.Caption>Leather Gloves</Figure.Caption>
        </Figure>
      </div>
    </div>
  );
};

export default TopItem;
