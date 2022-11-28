import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import Delivery from "./Delivery";
import PublishedPost from "./PublishedPost";
const Home = () => {
  return (
    <div className="w-5/6 mx-auto z-0">
      <Banner />
      <Category />
      <PublishedPost />
      <Delivery />
    </div>
  );
};

export default Home;
