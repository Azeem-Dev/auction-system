import { Card, message } from "antd";
import Meta from "antd/lib/card/Meta";
import { useState, useEffect } from "react";
import { getUtil } from "../../utils/api/auction-system-api";
import FeaturedCategory from "../FeaturedCategory/FeaturedCategory";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import NewArrivals from "../NewArrivals/NewArrivals";
import Slider from "../Slider/Slider";
import TopItem from "../TopItem/TopItem";
import "./HomePage.css";

const HomePageComponent = () => {
  const [featuredCategories, setFeaturedCategories] = useState([{}]);
  const [featuredItems, setFeaturedItems] = useState([{}]);

  useEffect(() => {
    getUtil("categories/GetFeaturedProductsWithCategories")
      .then((c) => setFeaturedCategories(c.data))
      .catch((err) => message.error("Something went wrong"));

    getUtil("Auctions/GetFeaturedAuctionItems/3")
      .then((c) => {
        console.log(c);
        setFeaturedItems(c.data);
      })
      .catch((err) => message.error("some error"));
  }, []);
  return (
    <div>
      {/* HERO START */}
      <Slider />
      <div style={{ display: "flex", padding: "0 200px" }}>
        <BorderBlock title="FREE SHIPPING" tagLine="In 2-3 days" />
        <BorderBlock title="RELAIABLE" tagLine="Garranted Products" />
        <BorderBlock title="FREE 24" tagLine="Days Storage" isLast />
      </div>
      {/* HERO END */}

      {/* FEATURED CATEGORIES */}
      <div style={{ marginTop: "150px" }}>
        <h2
          style={{ textAlign: "center", marginTop: "50px", fontWeight: "400" }}
        >
          Featured Categories
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
          {featuredCategories?.map((featuredCategory) => (
            <FeaturedCategory featuredCategory={featuredCategory} />
          ))}
        </div>
      </div>

      {/*  FEATURED CATEGORIES END */}

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
          {featuredItems?.map((item) => (
            <FeaturedProduct item={item} />
          ))}
        </div>
      </div>

      {/*  FEATURED PRODUCTS END */}
      {/* TOP ITEMS */}
      <div style={{ margin: "100px 0 300px 0" }}>
        <TopItem
          randomItem={
            featuredItems[Math.floor(Math.random() * featuredItems.length)]
          }
        />
      </div>
      {/* TOP ITEMS END */}
    </div>
  );
};

const BorderBlock = ({ title, tagLine, isLast = false }) => {
  return (
    <div
      style={{
        fontSize: "20px",
        padding: "35px",
        borderRight: isLast ? "none" : "1px solid rgba(0,0,0,0.1)",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
        flex: "1",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h5>{title}</h5>
        <p style={{ fontSize: "20px", fontWeight: "300" }}>{tagLine}</p>
      </div>
    </div>
  );
};

export default HomePageComponent;
