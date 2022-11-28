import React from "react";
import DashboardImg from "../../Asset/Design stats-pana.svg";
const BasicDashboard = () => {
  return (
    <div>
      <div className="h-screen">
        <div className="flex items-center justify-center py-12">
          <div className=" rounded-md flex items-center justify-center mx-4 md:w-2/3 ">
            <div className="flex flex-col items-center py-16 ">
              <img className="px-4 hidden md:block" src={DashboardImg} alt="" />
              <img
                className="md:hidden"
                src="https://i.ibb.co/RgYQvV7/undraw-page-not-found-su7k-1.png"
                alt=""
              />
              <h1 className="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-primary uppercase">
                Welcome To Dashboard
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicDashboard;
