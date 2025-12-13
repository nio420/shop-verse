import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import CartDetails from "./CartDetails";

const Cart = () => {
  const { cart, total, quantity, ClearCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <section className="w-full py-28 bg-gray-50">
      <button
        onClick={handleClick}
        className="text-primary font-medium hover:text-primary/85 transition-colors mb-4 ml-7 sm:ml-10 md:ml-10 lg:ml-28 cursor-pointer"
      >
        &larr; Go Back
      </button>

      {/* Left: Cart Items */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row gap-10">
        <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>
            <div className="flex items-center gap-4">
              <span className="text-gray-700 font-medium">
                Items: {quantity}
              </span>
              <button
                onClick={ClearCart}
                className="text-white bg-primary hover:bg-primary/85 px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer"
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Header */}
          <div className="hidden md:grid grid-cols-4 gap-4 font-semibold text-gray-600 border-b border-gray-200 pb-2 mb-4">
            <span>Product Description</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Total</span>
          </div>

          {/* Cart Details */}
          <div className="flex flex-col gap-4">
            {cart && cart.length > 0 ? (
              cart.map((item) => <CartDetails key={item.id} item={item} />)
            ) : (
              <p className="text-center mt-3 text-gray-700">
                Your Cart is Empty.{" "}
                <Link
                  to="/products"
                  className="text-primary font-semibold hover:text-primary/85 transition-colors"
                >
                  Add Products
                </Link>
              </p>
            )}
          </div>
        </div>

        {/* Right Cart Summary */}
        <div className="w-full lg:w-80 bg-white p-6 rounded-xl shadow-md h-fit">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            Cart Summary
          </h2>
          <div className="flex justify-between mb-3 text-gray-700 font-medium">
            <span>Items:</span>
            <span>{quantity}</span>
          </div>
          <div className="flex justify-between mb-3 text-gray-700 font-medium">
            <span>Subtotal:</span>
            <span>${isNaN(total) ? 0 : total}</span>
          </div>
          <div className="flex justify-between mb-3 text-gray-700 font-medium">
            <span>Shipping Fee:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between mb-3 text-gray-700 font-medium">
            <span>Promo Code:</span>
            <span>No Code</span>
          </div>
          <div className="flex justify-between mb-6 text-gray-900 font-bold text-lg border-t border-gray-200 pt-3">
            <span>Total Cost:</span>
            <span>${isNaN(total) ? 0 : total}</span>
          </div>
          <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/85 transition-all duration-300 cursor-pointer">
            Check Out
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
