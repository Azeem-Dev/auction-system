import SingleProduct from "../components/SingleProduct/SingleProduct";

const Product = () => {
  return (
    <div
      style={{
        margin: "100px 0",
        padding: "0 100px",
        width: "100%",
        height: "100%",
      }}
    >
      <h1 style={{ marginLeft: "10px", fontSize: "50px", fontWeight: "400" }}>
        Product
      </h1>

      <SingleProduct />
    </div>
  );
};

export default Product;
