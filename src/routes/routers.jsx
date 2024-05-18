import React from "react";
import Login from "../pages/Login/Login";
import AddUser from "../pages/AddUser/AddUser";
import PasswordForgot from "../pages/PasswordForgot/PasswordForgot";
import ProtectedRouters from "./ProtectedRoutes";
import Hometest from "../pages/hometest";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Check from "../pages/Check/Check";
import Register from "../pages/Register/Register";

const Routering = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Login />}></Route>
        <Route path="/teste" element={<Hometest />}></Route>
        <Route path="/gep" element={<Register />}></Route>
        <Route path="/cadastro" element={<AddUser />}></Route>
        <Route path="/esqueciasenha" element={<PasswordForgot />}></Route>
        <Route
          path="/home"
          element={
            <ProtectedRouters>
              <Check />
            </ProtectedRouters>
          }
        ></Route>
      </Routes>
    </Router>
  );
};

export default Routering;
