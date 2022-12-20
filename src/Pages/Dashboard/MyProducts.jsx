import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import AOS from "aos";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/ContextApi";
import NoData from "../../Asset/No data-rafiki.svg";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const { data: myProducts = [], refetch } = useQuery({
    queryKey: ["myProduct"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API}/products?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const handlePublished = (id) => {
    fetch(`${process.env.REACT_APP_API}/products/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleDelete = (id) => {
    fetch(`${process.env.REACT_APP_API}/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success("User Is Deleted Successfully");
          refetch();
        }
      });
  };
  return (
    <div>
      {myProducts.length > 0 ? (
        <>
          <div class="container mx-auto px-4 sm:px-8 max-w-3xl">
            <div data-aos="fade-down" class="py-8">
              <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table class="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          class="px-5 py-3  border-b border-gray-200 bg-secondary  text-white text-sm uppercase font-normal"
                        >
                          Product ID
                        </th>
                        <th
                          scope="col"
                          class="px-5 py-3 border-b border-gray-200 bg-secondary  text-white  text-left text-sm uppercase font-normal"
                        >
                          Product Name
                        </th>

                        <th
                          scope="col"
                          class="px-5 py-3  border-b border-gray-200 bg-secondary  text-white  text-left text-sm uppercase font-normal"
                        >
                          Product Category
                        </th>

                        <th
                          scope="col"
                          class="px-5 py-3  border-b border-gray-200 bg-secondary  text-white text-left text-sm uppercase font-normal"
                        >
                          Product Price
                        </th>

                        <th
                          scope="col"
                          class="px-5 py-3  border-b border-gray-200 bg-secondary  text-white text-left text-sm uppercase font-normal"
                        >
                          Product Information
                        </th>

                        <th
                          scope="col"
                          class="px-5 py-3  border-b border-gray-200 bg-secondary  text-white text-left text-sm uppercase font-normal"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <>
                        {myProducts.map((myProd) => (
                          <>
                            <tr>
                              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p class="text-gray-900 whitespace-no-wrap">
                                  {" "}
                                  {myProd._id}
                                </p>
                              </td>

                              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p class="text-gray-900 whitespace-no-wrap">
                                  {" "}
                                  {myProd.ProductName}
                                </p>
                              </td>

                              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p class="text-gray-900 whitespace-no-wrap">
                                  {myProd.ProductCategory}
                                </p>
                              </td>

                              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p class="text-gray-900 whitespace-no-wrap">
                                  {myProd.ResalePrice}
                                </p>
                              </td>

                              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <button
                                  onClick={() => handlePublished(myProd._id)}
                                >
                                  {myProd.productPost ? (
                                    <p class=" whitespace-no-wrap bg-cyan-500 text-center text-white py-2 px-3 rounded-lg  hover:bg-primary">
                                      Published
                                    </p>
                                  ) : (
                                    <p class=" whitespace-no-wrap bg-cyan-500 text-center text-white py-2 px-3 rounded-lg  hover:bg-primary">
                                      Available
                                    </p>
                                  )}
                                </button>
                              </td>

                              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <button
                                  onClick={() => handleDelete(myProd._id)}
                                  class=" whitespace-no-wrap bg-secondary text-center text-white py-2 px-3 rounded-lg  hover:bg-primary"
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          </>
                        ))}
                      </>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="h-screen">
          <div className="flex items-center justify-center py-12">
            <div className=" rounded-md flex items-center justify-center mx-4 md:w-2/3 ">
              <div className="flex flex-col items-center  ">
                <img className="px-4 hidden md:block" src={NoData} alt="" />
                <h1 className="px-8 pt-5 pb-4 text-center text-3xl font-extrabold leading-10 text-white uppercase bg-secondary rounded-lg shadow-xl">
                  You Don't have any product!!
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProducts;
