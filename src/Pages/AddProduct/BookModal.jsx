import React, { useContext } from "react";
import toast from "react-hot-toast";
import { json } from "react-router-dom";
import PrimaryButton from "../../Components/PrimaryButton";
import { AuthContext } from "../../Context/ContextApi";

const BookModal = ({ productBooking }) => {
  const { user } = useContext(AuthContext);

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
  } = productBooking;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const productSellerName = form.productSellerName.value;
    const productSellerEmail = form.productSellerEmail.value;
    const ProductName = form.ProductName.value;
    const ProductPrice = form.ProductPrice.value;
    const ContactNumber = form.ContactNumber.value;
    const MeetingLocation = form.MeetingLocation.value;

    const bookingInfo = {
      productSellerName,
      productSellerEmail,
      ProductName,
      ProductPrice,
      ContactNumber,
      MeetingLocation,
      buyerEmail: user?.email,
      buyerName: user?.displayName,
    };

    fetch(`${process.env.REACT_APP_API}/booking`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Successfully Booked The Items");
      });
  };
  return (
    <div>
      <input type="checkbox" id="book-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="book-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleSubmit}>
            <div className="my-2">
              <label
                htmlFor="productSellerName"
                className="leading-7 text-sm text-gray-600 font-semibold"
              >
                Seller Name
              </label>
              <input
                type="text"
                id="productSellerName"
                name="productSellerName"
                defaultValue={SellerName}
                disabled
                required
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="my-2">
              <label
                htmlFor="SellerEmail"
                className="leading-7 text-sm text-gray-600 font-semibold"
              >
                Seller Email
              </label>
              <input
                type="text"
                id="productSellerEmail"
                name="productSellerEmail"
                defaultValue={SellerEmail}
                disabled
                required
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="my-2">
              <label
                htmlFor="password"
                className="leading-7 text-sm text-gray-600 font-semibold"
              >
                Product Name
              </label>
              <input
                type="text"
                id="ProductName"
                name="ProductName"
                defaultValue={ProductName}
                disabled
                required
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="my-2">
              <label
                htmlFor="ProductPrice"
                className="leading-7 text-sm text-gray-600 font-semibold"
              >
                Product Price (tk)
              </label>
              <input
                type="text"
                id="ProductPrice"
                name="ProductPrice"
                defaultValue={ResalePrice}
                disabled
                required
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="my-2">
              <label
                htmlFor="ContactNumber"
                className="leading-7 text-sm text-gray-600 font-semibold"
              >
                Contact Number
              </label>
              <input
                type="phone"
                id="ContactNumber"
                name="ContactNumber"
                required
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="my-2">
              <label
                htmlFor="MeetingLocation"
                className="leading-7 text-sm text-gray-600 font-semibold"
              >
                Meeting Location
              </label>
              <input
                type="location"
                id="MeetingLocation"
                name="MeetingLocation"
                required
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            {/* <button>Submit</button> */}
            <PrimaryButton type="submit">Submit</PrimaryButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
