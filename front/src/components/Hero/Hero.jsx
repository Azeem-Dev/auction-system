import "./Hero.css";
import { Card } from "react-bootstrap";
import Timer from "../Timer/Timer";
import BidNowButton from "../BidNowButton/BidNowButton";

const Hero = ({ ImgUrl }) => {
  return (
    <>
      <Card
        className="bg-dark text-white"
        style={{
          width: "100%",
          height: "70vh",
          borderRadius: "0"
        }}
      >
        <Card.Img
          src={ImgUrl}
          alt="Card image"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
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
          <BidNowButton />
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default Hero;
