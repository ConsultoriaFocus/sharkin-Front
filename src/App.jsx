import React from "react";
import LoginRoutes from "./routes/LoginRoutes.jsx";
import GlobalStyle from "./styles/global.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<LoginRoutes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
