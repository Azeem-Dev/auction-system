import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import {
  UserOutlined,
  LoginOutlined,
  LogoutOutlined,
  DollarOutlined,
} from "@ant-design/icons";
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
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useLocationChange((location) => {
    setLocation(location.pathname);
  });

  var inputProps = {
    active: true,
  };

  useEffect(() => {
    let userId = localStorage.getItem("userId");
    if (userId) {
      setIsUserLoggedIn(true);
    } else {
      setIsUserLoggedIn(false);
    }
  }, [Location]);
  return (
    <>
      <Navbar bg="primary" variant="dark" sticky="top" style={{}}>
        <Container>
          <Navbar.Brand as="div">
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
            <Nav.Link as="div" {...(Location == "/sell" ? inputProps : {})}>
              <Link to="/sell" style={LinkStyles}>
                Sell
              </Link>
            </Nav.Link>
            <Nav.Link
              as="div"
              {...(Location == "/add-category" ? inputProps : {})}
            >
              <Link to="/add-category" style={LinkStyles}>
                Add Category
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
              {...(Location.includes("login") || Location.includes("myauctions")
                ? inputProps
                : {})}
            >
              <NavDropdown.Item
                style={{
                  display: `${isUserLoggedIn ? "none" : "inline-flex"}`,
                  alignItems: "center",
                }}
                as="div"
              >
                <Link to="/login" style={LinkStyles}>
                  <LoginOutlined style={{ marginRight: "10px" }} />
                  Login
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item
                style={{
                  display: `${isUserLoggedIn ? "none" : "inline-flex"}`,
                  alignItems: "center",
                }}
                as="div"
              >
                <Link to="/login/admin" style={LinkStyles}>
                  <LoginOutlined style={{ marginRight: "10px" }} />
                  Admin Login
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item
                style={{
                  display: `${!isUserLoggedIn ? "none" : "inline-flex"}`,
                  alignItems: "center",
                }}
                as="div"
              >
                <Link to="/myauctions" style={LinkStyles}>
                  <DollarOutlined style={{ marginRight: "10px" }} />
                  My Auctions
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item
                style={{
                  display: `${!isUserLoggedIn ? "none" : "inline-flex"}`,
                  alignItems: "center",
                }}
                as="div"
              >
                <Link to="/logout" style={LinkStyles}>
                  <LogoutOutlined style={{ marginRight: "10px" }} />
                  Logout
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              as="div"
              {...(Location == "/register" ? inputProps : {})}
              style={{ display: `${isUserLoggedIn ? "none" : "block"}` }}
            >
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
