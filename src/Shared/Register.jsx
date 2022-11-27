import { React, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import { AuthContext } from "../Context/ContextApi";
import toast from "react-hot-toast";

const Register = () => {
  const { googleLogin, register, updateProfileAndImage } =
    useContext(AuthContext);
  const [userDetails, setUserDetails] = useState("");

  fetch(`${process.env.REACT_APP_API}/users`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userDetails),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  const handleGoogleLogin = () => {
    googleLogin()
      .then((userCredential) => {
        const userInfo = {
          email: userCredential?.user?.email,
          uid: userCredential?.user?.uid,
          role: "User",
          Username: userCredential?.displayName?.email,
          image: userCredential?.photoURL?.email,
        };
        setUserDetails(userInfo);
        console.log(userCredential);
        toast.success("Successfully Logged");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const Username = form.Username.value;
    const email = form.email.value;
    const password = form.password.value;
    const option = form.option.value;

    const image = e.target.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_API}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          register(email, password)
            .then((userCredential) => {
              toast.success("Successfully Logged");
              form.reset("");
              const userInfo = {
                email: userCredential?.user?.email,
                uid: userCredential?.user?.uid,
                role: option,
                username: Username,
                image: data.data.url,
              };
              setUserDetails(userInfo);
              updateProfileAndImage(Username, data.data.url);
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage);
            });
        }
      });

    // console.log(Username, image, email, password, option);
  };

  return (
    <div className="my-20">
      <section className="my-auto text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto  sm:w-full md:w-full lg:w-3/5 shadow-2xl rounded-xl">
          <div className="flex flex-col text-center mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Register
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              If you haven't an account, Please Register.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <form
                onSubmit={handleRegister}
                className="p-2 w-full border-b-2 border-black"
              >
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
                  <div className="my-2">
                    <label
                      htmlFor="Username"
                      className="leading-7 text-sm text-gray-600 font-semibold"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      id="Username"
                      name="Username"
                      required
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="my-2">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600 font-semibold"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="my-2">
                  <label
                    htmlFor="password"
                    className="leading-7 text-sm text-gray-600 font-semibold"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="my-2">
                  <label
                    htmlFor="test"
                    className="leading-7 text-sm text-gray-600 font-semibold"
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

                <div className="my-2">
                  <div>
                    <label
                      htmlFor="ProductImage"
                      className="leading-7 text-sm text-gray-600 font-semibold"
                    >
                      Profile Image
                    </label>
                    <br />
                    <input
                      type="file"
                      id="image"
                      name="image"
                      accept="image/*"
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
                <div className="pt-2 text-center flex mb-5">
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
