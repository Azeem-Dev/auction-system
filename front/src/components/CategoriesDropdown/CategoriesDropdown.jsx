import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUtil } from "../../utils/api/auction-system-api";
const LinkStyles = {
  fontSize: "16px",
  color: "inherit !important",
};
const CategoriesDropdown = () => {
  const [categories, setCategories] = useState([{}]);

  useEffect(() => {
    getUtil("categories/GetAllCategories")
      .then((c) => setCategories(c.data))
      .catch((err) => console.error(err));

    console.log(categories);
  }, []);

  const { SubMenu } = Menu;
  const menu = (
    <Menu style={LinkStyles}>
      {categories?.map((category) => (
        <SubMenu
          title={<Link to={`/categories/${category.id}`}>{category.name}</Link>}
          key={category.id}
        >
          {category.subcategories?.map((subcat) => (
            <Menu.Item key={subcat.id}>
              <Link to={`/categories/subcategory/${subcat.id}`}>
                {subcat.name}
              </Link>
            </Menu.Item>
          ))}
        </SubMenu>
      ))}
    </Menu>
  );
  return (
    <>
      <Dropdown overlay={menu} style={LinkStyles}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          Categories <DownOutlined />
        </a>
      </Dropdown>
    </>
  );
};

export default CategoriesDropdown;
