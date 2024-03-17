import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Dashboard/Dashboard";

import Home from "./../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Shop/Order/Order";

import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./privateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,

    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      // {
      //   path: "/order",
      //   element: <Order />,
      // },
      {
        path: "/order/:category",
        element: <Order />,
      },

      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
