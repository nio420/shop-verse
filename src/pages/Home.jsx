import Contact from "./Contact";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import WhyChooseUs from "../components/WhyChooseUs";
import AppPromo from "../components/AppPromo";
import Newsletter from "../components/Newsletter";
import Testimonials from "../components/Testimonials";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";

const Home = () => {
  console.log("HOME IS LOADING");
  return (
    <div>
      <Hero />
      <ProductList limit={8} title="Our Elegant Collection" />   
      <WhyChooseUs/>
      <AppPromo/>   
      <Newsletter/>
      <Testimonials/>
      <HowItWorks/>
    </div>
  );
};

export default Home;
