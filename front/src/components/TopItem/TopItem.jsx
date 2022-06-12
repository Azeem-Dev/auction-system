import { Collapse } from "antd";
import { Button, Figure } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Timer from "../Timer/Timer";

const { Panel } = Collapse;
const TopItem = ({ randomItem }) => {
  const navigate = useNavigate();
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
          {randomItem?.name}
        </h3>
        <p style={{ fontSize: "20px", fontWeight: "300" }}>
          {randomItem?.description}
        </p>
        <Button
          variant="primary"
          style={{ width: "220px", marginBottom: "20px" }}
          onClick={() => {
            localStorage.setItem("bid-item", JSON.stringify(randomItem));
            navigate("/bid-now/" + randomItem.id);
          }}
        >
          Start Bidding
        </Button>
        <Timer />
        <Collapse accordion ghost expandIconPosition="right">
          <Panel header="Current Highest Bid" key="1">
            <p>
              The Highest Bid for this Product Currently is ($
              {randomItem?.higestBid})
            </p>
          </Panel>
        </Collapse>
      </div>

      <div className="right" style={{ flex: "1" }}>
        <Figure>
          <Figure.Image
            width={350}
            height={350}
            alt="171x180"
            src={`data:image/jpeg;base64,${randomItem?.image}`}
          />
          <Figure.Caption>{randomItem?.name}</Figure.Caption>
        </Figure>
      </div>
    </div>
  );
};

export default TopItem;
