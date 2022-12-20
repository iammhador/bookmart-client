import Aos from "aos";
import React, { useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import Products from "../Products/products";

const MatchCategory = () => {
  const data = useLoaderData();
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <div data-aos="fade-down" className="my-20 w-5/6 mx-auto">
      <div>
        <h2 className="text-5xl font-extrabold text-secondary text-center mb-10 uppercase">
          All Product
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
        {data.map((cat) => (
          <Products cat={cat} key={cat._id} />
        ))}
      </div>
    </div>
  );
};

export default MatchCategory;
