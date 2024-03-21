import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:4000/",
});
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOutUser } = useAuth();
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      // console.log(" axios secure request stopped", token);
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }

      // Do something before request is sent
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      //  console.log("response status", status);
      if (status === 401 || status === 403) {
        Swal.fire({
          icon: "error",
          title: "Oops...you are not allowed ",
          text: "Something went wrong!",
        });
        navigate("/login");
        await logOutUser();
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
