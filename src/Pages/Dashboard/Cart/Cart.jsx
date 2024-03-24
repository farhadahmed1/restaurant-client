import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const roundPrice = Math.round(totalPrice).toFixed(2);
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
              showConfirmButton: false,
              timer: 1000,
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="flex justify-evenly mb-4">
        <h2 className="text-3xl"> Total Order {cart.length} </h2>
        <h2 className="text-3xl"> Total Price ${roundPrice}</h2>

        {cart.length ? (
          <>
            <Link to="/dashboard/payment">
              <button className="btn btn-primary">Pay</button>
            </Link>
          </>
        ) : (
          <>
            {" "}
            <Link to="/dashboard/payment">
              <button disabled className="btn btn-primary">
                Pay
              </button>
            </Link>{" "}
          </>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-green-400 text-white ">
              <th>#</th>
              <th>Item Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => {
              return (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={item.image}
                          alt={item.image}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td> ${item.price}</td>
                  <th>
                    <button
                      className="btn btn-ghost btn-lg"
                      onClick={() => handleDelete(item._id)}
                    >
                      <FaTrashAlt className="text-red-500"></FaTrashAlt>
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
