import AuctionsComponent from "../components/Auctions/Auctions";

const Auctions = () => {
  return (
    <div
      style={{
        margin: "100px 0",
        padding: "0 100px",
        width: "100%",
        height: "100%",
      }}
    >
      <h1 style={{ marginLeft: "10px", fontSize: "50px", fontWeight: "400" }} className="auctions-heading">
        Current Auctions
      </h1>
      <AuctionsComponent />
    </div>
  );
};

export default Auctions;
