import { createContext, useContext } from "react";
import useLocalStorage from "./useLocalStorage";

const CartContext = createContext();

function CartProvider({ children }) {
  const { value: cartItems, updateLocalStorage } = useLocalStorage(
    "@FoodExplorer:cart-items"
  );

  const addToCart = (id, quantity) => {
    const updatedCart = [...cartItems, { id, quantity }];
    updateLocalStorage(updatedCart);
  };

  const removeFromCart = (dishId) => {
    const updatedCart = cartItems.filter((id) => id !== dishId);
    updateLocalStorage(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

function useCartContext() {
  const cartContext = useContext(CartContext);

  return cartContext;
}

export { CartProvider, useCartContext };
