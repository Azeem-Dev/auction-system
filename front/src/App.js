import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/navbar/NavBar";
import AdminLogin from "./pages/AdminLogin";
import Auctions from "./pages/Auctions";
import Category from "./pages/Category";
import Featured from "./pages/Featured";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Register from "./pages/Register";

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
      <Route path="/featured" element={<Featured />} />
      <Route path="/categories" element={<Category />}>
        <Route path=":categoryId" element={<Category />} />
        <Route path="subcategory/:subcategoryId" element={<Category />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/admin" element={<AdminLogin />} />
      <Route path="/product/:productId" element={<Product />} />
    </Routes>
    <Footer />
  </>
);

export default App;
