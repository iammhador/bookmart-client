import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";
import ProfileImg from "../../Asset/user.png";
import { AuthContext } from "../../Context/ContextApi";
import { getUserInfo } from "../../Api/Api";
import { useQuery } from "@tanstack/react-query";
import { async } from "@firebase/util";
import axios from "axios";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const [userDetailsInfo, setUserDetailsInfo] = useState();
  // const [userInfo, setUserInfo] = useState([]);
  // console.log(userInfo);
  const [count, setCount] = useState(0);
  // const { data: userInfo = [] } = useQuery({
  //   queryKey: ["user?.email"],
  //   queryFn: async () => {
  //     const res = await fetch(
  //       `${process.env.REACT_APP_API}/users?email=${user?.email}`
  //     );
  //     const data = await res.json();
  //     return data;
  //   },
  // });

  // console.log(userInfo);
  // setLoading(true);

  // const { data: userInfo } = useQuery({
  //   queryKey: ["user?.email"],
  //   queryFn: async () => {
  //     const res = await fetch(
  //       `${process.env.REACT_APP_API}/users?email=${user?.email}`
  //     );
  //     const data = await res.json();
  //     return data;
  //   },
  // });
  // console.log(userInfo[0].role);
  // setLoading(true);
  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_API}/users?email=${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUserInfo(data);
  //       setLoading(false);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  // useEffect(() => {
  //   setLoading(!loading);
  //   fetch(`${process.env.REACT_APP_API}/users?email=${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUserDetailsInfo(data);
  //       setLoading(!loading);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [user?.email]);
  // useEffect(() => {
  //   setLoading(!loading);
  //   setCount((count) => count + 1);
  //   fetch(`${process.env.REACT_APP_API}/users?email=${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // setUserDetailsInfo(data);
  //       // setLoading(false);
  //       console.log(data);
  //     });
  // }, []);
  // setLoading(!loading);

  // console.log(userDetailsInfo);

  return (
    <div>
      {/* {userDetailsInfo.map((userInfos) => setUserInfo(userInfos))} */}
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
            {/* //# User Information */}

            {/* {userInfo.role === "User" && (
              <Link to="/dashboard/my-order">
                <div className="border-t-2 border-b-2 py-3 my-3 shadow-lg text-center rounded-lg">
                  <h3 className="uppercase  font-bold ">My Order</h3>
                </div>
              </Link>
            )} */}
            {/* //# Seller Information  */}
            {/* {userInfo[0].role === "Seller" && (
              <>
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
              </>
            )} */}

            {/* //# Admin See All Users & All Buyers  */}
            {/* {userInfo[0].role === "admin" && (
              <>
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
              </>
            )} */}

            {/* //# User Information */}

            <Link to="/dashboard/my-order">
              <div className="border-t-2 border-b-2 py-3 my-3 shadow-lg text-center rounded-lg">
                <h3 className="uppercase  font-bold ">My Order</h3>
              </div>
            </Link>

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
