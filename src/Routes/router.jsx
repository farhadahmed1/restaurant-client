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
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import ManageBooking from "../Pages/Dashboard/ManageBooking/ManageBooking";
import AdminRoute from "./AdminRoute";
import Analysis from "../Pages/Dashboard/Analysis/Analysis";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";

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
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      // normal routes for users
      {
        path: "cart",
        element: <Cart />,
      },

      // admin routes for only for admin
      {
        path: "users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },

      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },
      {
        path: "addItems",
        element: (
          <AdminRoute>
            <AddItems />
          </AdminRoute>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
        ),
      },
      {
        path: "manageBooking",
        element: (
          <AdminRoute>
            <ManageBooking />
          </AdminRoute>
        ),
      },
      {
        path: "analysis",
        element: (
          <AdminRoute>
            <Analysis />
          </AdminRoute>
        ),
      },

      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "updateItem/:id",
        element: (
          <AdminRoute>
            <UpdateItem />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/menu/${params.id}`),
      },
    ],
  },
]);

export default router;
