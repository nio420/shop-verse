import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ShopContextProvider from "./context/ShopContextProvider";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import ProductsPage from "./pages/ProductsPage";
import AboutUs from "./pages/AboutUs";

const App = () => {
  console.log("App is Running");
  return (
    <ShopContextProvider>
      <Toaster position="top-center" />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<AboutUs/>}/>
        </Routes>
        <Footer />
      </Router>
    </ShopContextProvider>
  );
};

export default App;
