import { FireOutlined } from "@ant-design/icons";
import "./BidNowButton.css";
const BidNowButton = ({ click }) => {
  return (
    <>
      {" "}
      <button
        className="button button2"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => click()}
      >
        <FireOutlined
          style={{ color: "#EF2D56", fontSize: "20px", margin: "0 10px" }}
        />{" "}
        Bid Now
      </button>
    </>
  );
};

export default BidNowButton;
