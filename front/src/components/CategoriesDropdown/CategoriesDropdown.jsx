import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Categories } from "../../constants/constants";
import { Link } from "react-router-dom";
const LinkStyles = {
  fontSize: "16px",
  color: "inherit !important",
};
const CategoriesDropdown = () => {
  const { SubMenu } = Menu;
  const menu = (
    <Menu style={LinkStyles}>
      {Categories.map((category) => (
        <SubMenu
          title={<Link to={`/categories/${category.id}`}>{category.name}</Link>}
          key={category.id}
        >
          {category.subcategories.map((subcat) => (
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
