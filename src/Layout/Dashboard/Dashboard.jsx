import { NavLink, Outlet } from "react-router-dom";
import {
  FaAd,
  FaCalendar,
  FaChartLine,
  FaHome,
  FaList,
  FaPaypal,
  FaPhone,
  FaSearch,
  FaShoppingBag,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  // TODO: get Admin value from the data base

  const [isAdmin] = useAdmin();
  // const isAdmin = true;
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="uppercase menu p-4">
          {isAdmin ? (
            <>
              <li className="mb-2">
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome>Admin Home
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/dashboard/addItems">
                  <FaUtensils></FaUtensils> Add Items
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/dashboard/manageItems">
                  <FaList></FaList> Manage Items
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/dashboard/manageBooking">
                  <FaAd></FaAd> Manage Booking
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/dashboard/users">
                  <FaUsers></FaUsers> All Users
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/dashboard/chart">
                  <FaChartLine></FaChartLine> All Analysis
                </NavLink>
              </li>
              <div className="divider divider-neutral  "></div>
            </>
          ) : (
            <>
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
            </>
          )}
          {/* shared nav link */}

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
          <li className="mb-2">
            <NavLink to="/">
              <FaPhone></FaPhone> Contact
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
