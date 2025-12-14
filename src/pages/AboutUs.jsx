import aboutImg from "../assets/about.avif";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <section className="w-full py-28  bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="md:w-1/2">
          <img
            src={aboutImg}
            alt="About Us"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About <span className="text-primary">Us</span>
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Welcome to ShopVerse! We are committed to providing the best
            products with top-notch quality and exceptional customer service.
            Our mission is to make online shopping a delightful experience for
            everyone.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            From trendy fashion to premium gadgets, we carefully curate our
            collection to ensure our customers get only the best. Join thousands
            of happy shoppers and experience hassle-free shopping with fast
            delivery and secure payments.
          </p>
          <button className="bg-primary text-white py-2 px-6 rounded-lg font-medium hover:bg-primary/85 transition-all duration-300 cursor-pointer mb-6">
            Learn More
          </button>
        </div>
      </div>
      <HowItWorks />
      <Footer />
    </section>
  );
};

export default AboutUs;
