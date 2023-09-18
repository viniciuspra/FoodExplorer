import { useState } from "react";

export function useLocalStorage(item) {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(item)) ?? ""
  );

  const updateLocalStorage = (newValue) => {
    setValue(newValue);
    localStorage.setItem(item, JSON.stringify(newValue));
  };

  return {
    value,
    updateLocalStorage,
  };
}
