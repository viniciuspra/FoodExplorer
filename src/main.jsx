import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

import { AuthProvider } from "./hooks/auth";

import Routes from "./routes";

export default function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
