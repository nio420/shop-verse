import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="w-full bg-white text-gray-900 border-t border-gray-200 py-10 -mb-26">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-8">
        {/* Logo & Description */}
        <div className="flex flex-col gap-4">
          <Link to="/">
            <h2
              className="text-2xl md:text-3xl font-bold text-primary cursor-pointer hover:text-primary/75 transition-colors"
              onClick={scrollToTop}
            >
              Shop-Verse
            </h2>
          </Link>
          <p className="text-gray-700 max-w-sm">
            Discover premium quality clothing and elevate your style with
            Shop-Verse. Elegant designs, perfect for every occasion.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2 ">
          <h3 className="font-semibold text-xl mb-2 text-primary">
            Quick Links
          </h3>
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/products" className="hover:text-primary transition-colors">
            Products
          </Link>
          <Link to="/contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
          <Link to="/about" className="hover:text-primary transition-colors">
            About Us
          </Link>
        </div>

        {/* Follow Us */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-xl mb-2 text-primary">Follow Us</h3>
          <div className="flex flex-col gap-3 text-gray-700">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <FaFacebookF /> Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <FaInstagram /> Instagram
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <FaTwitter /> Twitter
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2 ">
          <h3 className="font-semibold text-xl mb-2 text-primary">
            Contact Us
          </h3>
          <p>Email: support@shop-verse.com</p>
          <p>Phone: +88098927408</p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 border-t border-gray-200 pt-4 text-center text-gray-500 text-sm">
        <p className="text-sm sm:break text-gray-600 dark:text-gray-300">
            All Rights Reserved. ©{new Date().getFullYear()} Shop-Verse.
        </p>
        <p className="mt-2 text-sm -mb-5">
          Developed by <span className="text-primary">Omit</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
