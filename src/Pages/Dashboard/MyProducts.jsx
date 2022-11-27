import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/ContextApi";
import MyProductsInfo from "./MyProductsInfo";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  const { data: myProducts = [] } = useQuery({
    queryKey: ["myProduct"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API}/products?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  console.log(`${process.env.REACT_APP_API}/products?email=${user?.email}`);
  console.log(myProducts);
  return (
    <div>
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
                      Product Category
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
    </div>
  );
};

export default MyProducts;
