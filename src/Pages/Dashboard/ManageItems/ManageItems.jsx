import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
  // const { refetch } = useQuery();
  const handleDeleteMenu = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axiosSecure.delete(`/menu/${item._id}`).then((res) => {
          console.log(res.data);
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
      <SectionTitle
        heading="Manage all Items"
        subheading="Hurry Up"
      ></SectionTitle>
      <div className="flex justify-evenly my-4 ">
        <h2 className="text-3xl"> Total Items : {menu.length}</h2>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-green-400 text-white ">
                <th>#</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => {
                console.log();
                return (
                  <tr key={item._id}>
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
                    <td>
                      <Link to={`/dashboard/updateItem/${item._id}`}>
                        <button className="btn btn-ghost btn-lg bg-orange-400">
                          <FaEdit className="text-white"></FaEdit>
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-ghost btn-lg bg-gray-200"
                        onClick={() => handleDeleteMenu(item)}
                      >
                        <FaTrashAlt className="text-red-500"></FaTrashAlt>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
