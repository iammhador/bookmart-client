import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/ContextApi";
import NoData from "../../Asset/No data-rafiki.svg";

const MyBuyers = () => {
  const { user } = useContext(AuthContext);

  const { data: MyBuyers = [], refetch } = useQuery({
    queryKey: ["user?.email"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API}/booking?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  refetch();
  return (
    <div>
      {MyBuyers.length > 0 ? (
        <>
          <div class="container mx-auto px-4 sm:px-8 max-w-3xl">
            <div class="py-8">
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
                          Product Price
                        </th>

                        <th
                          scope="col"
                          class="px-5 py-3  border-b border-gray-200 bg-secondary  text-white text-left text-sm uppercase font-normal"
                        >
                          Buyer Name
                        </th>

                        <th
                          scope="col"
                          class="px-5 py-3  border-b border-gray-200 bg-secondary  text-white text-left text-sm uppercase font-normal"
                        >
                          Buyer Email
                        </th>

                        <th
                          scope="col"
                          class="px-5 py-3  border-b border-gray-200 bg-secondary  text-white text-left text-sm uppercase font-normal"
                        >
                          Buyer Contact Number
                        </th>
                        <th
                          scope="col"
                          class="px-5 py-3  border-b border-gray-200 bg-secondary  text-white text-left text-sm uppercase font-normal"
                        >
                          Buyer Meeting Location
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <>
                        {MyBuyers.map((myProd) => (
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
                                  {myProd.ProductPrice}
                                </p>
                              </td>
                              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p class="text-gray-900 whitespace-no-wrap">
                                  {myProd.buyerName}
                                </p>
                              </td>
                              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p class="text-gray-900 whitespace-no-wrap">
                                  {myProd.buyerEmail}
                                </p>
                              </td>
                              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p class="text-gray-900 whitespace-no-wrap">
                                  {myProd.ContactNumber}
                                </p>
                              </td>
                              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p class="text-gray-900 whitespace-no-wrap">
                                  {myProd.MeetingLocation}
                                </p>
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
                  You Don't have any buyers!!
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBuyers;
