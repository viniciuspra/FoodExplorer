import { createContext, useContext } from "react";
import useLocalStorage from "./useLocalStorage";

const FavoritesContext = createContext();

function FavoritesProvider({ children }) {
  const { value: favorites, updateLocalStorage } = useLocalStorage("@FoodEplorer:favorites")

  const updateFavorite = (dishId) => {
    if (favorites.includes(dishId)) {
      const updatedFavorites = favorites.filter((id) => id !== dishId);
      updateLocalStorage(updatedFavorites);
    } else {
      const updatedFavorites = [...favorites, dishId];
      updateLocalStorage(updatedFavorites);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, updateFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

function useFavoritesContext() {
  const favoriteContext = useContext(FavoritesContext);

  return favoriteContext;
}

export { useFavoritesContext, FavoritesProvider };
