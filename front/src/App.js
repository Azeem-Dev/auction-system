import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Auctions from "./pages/Auctions";
import Category from "./pages/Category";
import Featured from "./pages/Featured";
import Home from "./pages/Home";

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
    </Routes>
    <Footer />
  </>
);

export default App;
