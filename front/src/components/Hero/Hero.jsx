import "./Hero.css";
import { Card } from "react-bootstrap";
import Timer from "../Timer/Timer";
import BidNowButton from "../BidNowButton/BidNowButton";
import { useNavigate } from "react-router-dom";

const Hero = ({ ImgUrl, item }) => {
  const navigate = useNavigate();
  return (
    <>
      <Card
        className="bg-dark text-white"
        style={{
          width: "100%",
          height: "70vh",
          borderRadius: "0",
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
            {item?.name}
          </Card.Title>
          <Card.Text
            style={{ fontSize: "26px", lineHeight: "1.2", textAlign: "center" }}
          >
            {item?.description?.substring(0, 100)}...
          </Card.Text>
          <Timer />
          <BidNowButton
            click={() => {
              localStorage.setItem("bid-item", JSON.stringify(item));
              navigate("/bid-now/" + item.id);
            }}
          />
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default Hero;
