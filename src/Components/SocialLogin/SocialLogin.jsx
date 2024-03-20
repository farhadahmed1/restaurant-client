import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const handleGoogleSignIn = () => {
    googleSignIn().then((res) => {
      console.log(res.user);

      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
        if (res.data.emailVerified === true) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Google Sign Success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    });
  };

  return (
    <div>
      <div className="">
        <button
          onClick={handleGoogleSignIn}
          className=" rounded-b-lg btn btn-success btn-block text-white text-xl rounded-full"
        >
          <FaGoogle></FaGoogle>
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
