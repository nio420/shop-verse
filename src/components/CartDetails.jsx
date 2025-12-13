import { Trash2 } from "lucide-react";
import { useContext } from "react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { ShopContext } from "../context/ShopContext";

const CartDetails = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(ShopContext);
  const { id, title, price, amount, image } = item;

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between p-4 border-b hover:bg-gray-50 transition-all duration-200">
      {/* Product Info */}
      <div className="flex items-center gap-4 flex-1">
        <img
          src={image}
          alt={title}
          className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-xl shadow-sm"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <Trash2
            className="cursor-pointer text-primary mt-1 hover:text-primary/85 transition-colors"
            onClick={() => removeFromCart(id)}
          />
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2 mt-4 md:mt-0 md:w-32 justify-center">
        <button
          onClick={() => decreaseQuantity(id)}
          className="p-1 border rounded-lg hover:bg-gray-100 transition-all duration-200 cursor-pointer"
        >
          <IoMdRemove />
        </button>
        <span className="px-3 font-medium">{amount}</span>
        <button
          onClick={() => increaseQuantity(id)}
          className="p-1 border rounded-lg hover:bg-gray-100 transition-all duration-200 cursor-pointer"
        >
          <IoMdAdd />
        </button>
      </div>

      {/* Single Price */}
      <div className="mt-4 md:mt-0 md:w-24 text-center font-medium text-gray-900">
        {price}
      </div>

      {/* Total Price */}
      <div className="mt-4 md:mt-0 md:w-24 text-center font-semibold text-primary">
        ${(parseFloat(price) * amount).toFixed(2)}
      </div>
    </div>
  );
};

export default CartDetails;
