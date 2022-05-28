import FeaturedCategory from "../FeaturedCategory/FeaturedCategory";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import NewArrivals from "../NewArrivals/NewArrivals";
import TopItem from "../TopItem/TopItem";
import "./Featured.css";
const FeaturedComponent = () => {
  return (
    <>
      {/* FEATURED PRODUCTS */}
      <div style={{ marginTop: "150px" }}>
        <h2
          style={{ textAlign: "center", marginTop: "50px", fontWeight: "400" }}
        >
          Featured Products
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
          We Try to make your Life much easier by making Auctions Reacable and
          Our Products Top Prices Cost Less than MarketPlaces
        </p>
        <div
          style={{
            display: "flex",
            marginTop: "50px",
            padding: "0 100px",
            align: "center",
            justifyContent: "space-evenly",
          }}
        >
          <FeaturedProduct />
          <FeaturedProduct />
          <FeaturedProduct />
        </div>
      </div>

      {/*  FEATURED PRODUCTS END */}
      {/* TOP ITEMS */}
      <div style={{ margin: "100px 0 150px 0", width: "100%" }}>
        <TopItem />
      </div>

      <div style={{ margin: "100px 0 300px 0", width: "100%" }}>
        <NewArrivals />
      </div>
    </>
  );
};

export default FeaturedComponent;
