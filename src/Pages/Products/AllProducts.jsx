import React, { useEffect } from "react";
import { CiLocationOn, CiSignpostDuo1, CiClock1 } from "react-icons/ci";

// import verification from "../../Asset/check.png";
const AllProducts = ({ cat, setProductBooking }) => {
  const {
    _id,
    SellerName,
    SellerEmail,
    SellerContactNumber,
    Location,
    ProductName,
    ProductPostDate,
    ProductCategory,
    ProductCondition,
    OriginalPrice,
    ResalePrice,
    ProductDescription,
    DaysOfUse,
    image,
    productPost,
  } = cat;

  return (
    <div>
      <div className="shadow-xl rounded-xl ">
        <div className=" text-center p-4 ">
          <p className="font-semibold">
            {ProductName} ( {ProductCategory} )
            <p className="font-light">Description : {ProductDescription}</p>
          </p>
          <p></p>
        </div>
        <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
          <img
            alt="Home"
            src={image}
            className="h-56 w-full rounded-md object-contain"
          />

          <div className="mt-2">
            <dl>
              <div>
                <dt className="sr-only">Price</dt>

                <dd className="text-sm text-gray-500 flex justify-between">
                  <span>Original Price :{OriginalPrice}tk</span>
                  <span> Resale Price :{ResalePrice}tk</span>
                </dd>
              </div>
            </dl>

            <div className="mt-6 flex justify-between items-center gap-8 text-xs">
              <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                <CiLocationOn className="h-4 w-4 text-primary" />

                <div className="mt-1.5 sm:ml-3 sm:mt-0">
                  <p className="text-gray-500">Location</p>

                  <p className="font-medium">{Location}</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                <CiSignpostDuo1 className="h-4 w-4 text-primary" />

                <div className="mt-1.5 sm:ml-3 sm:mt-0">
                  <p className="text-gray-500">Use Time</p>

                  <p className="font-medium">{DaysOfUse} Days</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                <CiClock1 className="h-4 w-4 text-primary" />

                <div className="mt-1.5 sm:ml-3 sm:mt-0">
                  <p className="text-gray-500">Post Time</p>

                  <p className="font-medium">{ProductPostDate}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mx-auto">
            <label
              onClick={() => setProductBooking(cat)}
              htmlFor="book-modal"
              className="btn mt-5 bg-secondary px-6 py-2 text-sm font-medium text-white shadow hover:bg-base-100 hover:text-secondary focus:outline-none focus:ring active:bg-secondary sm:w-auto"
            >
              Booking
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
