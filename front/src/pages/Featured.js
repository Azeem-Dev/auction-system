import FeaturedComponent from "../components/Featured/Featured";

const Featured = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        margin: "100px 0",
      }}
    >
      <div style={{ padding: "0 100px" }}>
        <h1
          style={{
            marginLeft: "10px",
            fontSize: "50px",
            fontWeight: "400",
          }}
          className="auctions-heading"
        >
          Featured
        </h1>
      </div>
      <FeaturedComponent />
    </div>
  );
};

export default Featured;
