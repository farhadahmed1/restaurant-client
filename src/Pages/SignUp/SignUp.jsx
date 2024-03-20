import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
const SignUp = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUserProfile, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // console.log(data);
    createUser(data.email, data.password).then((result) => {
      const newUser = result.user;
      console.log(newUser);
      updateUserProfile(data.name, data.photoURl)
        .then(() => {
          console.log("user profile updated");

          // create user entry in database

          const userInfo = {
            name: data.name,
            email: data.email,
            password: data.password,
            photoURl: data.photoURl,
          };

          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log(res.data.insertedId);
              reset();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Successfully Create Your Account",
                showConfirmButton: false,
                timer: 1500,
              });
              logOutUser().then(() => {
                navigate("/login");
              });
            }
          });
        })
        .catch((err) => console.log(err));
    });
  };
  return (
    <div>
      <Helmet>
        <title>Boss Restaurant || SignUp</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 md:w-1/2 w-full  rounded-t-2xl max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  {...register("name", { required: true })}
                  placeholder=" Enter your name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">photo URL</span>
                </label>
                <input
                  name="photoURl"
                  type="photo"
                  {...register("photoURl", { required: true })}
                  placeholder=" Enter your photoURl"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  {...register("email", { required: true })}
                  placeholder=" Enter your email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  // defaultValue="password"

                  name="password"
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
                  })}
                  placeholder=" Enter your password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">This field is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    password must be less then 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Minimum Six characters, at least one letter, one number and
                    one special character:
                  </p>
                )}
              </div>

              <div className="form-control mt-6 ">
                <input
                  type="submit"
                  className="btn btn-success text-white text-xl"
                  value=" Sign In"
                />
                <p className=" text-center m-2">
                  Already have an account?{" "}
                  <Link to="/login" className="text-green-500">
                    Login
                  </Link>
                </p>
              </div>
            </form>
            <div className="text-center ">
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
