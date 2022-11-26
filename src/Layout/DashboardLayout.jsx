import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import userProfile from "../Asset/user.png";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile">
        <input id="bookmart-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="bookmart-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-gray-100 text-base-conten">
            <img
              className="rounded-full w-2/5 mx-auto"
              src={userProfile}
              alt="User Profile"
            />
            <div className="my-1">
              <p className="text-center font-medium">Mehedy Hasan Ador</p>
              <p className="text-center font-medium">
                <span className="text-secondary">Role : </span> User
              </p>
            </div>
            <Link to="/dashboard">
              <div className="border-t-2 border-b-2 py-3 my-3 shadow-lg text-center rounded-lg">
                <h3 className="uppercase  font-bold ">Post Product</h3>
              </div>
            </Link>
            <Link to="/dashboard/users">
              <div className="border-t-2 border-b-2 py-3 my-3 shadow-lg text-center rounded-lg">
                <h3 className="uppercase  font-bold ">All Users</h3>
              </div>
            </Link>
            <Link to="/dashboard">
              <div className="border-t-2 border-b-2 py-3 my-3 shadow-lg text-center rounded-lg">
                <h3 className="uppercase  font-bold ">All Users</h3>
              </div>
            </Link>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
