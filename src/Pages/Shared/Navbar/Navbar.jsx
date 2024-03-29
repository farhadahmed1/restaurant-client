import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [cart] = useCart();
  // console.log(cart);
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const roundPrice = Math.round(totalPrice).toFixed(2);

  const handelLogOut = () => {
    logOutUser()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "user log out successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navbarContainer = (
    <>
      <li className="ml-2 mb-2">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="ml-2  mb-2">
        <NavLink to="/news">News</NavLink>
      </li>
      <li className="ml-2  mb-2">
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li className="ml-2  mb-2">
        <NavLink to="/menu">Our Menu </NavLink>
      </li>
      <li className="ml-2  mb-2">
        <NavLink to="/order/salad">Oder Food</NavLink>
      </li>
      {/* <li className="ml-2  mb-2">
        <NavLink to="/login">Login</NavLink>
      </li> */}

      {user ? (
        ""
      ) : (
        // <li className="ml-2  mb-2">
        //   <button onClick={handelLogOut}>LogOut</button>
        // </li>
        <li className="ml-2  mb-2">
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar fixed  z-10 max-w-screen-xl bg-opacity-50  bg-base-500 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  text-black  bg-white rounded-box w-52"
            >
              {navbarContainer}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Boos Restaurant</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navbarContainer}</ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Button</a>
        </div> */}

        <div className="navbar-end mr-2 ">
          <div className="dropdown dropdown-end mr-2">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <FaShoppingCart className="h-8 w-8"></FaShoppingCart>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 22 22"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg> */}
                <span className="badge badge-sm indicator-item">
                  {cart.length}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 rounded-md bg-base-100 shadow"
            >
              <div className="card-body text-center">
                <span className="font-bold text-lg text-info">
                  Items {cart.length}
                </span>
                <span className="text-info">Subtotal: ${roundPrice}</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    <Link to="/dashboard/cart"> View cart</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className=" dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 h-10 rounded-full">
                {user?.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="Tailwind CSS Navbar component"
                  />
                ) : (
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-2 z-[1] p-2 shadow text-black  bg-white rounded-md w-52"
            >
              <div></div>
              <div className=" text-center ">
                <div className="flex  justify-center items-center">
                  <img
                    className="w-16 rounded-full -mt-8 "
                    src={user?.photoURL}
                  />
                </div>
                <p className=" mt-2 uppercase">{user?.displayName}</p>
                <small>{user?.email}</small>
              </div>
              <p className="divider divider-neutral mt-0 "></p>
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge bg-green-00 text-white bg-green-500">
                    New
                  </span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                {user ? (
                  <button onClick={handelLogOut}>LogOut</button>
                ) : (
                  <NavLink to="/signup">Sign Up</NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
