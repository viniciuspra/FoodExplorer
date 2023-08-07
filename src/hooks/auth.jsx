import { createContext, useContext } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      console.log(response.data.user);
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message);
      }else {
        alert("Não foi possivel fazer o login!")
      }
    }
  }

  return (
    <AuthContext.Provider value={{ signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
