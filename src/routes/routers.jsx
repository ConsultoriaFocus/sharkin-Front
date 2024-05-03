import React from "react";
import Login from "../pages/Login/Login";
import AddUser from "../pages/AddUser/AddUser";
import PasswordForgot from "../pages/PasswordForgot/PasswordForgot";
import ProtectedRouters from "./ProtectedRoutes";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Routering = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Login />}></Route>
        <Route path="/cadastro" element={<AddUser />}></Route>
        <Route path="/esqueciasenha" element={<PasswordForgot />}></Route>
        <Route
          path="/home"
          element={
            <ProtectedRouters>
              <h1>Home</h1>
            </ProtectedRouters>
          }
        ></Route>
      </Routes>
    </Router>
  );
};

export default Routering;
