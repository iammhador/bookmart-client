import React, { useContext } from "react";
import { BsGoogle } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/ContextApi";

const Login = () => {
  const { googleLogin, login } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  //# Google Login :
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        navigate(from, { replace: true });
        toast.success("Successfully Logged");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  //# Login :
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((userCredential) => {
        navigate(from, { replace: true });
        toast.success("Successfully Logged");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };
  return (
    <div className="my-20">
      <section class="my-auto text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto sm:w-full md:w-full lg:w-3/5 shadow-2xl rounded-xl">
          <div class="flex flex-col text-center mb-12 ">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Login
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              If you haven an account, Please login.
            </p>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <form
                onSubmit={handleLogin}
                class="p-2 w-full border-b-2 border-black"
              >
                <div className="my-2">
                  <label
                    for="email"
                    class="leading-7 text-sm text-gray-600 font-semibold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="my-2">
                  <label
                    for="password"
                    class="leading-7 text-sm text-gray-600 font-semibold"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div class="pt-2 text-center flex mb-5">
                  <button className="block w-full rounded bg-secondary px-12 py-3 text-sm font-medium text-white shadow hover:bg-base-100 hover:text-secondary focus:outline-none focus:ring active:bg-secondary sm:w-auto">
                    Login
                  </button>
                  <p className="my-auto ml-5 text-base font-semibold">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-secondary">
                      Register
                    </Link>
                  </p>
                </div>
              </form>

              <button
                onClick={handleGoogleLogin}
                className="text-secondary mx-auto p-4 text-center shadow-lg rounded-full mt-5 hover:text-white hover:bg-secondary"
              >
                <BsGoogle />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
