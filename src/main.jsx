import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

import Home from "./pages/Home";

import Header from "./components/Header";
import HeaderDesktop from "./components/HeaderDesktop";

import { useMediaQuery } from "react-responsive";
import Footer from "./components/Footer";


export default function App() {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        {isMobile ? <Header /> : <HeaderDesktop />}
      <Home />
      <Footer />
    </ThemeProvider>
  </React.StrictMode>
  )
}


ReactDOM.createRoot(document.getElementById("root")).render(<App />);
