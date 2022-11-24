import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import { AuthContext } from "../Context/ContextApi";

const Register = () => {
  const { googleLogin, register } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    googleLogin()
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    register(email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };
  return (
    <div>
      <section class="my-auto text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center mb-12 ">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Register
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              If you haven't an account, Please Register.
            </p>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <form
                onSubmit={handleRegister}
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

                <div className="my-2">
                  <label
                    for="test"
                    class="leading-7 text-sm text-gray-600 font-semibold"
                  >
                    Choose your type
                  </label>
                  <br />
                  <select
                    name="option"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  >
                    <option selected>User</option>
                    <option>Seller</option>
                  </select>
                </div>
                <div class="pt-2 text-center flex mb-5">
                  <button className="block w-full rounded bg-secondary px-12 py-3 text-sm font-medium text-white shadow hover:bg-base-100 hover:text-secondary focus:outline-none focus:ring active:bg-secondary sm:w-auto">
                    Register
                  </button>
                  <p className="my-auto ml-5 text-base font-semibold">
                    Already have an account?{" "}
                    <Link to="/login" className="text-secondary">
                      Login
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

export default Register;
