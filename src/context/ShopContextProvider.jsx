import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { productsData } from "../utils/data";
import { ShopContext } from "./ShopContext.jsx";

const ShopContextProvider = ({ children }) => {
  const [products] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  // ------------------ TOTAL PRICE ------------------
  useEffect(() => {
    const totalPrice = cart.reduce((acc, item) => {
      const priceAsNumber = parseFloat(item.price);
      if (isNaN(priceAsNumber)) return acc;
      return acc + priceAsNumber * item.amount;
    }, 0);
    
 // eslint-disable-next-line react-hooks/exhaustive-deps
    setTotal(totalPrice);
  }, [cart]);

  // ------------------ TOTAL QUANTITY ------------------
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((acc, item) => acc + item.amount, 0);
      setQuantity(amount);
    }
  }, [cart]);

  // ------------------ ADD TO CART ------------------
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = cart.map((item) =>
        item.id === id ? { ...item, amount: cartItem.amount + 1 } : item
      );
      setCart(newCart);
      toast.success("Added one more to cart");
    } else {
      setCart([...cart, newItem]);
      toast.success("Item added to cart");
    }
  };

  // ------------------ CLEAR CART ------------------
  const ClearCart = () => {
    setCart([]);
    toast.success("Cart Empty");
  };

  // ------------------ REMOVE FROM CART ------------------
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    toast.success("Item removed from cart");
  };

  // ------------------ INCREASE QTY ------------------
  const increaseQuantity = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  // ------------------ DECREASE QTY ------------------
  const decreaseQuantity = (id) => {
    const cartItem = cart.find((item) => item.id === id);

    if (!cartItem) return;

    if (cartItem.amount <= 1) {
      removeFromCart(id);
      return;
    }

    const newCart = cart.map((item) =>
      item.id === id ? { ...item, amount: cartItem.amount - 1 } : item
    );

    setCart(newCart);
  };

  // ---------------------------------------------------
  // ⭐ NEW FEATURE: CHECK IF PRODUCT IS IN CART
  // ---------------------------------------------------
  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  // ---------------------------------------------------
  // ⭐ NEW FEATURE: TOGGLE ADD/REMOVE
  // ---------------------------------------------------
  const toggleCart = (product, id) => {
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      // remove it
      setCart(cart.filter((item) => item.id !== id));
      toast.error("Removed from cart");
    } else {
      // add it
      setCart([...cart, { ...product, amount: 1 }]);
      toast.success("Added to cart");
    }
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        quantity,
        ClearCart,
        total,
        // NEW FUNCTIONS
        isInCart,
        toggleCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
