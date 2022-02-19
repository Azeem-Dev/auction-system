import Countdown from "react-countdown";
// Random component
const Completionist = () => <span>Auction Ended!</span>;
const BlockStyle = {
  backgroundColor: "#fff",
  padding: "5px",
  fontWeight: "400",
  fontSize: "14px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "#000",
};
// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <p style={{ display: "flex" }}>
        <span style={BlockStyle}>
          {days} <span style={{ fontSize: "15px" }}>DAYS</span>
        </span>
        :
        <span style={BlockStyle}>
          {hours} <span style={{ fontSize: "15px" }}>HOURS</span>{" "}
        </span>
        :
        <span style={BlockStyle}>
          {minutes} <span style={{ fontSize: "15px" }}>MINUTES</span>{" "}
        </span>
        :
        <span style={BlockStyle}>
          {seconds} <span style={{ fontSize: "15px" }}>SECONDS</span>{" "}
        </span>
      </p>
    );
  }
};

const Timer = () => {
  return (
    <>
      <Countdown date={Date.now() + 100000000} renderer={renderer} />
    </>
  );
};

export default Timer;
