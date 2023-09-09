import { createContext, useContext } from "react";
import useLocalStorage from "./useLocalStorage";

const CartContext = createContext();

function CartProvider({ children }) {
  const { value: cartItems, updateLocalStorage } = useLocalStorage(
    "@FoodExplorer:cart-items"
  );

  const addToCart = (id, quantity) => {
    const existingCartItem = cartItems ? cartItems.findIndex((item) => item.id === id) : -1;
    console.log(existingCartItem, cartItems);
    if (existingCartItem !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingCartItem].quantity += quantity;
      updateLocalStorage(updatedCart);
    } else {
      const updatedCart = [...(cartItems || []), { id, quantity }];
      updateLocalStorage(updatedCart);
    }
  };

  const removeFromCart = (dishId) => {
    const updatedCart = cartItems.filter((item) => item.id !== dishId);
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
