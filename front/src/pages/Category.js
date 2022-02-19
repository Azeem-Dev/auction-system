import { useParams } from "react-router-dom";
import CategoryComponent from "../components/Category/CategoryComponent";

const Category = () => {
  let { categoryId, subcategoryId } = useParams();
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
        Category {categoryId || subcategoryId}
      </h1>

      <CategoryComponent
        categoryId={categoryId}
        subcategoryId={subcategoryId}
      />
    </div>
  );
};

export default Category;
