import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "./pages/Login/Login";
import PasswordForgot from "./pages/PasswordForgot/PasswordForgot";
import AddUser from "./pages/AddUser";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Check from "./pages/Check/Check";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/password",
    element: <PasswordForgot />,
  },
  {
    path: "/check",
    element: <Check />,
  },
  {
    path: "/Add",
    element: <AddUser />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider  router={router} />
);
