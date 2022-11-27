import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";
import ProfileImg from "../../Asset/user.png";
import { AuthContext } from "../../Context/ContextApi";
const Dashboard = () => {
  const { user } = useContext(AuthContext);

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
              src={user?.photoURL ? user?.photoURL : ProfileImg}
              alt="User Profile"
            />
            <div className="my-1">
              <p className="text-center font-medium">
                {user?.displayName ? user?.displayName : "No Data Found"}
              </p>
              <p className="text-center font-medium">
                <span className="text-secondary">Email : </span> {user?.email}
              </p>
            </div>
            <Link to="/dashboard/my-order">
              <div className="border-t-2 border-b-2 py-3 my-3 shadow-lg text-center rounded-lg">
                <h3 className="uppercase  font-bold ">My Order</h3>
              </div>
            </Link>

            {/* //# Seller Information  */}
            <Link to="/dashboard/add-product">
              <div className="border-t-2 border-b-2 py-3 my-3 shadow-lg text-center rounded-lg">
                <h3 className="uppercase  font-bold ">Add Product</h3>
              </div>
            </Link>

            <Link to="/dashboard/my-products">
              <div className="border-t-2 border-b-2 py-3 my-3 shadow-lg text-center rounded-lg">
                <h3 className="uppercase  font-bold ">My Products</h3>
              </div>
            </Link>
            <Link to="/dashboard/my-buyers">
              <div className="border-t-2 border-b-2 py-3 my-3 shadow-lg text-center rounded-lg">
                <h3 className="uppercase  font-bold ">My Buyers</h3>
              </div>
            </Link>

            {/* //# Admin See All Users & All Buyers  */}
            <Link to="/dashboard/sellers">
              <div className="border-t-2 border-b-2 py-3 my-3 shadow-lg text-center rounded-lg">
                <h3 className="uppercase  font-bold ">Sellers</h3>
              </div>
            </Link>
            <Link to="/dashboard/buyers">
              <div className="border-t-2 border-b-2 py-3 my-3 shadow-lg text-center rounded-lg">
                <h3 className="uppercase  font-bold ">Buyers</h3>
              </div>
            </Link>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
