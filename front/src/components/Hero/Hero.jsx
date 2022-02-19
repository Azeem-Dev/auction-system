import "./Hero.css";
import { FireOutlined } from "@ant-design/icons";
import { Button, Card } from "react-bootstrap";
import Timer from "../Timer/Timer";

const Hero = () => {
  return (
    <>
      <Card
        className="bg-dark text-white"
        style={{
          width: "100%",
          height: "70vh",
        }}
      >
        <Card.Img
          src="https://images.unsplash.com/photo-1645090531478-49b4077958cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Card image"
        />
        <Card.ImgOverlay
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <Card.Title style={{ fontSize: "70px", fontWeight: "700" }}>
            PRODUCT NAME
          </Card.Title>
          <Card.Text
            style={{ fontSize: "26px", lineHeight: "1.2", textAlign: "center" }}
          >
            This is a wider card with supporting text below as a natural
            lead-into additional content. This content is a little bit longer.
          </Card.Text>
          <Timer />
          <button
            className="button button2"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FireOutlined
              style={{ color: "#EF2D56", fontSize: "20px", margin: "0 10px" }}
            />{" "}
            Bid Now
          </button>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default Hero;
