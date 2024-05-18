import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
