import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";
import ProfileImg from "../../Asset/user.png";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/ContextApi";
const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [email, setEmail] = useState();
  // setEmail(user?.email);
  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_API}/users?email=${user?.email}`, {
  //     method: "GET",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setEmail(data);
  //     });
  // }, [user?.email]);
  // console.log(email);

  // const findRole = () => {
  //   const userRole = email.find((userEmail) => userEmail === user?.email);
  //   console.log(userRole);
  // };
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

            <Link to="/dashboard/add-product">
              <div className="border-t-2 border-b-2 py-3 my-3 shadow-lg text-center rounded-lg">
                <h3 className="uppercase  font-bold ">Add Product</h3>
              </div>
            </Link>

            <Link to="/dashboard/users">
              <div className="border-t-2 border-b-2 py-3 my-3 shadow-lg text-center rounded-lg">
                <h3 className="uppercase  font-bold ">All Users</h3>
              </div>
            </Link>
            <Link to="/dashboard">
              <div className="border-t-2 border-b-2 py-3 my-3 shadow-lg text-center rounded-lg">
                <h3 className="uppercase  font-bold ">All None</h3>
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
