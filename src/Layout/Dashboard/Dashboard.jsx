import { NavLink, Outlet } from "react-router-dom";
import {
  FaAd,
  FaCalendar,
  FaHome,
  FaList,
  FaPaypal,
  FaSearch,
  FaShoppingBag,
  FaShoppingCart,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="uppercase menu p-4">
          <li className="mb-2">
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome>User Home
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink to="/dashboard/reservation">
              <FaCalendar></FaCalendar>Reservation
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink to="/dashboard/payment">
              <FaPaypal></FaPaypal> Payment History
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart> My cart
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink to="/dashboard/review">
              <FaAd></FaAd> Add Review
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink to="/dashboard/booking">
              <FaList></FaList> My Booking
            </NavLink>
          </li>
          <div className="divider divider-neutral  "></div>
          <li className="mb-2">
            <NavLink to="/">
              <FaHome></FaHome>Home
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink to="/order/salad">
              <FaSearch></FaSearch>Menu
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink to="/">
              <FaShoppingBag></FaShoppingBag> Shop
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
