import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const RecommendItem = ({ item }) => {
  //console.log(item);
  const { name, recipe, image, price } = item;
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const handleAddToCart = (food) => {
    if (user && user.email) {
      // send cart data to database
      console.log(food);
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login  add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  // console.log(user);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4 py-2 rounded-md text-xl">
          $ {price}
        </p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-outline border-0 border-b-4 text-orange-500"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendItem;
