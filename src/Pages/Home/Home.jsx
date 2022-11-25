import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import Delivery from "./Delivery";
const Home = () => {
  return (
    <div className="w-5/6 mx-auto z-0">
      <Banner />
      <Category />
      <Delivery />
    </div>
  );
};

export default Home;
