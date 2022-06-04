import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/navbar/NavBar";
import AddCategory from "./pages/AddCategory";
import AdminLogin from "./pages/AdminLogin";
import Auctions from "./pages/Auctions";
import Category from "./pages/Category";
import Featured from "./pages/Featured";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Sell from "./pages/Sell";
import SellerAuctions from "./pages/SellerAuctions";

function App() {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

const Layout = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auctions" element={<Auctions />} />
      {/* <Route path="/featured" element={<Featured />} /> */}
      <Route path="/categories" element={<Category />}>
        <Route path=":categoryId" element={<Category />} />
        <Route path="subcategory/:subcategoryId" element={<Category />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/admin" element={<AdminLogin />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="/sell" element={<Sell />} />
      <Route path="/myauctions" element={<SellerAuctions />} />
      <Route path="/add-category" element={<AddCategory />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/edit-auction" element={<Sell />} />
    </Routes>
    <Footer />
  </>
);

export default App;
