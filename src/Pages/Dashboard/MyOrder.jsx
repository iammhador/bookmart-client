import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/ContextApi";
import NoData from "../../Asset/No data-rafiki.svg";
import AOS from "aos";
const MyOrder = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  const { data: bookingData = [] } = useQuery({
    queryKey: [""],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API}/booking?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  console.log(bookingData);
  return (
    <div>
      <>
        {bookingData.length > 0 ? (
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
                            Seller Name
                          </th>
                          <th
                            scope="col"
                            class="px-5 py-3 border-b border-gray-200 bg-secondary  text-white  text-left text-sm uppercase font-normal"
                          >
                            Seller Email
                          </th>

                          <th
                            scope="col"
                            class="px-5 py-3  border-b border-gray-200 bg-secondary  text-white  text-left text-sm uppercase font-normal"
                          >
                            Product Name
                          </th>

                          <th
                            scope="col"
                            class="px-5 py-3  border-b border-gray-200 bg-secondary  text-white text-left text-sm uppercase font-normal"
                          >
                            Product Price
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <>
                          {bookingData.map((data) => (
                            <tr>
                              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p class="text-gray-900 whitespace-no-wrap">
                                  {" "}
                                  {data.productSellerName}
                                </p>
                              </td>

                              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p class="text-gray-900 whitespace-no-wrap">
                                  {" "}
                                  {data.productSellerEmail}
                                </p>
                              </td>

                              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p class="text-gray-900 whitespace-no-wrap">
                                  {data.ProductName}
                                </p>
                              </td>

                              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p class="text-gray-900 whitespace-no-wrap">
                                  {data.ProductPrice}
                                </p>
                              </td>
                            </tr>
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
                    You Didn't Order Yet!!
                  </h1>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default MyOrder;
