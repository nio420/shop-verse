import { useContext } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import { ShopContext } from "../context/ShopContext.jsx";
import { productsData } from "../utils/data";

const ProductDetails = () => {
  const { addToCart } = useContext(ShopContext);
  const { id } = useParams();
  const product = productsData.find((item) => item.id === parseInt(id));

  return (
    <>
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 py-16 mb-10 bg-gray-50">
        <div className="flex flex-col md:flex-row gap-16">
          {/* LEFT IMAGE */}
          <div className="flex-1">
            <div className="w-full bg-white rounded-xl shadow-sm p-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>

          {/* RIGHT DETAILS */}
          <div className="flex-1 flex flex-col gap-6 justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              {product.title}
            </h1>
            <p className="text-2xl font-semibold text-primary">
              ${product.price}
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              {product.description}
            </p>
            <button
              className="bg-primary text-white font-semibold w-fit px-8 py-3 rounded-lg hover:bg-primary/85 transition-all duration-300 cursor-pointer"
              onClick={() => addToCart(product, product.id)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetails;
