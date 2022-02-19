import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { UserOutlined, LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import Logo from "../../assets/imgs/logo192.png";
import "./NavBar.css";
import CategoriesDropdown from "../CategoriesDropdown/CategoriesDropdown";
import { useLocationChange } from "../../utils/custom/useLocationChage";
import { useState, useEffect } from "react";
const LinkStyles = {
  fontSize: "16px",
  color: "inherit",
};
const NavBar = () => {
  const [Location, setLocation] = useState("/");
  useLocationChange((location) => {
    setLocation(location.pathname);
  });

  var inputProps = {
    active: true,
  };

  useEffect(() => {}, [Location]);
  return (
    <>
      <Navbar bg="primary" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as="div" {...(Location == "/" ? inputProps : {})}>
              <Link to="/" style={LinkStyles}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link as="div" {...(Location == "/auctions" ? inputProps : {})}>
              <Link to="/auctions" style={LinkStyles}>
                Auctions
              </Link>
            </Nav.Link>
            <Nav.Link as="div" {...(Location == "/featured" ? inputProps : {})}>
              <Link to="/featured" style={LinkStyles}>
                Featured
              </Link>
            </Nav.Link>
            <Nav.Link
              as="div"
              {...(Location.includes("categories") ? inputProps : {})}
            >
              <CategoriesDropdown />
            </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown
              title={
                <div
                  style={{
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <UserOutlined style={{ padding: "5px" }} /> User
                </div>
              }
              id="navbarScrollingDropdown"
              style={LinkStyles}
              {...(Location.includes("user") ? inputProps : {})}
            >
              <NavDropdown.Item
                href="#action3"
                style={{ display: "inline-flex", alignItems: "center" }}
                as="div"
              >
                <LoginOutlined style={{ marginRight: "10px" }} />
                Login
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action3"
                style={{ display: "inline-flex", alignItems: "center" }}
                as="div"
              >
                <LoginOutlined style={{ marginRight: "10px" }} />
                Admin Login
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action4"
                style={{ display: "inline-flex", alignItems: "center" }}
                as="div"
              >
                <LogoutOutlined style={{ marginRight: "10px" }} />
                Logout
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as="div" {...(Location == "/register" ? inputProps : {})}>
              <Link to="/register" style={LinkStyles}>
                Register
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
