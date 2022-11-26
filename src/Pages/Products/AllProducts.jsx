import React from "react";
import { CiLocationOn, CiSignpostDuo1, CiClock1 } from "react-icons/ci";

const AllProducts = ({ cat }) => {
  console.log(cat);
  const {
    ProductName,
    ProductCategory,
    ProductLocation,
    ProductOriginalPrice,
    ProductResalePrice,
    ProductUseTime,
    postTime,
    ProductPicture,
  } = cat;
  return (
    <div className="shadow-xl rounded-xl ">
      <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
        <img
          alt="Home"
          src={ProductPicture}
          className="h-56 w-full rounded-md object-contain"
        />

        <div className="mt-2">
          <dl>
            <div>
              <dt className="sr-only">Price</dt>

              <dd className="text-sm text-gray-500 flex justify-between">
                <span>Original Price :{ProductOriginalPrice}tk</span>
                <span> Resale Price :{ProductResalePrice}tk</span>
              </dd>
            </div>

            <div>
              <dt className="sr-only">Product Name</dt>

              <dd className="font-medium">
                {ProductName} ({ProductCategory})
              </dd>
            </div>
          </dl>

          <div className="mt-6 flex items-center gap-8 text-xs">
            <div className="sm:inline-flex sm:shrink-0 sm:items-center">
              <CiLocationOn className="h-4 w-4 text-primary" />

              <div className="mt-1.5 sm:ml-3 sm:mt-0">
                <p className="text-gray-500">Location</p>

                <p className="font-medium">{ProductLocation}</p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center">
              <CiSignpostDuo1 className="h-4 w-4 text-primary" />

              <div className="mt-1.5 sm:ml-3 sm:mt-0">
                <p className="text-gray-500">Use Time</p>

                <p className="font-medium">{ProductUseTime} Days</p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center">
              <CiClock1 className="h-4 w-4 text-primary" />

              <div className="mt-1.5 sm:ml-3 sm:mt-0">
                <p className="text-gray-500">Post Time</p>

                <p className="font-medium">{postTime}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
