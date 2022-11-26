import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/ContextApi";
import Dashboard from "../Pages/Dashboard/Dashboard";

const DashboardLayout = () => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/users`)
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data);
      });
  }, []);
  return (
    <div>
      {userInfo.map((userDetails) => (
        <Dashboard userDetails={userDetails} key={userDetails._id} />
      ))}
    </div>
  );
};

export default DashboardLayout;
