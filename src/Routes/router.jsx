import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Home from "./../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Shop/Order/Order";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./privateRoute";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";

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
        element: (
          <PrivateRoute>
            <Contact />
          </PrivateRoute>
        ),
      },

      // {
      //   path: "/order/salad",
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
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

export default router;
