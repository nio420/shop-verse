import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext.jsx";
import { productsData } from "../utils/data";

const ProductDetails = () => {
  const { addToCart } = useContext(ShopContext);
  const { id } = useParams();
  const product = productsData.find((item) => item.id === parseInt(id));

  return (
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
            className="bg-primary text-white font-semibold w-fit px-8 py-3 rounded-lg hover:bg-orange-600 transition-all duration-300 cursor-pointer"
            onClick={() => addToCart(product, product.id)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

// import { useParams } from "react-router-dom";
// import { useState } from "react";
// import { productsData } from "../utils/data";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const product = productsData.find((item) => item.id === parseInt(id));

//   const [size, setSize] = useState("");
//   const [qty, setQty] = useState(1);

//   const handleAddToCart = () => {
//     const itemToCart = {
//       id: product.id,
//       title: product.title,
//       price: product.price,
//       image: product.image,
//       size,
//       qty,
//     };

//     console.log("Item Ready For Cart: ", itemToCart);
//     alert("Added to Cart (Cart Logic Coming Soon!)");
//   };

//   return (
//     <section className="w-full bg-gray-50 py-20">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 px-6">

//         {/* LEFT IMAGE */}
//         <div className="flex-1">
//           <img
//             src={product.image}
//             alt={product.title}
//             className="w-full rounded-xl shadow-md object-cover"
//           />
//         </div>

//         {/* RIGHT DETAILS */}
//         <div className="flex-1 flex flex-col gap-6 justify-center">

//           <h1 className="text-4xl font-bold text-gray-900">
//             {product.title}
//           </h1>

//           <p className="text-3xl font-semibold text-primary">
//             ${product.price}
//           </p>

//           <p className="text-gray-700 text-lg leading-relaxed">
//             {product.description}
//           </p>

//           {/* Size Selector */}
//           <div className="flex flex-col gap-3">
//             <label className="text-gray-800 font-medium">Select Size</label>

//             <div className="flex gap-3">
//               {["S", "M", "L", "XL"].map((s) => (
//                 <button
//                   key={s}
//                   onClick={() => setSize(s)}
//                   className={`
//                     px-4 py-2 rounded-lg border text-sm font-medium
//                     transition-all duration-300
//                     ${
//                       size === s
//                         ? "bg-primary text-white border-primary"
//                         : "bg-white text-gray-700 hover:border-primary"
//                     }
//                   `}
//                 >
//                   {s}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Quantity Selector */}
//           <div className="flex flex-col gap-2">
//             <label className="text-gray-800 font-medium">Quantity</label>
//             <input
//               type="number"
//               min="1"
//               value={qty}
//               onChange={(e) => setQty(Number(e.target.value))}
//               className="border rounded-lg px-4 py-2 w-24 outline-none focus:ring-2 focus:ring-primary"
//             />
//           </div>

//           {/* Add to Cart Button */}
//           <button
//             onClick={handleAddToCart}
//             className="mt-2 bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all duration-300 w-fit"
//           >
//             Add To Cart
//           </button>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductDetails;
