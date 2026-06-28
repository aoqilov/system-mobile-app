import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "./style/chakra-system";
import { ThemeProvider } from "./context/ThemeContext";
import "./style/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = document.getElementById("root")!;
createRoot(root).render(
  <StrictMode>
        <BrowserRouter>
    
    <ThemeProvider>
      <ChakraProvider value={system}>
        <App />
      </ChakraProvider>
    </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
