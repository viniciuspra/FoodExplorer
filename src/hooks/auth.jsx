import { createContext, useContext, useEffect, useState } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@FoodExplorer:user", JSON.stringify(user));
      localStorage.setItem("@FoodExplorer:token", token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ user, token });
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Não foi possivel fazer o login!");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@FoodExplorer:user");
    localStorage.removeItem("@FoodExplorer:token");

    setData({});
  }

  useEffect(() => {
    const user = localStorage.getItem("@FoodExplorer:user");
    const token = localStorage.getItem("@FoodExplorer:token");

    if (user && token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ user: JSON.parse(user), token });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, user: data.user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
