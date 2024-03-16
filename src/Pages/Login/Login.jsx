import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProviders";
import { Link } from "react-router-dom";

const Login = () => {
  //const captchaRef = useRef(null);

  const [disabled, setDisabled] = useState(true);
  const { singInUser } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email);
    console.log(password);
    singInUser(email, password).then((res) => {
      console.log(res);
    });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;

    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  //console.log(captchaData);
  return (
    <div>
      <Helmet>
        <title>Boss Restaurant || Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  //ref={captchaRef}
                  name="captcha"
                  placeholder="type the text to display"
                  className="input input-bordered"
                  onBlur={handleValidateCaptcha}
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  disabled={disabled}
                  className="btn btn-success text-white text-xl"
                >
                  Login
                </button>
                <Link to="/signup"> SignUp </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
