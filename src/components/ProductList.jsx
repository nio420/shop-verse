import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const ProductList = ({ limit, title }) => {
  const { products, toggleCart, isInCart } = useContext(ShopContext);

  // Use the limit if passed, else show all products
  const displayedProducts = limit ? products.slice(0, limit) : products;

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Title */}
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
            {title.split(" ").map((word, id) => (
              <span
                key={id}
                className={
                  id === title.split(" ").length - 1 ? "text-primary" : ""
                }
              >
                {word}{" "}
              </span>
            ))}
          </h2>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {displayedProducts.map((product) => {
            const { id, title, price, image } = product;

            return (
              <div
                key={id}
                className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-gray-200 p-3 md:p-4 cursor-pointer flex flex-col"
              >
                <Link to={`/product/${id}`} className="grow flex flex-col">
                  {/* Product Image */}
                  <div className="w-full h-44 md:h-56 overflow-hidden rounded-lg">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-base md:text-lg font-semibold text-gray-900 line-clamp-2">
                    {title}
                  </h3>

                  {/* Price */}
                  <p className="text-primary font-bold mt-1 text-lg mb-4">
                    ${price}
                  </p>
                </Link>

                {/* Button */}
                <button
                  className="mt-auto w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary/85 transition-all duration-300 cursor-pointer"
                  onClick={() => toggleCart(product, id)}
                >
                  {isInCart(id) ? "Remove From Cart" : "Add To Cart"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
