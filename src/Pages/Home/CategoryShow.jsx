import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CategoryShow = ({ cate }) => {
  const { _id, categoryName, categoryImage, categoryId } = cate;

  const url = `${process.env.REACT_APP_API}/products?categoryName=${categoryName}`;
  fetch(url).then((res) => res.json());
  // .then((data) => console.log(data));

  return (
    <div className="shadow-xl pb-5 rounded-3xl">
      <Link to={`/products/${categoryName}`} className="block">
        <img
          alt="Signage"
          src={categoryImage}
          className="h-56 w-full rounded-tl-3xl rounded-tr-3xl object-cover sm:h-72 "
        />

        <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
          <strong className="font-bold text-xl text-gray-800">
            {categoryName}
          </strong>
        </div>
      </Link>
    </div>
  );
};

export default CategoryShow;
