import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorImg from "../../Asset/error.svg";
import PrimaryButton from "../../Components/PrimaryButton";
const Error = () => {
  const error = useRouteError();

  return (
    <div className="h-screen">
      <div className="flex items-center justify-center py-12">
        <div className=" rounded-md flex items-center justify-center mx-4 md:w-2/3 ">
          <div className="flex flex-col items-center py-16 ">
            <img className="px-4 hidden md:block" src={errorImg} alt="" />
            <img
              className="md:hidden"
              src="https://i.ibb.co/RgYQvV7/undraw-page-not-found-su7k-1.png"
              alt=""
            />
            <h1 className="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-primary">
              OOPS!
            </h1>
            <p className="px-4 text-base leading-none text-center text-gray-600">
              No signal here! we cannot find the page you are looking for
            </p>
            {error && (
              <>
                <p className="pt-2 pb-10 text-base leading-none text-center text-secondary">
                  {" "}
                  {error?.status} {error?.statusText}
                </p>
              </>
            )}

            <Link to="/">
              <PrimaryButton>GO BACK</PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
