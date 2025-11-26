import { useState } from "react";

export const useCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exists = cart.some((item) => item.id === product.id);

    if (exists) {
      console.log("Product already in cart");
    } else {
      setCart((prevCart) => [...prevCart, product]);
    }
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return {
    cart,
    addToCart,
    removeFromCart,
  };
};
