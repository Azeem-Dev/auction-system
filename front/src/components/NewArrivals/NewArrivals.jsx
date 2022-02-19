import NewArrivalCard from "../NewArrivalCard/NewArrivalCard";
const NewArrivals = () => {
  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "50px", fontWeight: "400" }}>
        New Arrivals
      </h2>
      <p
        style={{
          margin: "0 auto",
          textAlign: "center",
          width: "40%",
          fontWeight: "400",
          fontSize: "18px",
        }}
      >
        We Try to make your Life much easier by making Auctions Reacable and Our
        Products Top Prices Cost Less than MarketPlaces
      </p>
      <div
        style={{
          margin: "60px auto",
          display: "flex",
          width: "80%",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1", margin: "20px 20px" }}>
          <NewArrivalCard />
        </div>
        <div style={{ flex: "1", margin: "20px 20px" }}>
          <NewArrivalCard />
        </div>
        <div style={{ flex: "1", margin: "20px 20px" }}>
          <NewArrivalCard />
        </div>
        <div style={{ flex: "1", margin: "20px 20px" }}>
          <NewArrivalCard />
        </div>
        <div style={{ flex: "1", margin: "20px 20px" }}>
          <NewArrivalCard />
        </div>
        <div style={{ flex: "1", margin: "20px 20px" }}>
          <NewArrivalCard />
        </div>
      </div>
    </>
  );
};

export default NewArrivals;
