import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PageWrapper from "./components/PageWrapper";
import ScrollToTop from "./components/ScrollToTop";
import ShopContextProvider from "./context/ShopContextProvider";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import ProductsPage from "./pages/ProductsPage";

const AnimatedRoutes = () => {
  const location = useLocation(); // important for AnimatePresence
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/home" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/products" element={<PageWrapper><ProductsPage /></PageWrapper>} />
        <Route path="/product/:id" element={<PageWrapper><ProductDetails /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/cart" element={<PageWrapper><Cart /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><AboutUs /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  console.log("App is Running");
  return (
    <ShopContextProvider>
      <Toaster position="top-center" />
      <Router>
        <ScrollToTop />
        <Navbar />
        <AnimatedRoutes />
        
      </Router>
    </ShopContextProvider>
  );
};

export default App;
