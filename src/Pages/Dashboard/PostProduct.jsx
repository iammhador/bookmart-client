import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const PostProduct = () => {
  // const { imgUrl, setImgUrl } = useState("");
  // const [postProductDetails, setPostProductDetails] = useState("");

  // console.log(PostProductDetails);

  // fetch(`${process.env.REACT_APP_API}/products`, {
  //   method: "POST",
  //   headers: {
  //     "content-type": "application/json",
  //   },
  //   body: JSON.stringify(PostProductDetails),
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //   });

  // useEffect(() => {}, {});

  // console.log(postProductDetails);

  const handleProductInfo = (e) => {
    e.preventDefault();
    const form = e.target;
    const sellerName = form.sellerName.value;
    const ProductName = form.ProductName.value;
    const ProductCategory = form.ProductCategory.value;
    const OriginalPrice = form.OriginalPrice.value;
    const ResalePrice = form.ResalePrice.value;
    const Location = form.Location.value;
    const DaysOfUse = form.DaysOfUse.value;
    const ProductPostDate = form.ProductPostDate.value;

    const ProductDetails = {
      SellerName: sellerName,
      ProductName: ProductName,
      ProductCategory: ProductCategory,
      OriginalPrice: OriginalPrice,
      ResalePrice: ResalePrice,
      Location: Location,
      DaysOfUse: DaysOfUse,
      ProductPostDate: ProductPostDate,
      // imgUrl,
    };

    // fetch(`${process.env.REACT_APP_API}/products`, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(ProductDetails),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(ProductDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // if (data.acknowledged) {
        //   toast.success("Your Booking Has Been Added");
        // } else {
        //   toast.error("Your Already Booked On This Date");
        // }
      });

    // console.log(ProductDetails);
    const image = e.target.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_API}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.data);
        // setImgUrl(data.data.display_url);
      });

    // setPostProductDetails(ProductDetails);

    // setPostProductDetails(ProductDetails);
  };

  return (
    <div className="my-20 w-5/6 mx-auto">
      <h2 className="text-4xl font-bold text-secondary mb-10">
        Add Your Product:
      </h2>
      <div>
        <section className=" text-gray-600 body-font relative shadow-xl rounded-2xl p-10">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full">
              <form onSubmit={handleProductInfo}>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
                  <div className="my-2">
                    <label
                      htmlFor="sellerName"
                      className="leading-7 text-sm text-gray-600 font-semibold"
                    >
                      Seller Name
                    </label>
                    <input
                      type="text"
                      id="sellerName"
                      name="sellerName"
                      required
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="my-2">
                    <label
                      htmlFor="Product Name"
                      className="leading-7 text-sm text-gray-600 font-semibold"
                    >
                      Product Name
                    </label>
                    <input
                      type="text"
                      id="ProductName"
                      name="ProductName"
                      required
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
                  <div className="my-2">
                    <label
                      htmlFor="ProductCategory"
                      className="leading-7 text-sm text-gray-600 font-semibold"
                    >
                      Product Category
                    </label>
                    <select
                      name="ProductCategory"
                      required
                      className="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 pt-2 pb-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    >
                      <option>Fictional</option>
                      <option>Non-Fictional</option>
                      <option>Education</option>
                    </select>
                  </div>
                  <div className="my-2">
                    <label
                      htmlFor="Location"
                      className="leading-7 text-sm text-gray-600 font-semibold"
                    >
                      Product Location
                    </label>
                    <input
                      type="text"
                      id="Location"
                      name="Location"
                      required
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
                  <div className="my-2">
                    <label
                      htmlFor="Days Of Use"
                      className="leading-7 text-sm text-gray-600 font-semibold"
                    >
                      Days Of Use
                    </label>
                    <input
                      type="data"
                      id="DaysOfUse"
                      name="DaysOfUse"
                      required
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="my-2">
                    <label
                      htmlFor="ProductPostDate"
                      className="leading-7 text-sm text-gray-600 font-semibold"
                    >
                      Product Post Date
                    </label>
                    <input
                      type="time"
                      id="ProductPostDate"
                      name="ProductPostDate"
                      required
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
                  <div className="my-2">
                    <label
                      htmlFor="Original Price"
                      className="leading-7 text-sm text-gray-600 font-semibold"
                    >
                      Original Price
                    </label>
                    <input
                      type="text"
                      id="OriginalPrice"
                      name="OriginalPrice"
                      required
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="my-2">
                    <label
                      htmlFor="Resale Price"
                      className="leading-7 text-sm text-gray-600 font-semibold"
                    >
                      Resale Price
                    </label>
                    <input
                      type="text"
                      id="ResalePrice"
                      name="ResalePrice"
                      required
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
                  <div className="my-2">
                    <div>
                      <label
                        htmlFor="ProductImage"
                        className="leading-7 text-sm text-gray-600 font-semibold"
                      >
                        Product Image
                      </label>
                      <br />
                      <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-center flex mb-5 my-2">
                  <button className="block w-full rounded bg-secondary px-12 py-3 text-sm font-medium text-white shadow hover:bg-base-100 hover:text-secondary focus:outline-none focus:ring active:bg-secondary sm:w-auto">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PostProduct;
