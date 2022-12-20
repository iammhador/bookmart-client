import Aos from "aos";
import React, { useEffect } from "react";

const MyProductsInfo = ({ myProd }) => {
  const { _id, ProductName, ProductCategory } = myProd;
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <div data-aos="fade-down">
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
                    <tr>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap"> {_id}</p>
                      </td>

                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                          {" "}
                          {ProductName}
                        </p>
                      </td>

                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                          {ProductCategory}
                        </p>
                      </td>
                    </tr>
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

export default MyProductsInfo;
