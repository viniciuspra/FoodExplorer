import React from "react";
import ReactDOM from "react-dom/client";

import theme from "./styles/theme";
import GlobalStyles from "./styles/global";
import { ThemeProvider } from "styled-components";

import { AuthProvider } from "./hooks/auth";
import { FavoritesProvider } from "./hooks/favorites";

import Routes from "./routes";

export default function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AuthProvider>
          <FavoritesProvider>
            <Routes />
          </FavoritesProvider>
        </AuthProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
