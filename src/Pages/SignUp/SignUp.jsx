import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
          <div className="card shrink-0 md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
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
                  required
                />
                {errors.name && <span>This field is required</span>}
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
                  required
                />
                {errors.email && <span>This field is required</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  // defaultValue="password"

                  name="password"
                  type="password"
                  {...register("password")}
                  placeholder=" Enter your password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-success text-white text-xl"
                  value=" Sign In"
                />
              </div>
              <Link to="/login">Login</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
