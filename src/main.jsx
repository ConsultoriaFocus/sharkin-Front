import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "./pages/Login/Login";
import PasswordForgot from "./pages/PasswordForgot/PasswordForgot";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Check from "./pages/Check/Check";
import History from "./pages/History/History";


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
    path: "/history",
    element: <History />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider  router={router} />
);
