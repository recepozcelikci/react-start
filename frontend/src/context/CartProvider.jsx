import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState( localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  const addToCart = (product) => {
    setCartItems((prevCart) => [...prevCart, {
      ...product,
      quantity : product.quantity ? product.quantity  : 1
    }]);
  };
  const removeCart = (itemId) => {
    const filtredCartItems = cartItems.filter((cartItem) => {
      return cartItem.id !==  itemId;
    })
    setCartItems(filtredCartItems);
  }
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
CartProvider.propTypes = {
  children: PropTypes.node,
};
