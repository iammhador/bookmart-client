import React from "react";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Sell Your Books{" "}
              <strong className="font-extrabold text-secondary sm:block">
                Hassle Free
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl sm:leading-relaxed">
              Sharing is caring! If you have lots of books, Don't have a place
              to take them, Sell your books through our website and buy new
              ones. We are the number one second-hand book-selling website.
            </p>

            <div className="mt-8 flex  justify-center gap-4">
              <Link
                to="/login"
                className="block w-full rounded bg-secondary px-12 py-3 text-sm font-medium text-white shadow hover:bg-base-100 hover:text-secondary focus:outline-none focus:ring active:bg-secondary sm:w-auto"
              >
                Login
              </Link>

              <Link
                to="/contact"
                className="block w-full rounded px-12 py-3 text-sm font-medium  text-secondary bg-base-100 shadow hover:bg-secondary hover:text-white focus:outline-none focus:ring active:bg-secondary sm:w-auto"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
