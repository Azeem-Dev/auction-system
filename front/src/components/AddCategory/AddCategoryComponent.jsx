import { Input, Select } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getUtil, postUtil } from "../../utils/api/auction-system-api";

const { Option } = Select;
const AddCategoryComponent = () => {
  const [categories, setCategories] = useState([{}]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [categoryName, setCategoryName] = useState("");
  const [isSubCategory, setIsSubCategory] = useState(false);

  useEffect(() => {
    getUtil("categories/GetAllCategories")
      .then((c) => setCategories(c.data))
      .catch((err) => console.error(err));
  }, []);

  const AddCategory = () => {
    debugger;
    console.log(isSubCategory, categoryName, selectedCategory);
    let apiUrl = "";
    if (selectedCategory === 0) {
      postUtil(`Categories/?name=${categoryName}`)
        .then((c) => console.log(c))
        .catch((err) => console.error(err));
    } else if (isSubCategory) {
      postUtil(`Categories/UpdateAsCategory/${selectedCategory}?name=${categoryName}`)
        .then((c) => console.log(c))
        .catch((err) => console.error(err));
    } else {
      postUtil(`Categories/${selectedCategory}?name=${categoryName}`)
        .then((c) => console.log(c))
        .catch((err) => console.error(err));
    }

    getUtil("categories/GetAllCategories")
      .then((c) => setCategories(c.data))
      .catch((err) => console.error(err));
  };
  return (
    <div
      style={{
        marginLeft: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "50%" }}>
        <form>
          <Input
            size="large"
            placeholder="Category Name"
            prefix={<QuestionCircleOutlined />}
            style={{ width: "100%" }}
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <Select
            placeholder="Select sub-category"
            style={{ width: "100%", margin: "20px 0" }}
            onSelect={(e) => {
              if (e.includes("subcat-")) {
                setIsSubCategory(true);
                setSelectedCategory(e.split("-")[1]);
              } else {
                setSelectedCategory(e);
                setIsSubCategory(false);
              }
            }}
          >
            {categories.map((category) => {
              return (
                <>
                  <Option value={"" + category.id} key={category.id}>
                    {category.name}
                  </Option>
                  {category?.subcategories?.map((subcat) => {
                    return (
                      <Option
                        value={"subcat-" + subcat.id}
                        key={"subcat-" + subcat.id}
                      >
                        {subcat.name}
                      </Option>
                    );
                  })}
                </>
              );
            })}
          </Select>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button variant="primary" onClick={AddCategory}>
              Add Category
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategoryComponent;
