import SellComponent from "../components/Sell/SellComponent";
import { useLocation } from "react-router-dom";
import { useMemo, useState } from "react";

const Sell = () => {
  const location = useLocation();

  const newStateData = useMemo(() => location.state, [location.state]);
  const isEditView = useMemo(
    () => location.pathname.includes("edit"),
    [location.pathname]
  );

  return (
    <div
      style={{
        margin: "100px 0",
        padding: "0 100px",
        width: "100%",
        height: "100%",
      }}
    >
      <h1
        style={{ marginLeft: "10px", fontSize: "50px", fontWeight: "400" }}
        className="auctions-heading"
      >
        {isEditView ? "Edit Auction" : "Add auction"}
      </h1>
      <SellComponent isEditView={isEditView} auctiondata={newStateData} />
    </div>
  );
};

export default Sell;
