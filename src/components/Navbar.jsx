import { useContext, useEffect, useState } from "react";
import { FaRegUser, FaShoppingCart } from "react-icons/fa"; // for cart icon
import { HiMenu, HiX } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const navList = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Contact", path: "/contact" },
  { name: "About", path: "/about" },
];

const NavItems = () => {
  return (
    <ul className="hidden md:flex gap-8 font-medium text-gray-700">
      {navList.map((item, index) => (
        <li key={index}>
          {item.path.startsWith("#") ? (
            <a
              href={item.path}
              className="hover:text-primary transition-all duration-200"
            >
              {item.name}
            </a>
          ) : (
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold pb-1 relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-1/2 after:h-0.5 after:bg-primary"
                  : "hover:text-primary transition-all duration-200"
              }
            >
              {item.name}
            </NavLink>
          )}
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const { quantity } = useContext(ShopContext);

  // Scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full z-50 transition-all duration-300 ${
        isScroll
          ? "fixed top-0 left-0 bg-white text-gray-800 shadow-md"
          : "absolute top-0 left-0 bg-transparent text-white"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between p-4 md:px-8">
        {/* Logo */}
        <div>
          <Link to="/">
            <h2
              className="text-2xl md:text-2xl font-bold text-primary cursor-pointer hover:text-primary/80 transition-all duration-200"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Shop-Verse
            </h2>
          </Link>
        </div>

        {/* Nav Items */}
        <NavItems />

        {/* Cart Button */}
        <div className="flex items-center gap-4">
          <Link to="/cart">
            <button className="relative text-gray-700 hover:text-primary transition-all duration-200">
              <FaShoppingCart className="text-xl md:text-2xl cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-primary/95 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {quantity}
              </span>
            </button>
          </Link>
          {/* user icon */}
          <FaRegUser
            className={`text-xl md:text-2xl cursor-pointer mb-2 md:mr-1.5 ${
              isScroll ? "text-gray-800" : "text-gray-800"
            }`}
          />

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-700 hover:text-primary transition-all duration-200 cursor-pointer"
            >
              {open ? (
                <HiX className="text-3xl" /> // Close icon
              ) : (
                <HiMenu className="text-3xl" /> // Hamburger Icon
              )}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 animate-slideDown">
          <ul className="flex flex-col gap-4 text-gray-700 text-lg">
            {navList.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  onClick={() => setOpen(false)} // close menu after click
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-semibold border-b"
                      : "hover:text-primary transition-all"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
