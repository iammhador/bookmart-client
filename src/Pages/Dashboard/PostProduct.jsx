import React from "react";

const PostProduct = () => {
  return (
    <div className="my-20 w-5/6 mx-auto">
      <h2 className="text-4xl font-bold text-secondary mb-10">
        Add Your Product:
      </h2>
      <div>
        <section className=" text-gray-600 body-font relative shadow-xl rounded-2xl p-10">
          <div className="">
            <div className="">
              <div className="flex flex-wrap -m-2">
                <form className="p-2 w-full">
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
                  <div className="pt-2 text-center flex mb-5">
                    <button className="block w-full rounded bg-secondary px-12 py-3 text-sm font-medium text-white shadow hover:bg-base-100 hover:text-secondary focus:outline-none focus:ring active:bg-secondary sm:w-auto">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PostProduct;
