import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import toast from "react-hot-toast";
import avater from "../../Asset/user.png";
const AllBuyers = () => {
  const { data: buyersData = [] } = useQuery({
    queryKey: [""],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API}/users?role=User`);
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    console.log(id);
    fetch(`${process.env.REACT_APP_API}/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success("User Is Deleted Successfully");
        }
      });
  };

  return (
    <div>
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
                        Profile Image
                      </th>

                      <th
                        scope="col"
                        class="px-5 py-3 border-b border-gray-200 bg-secondary  text-white  text-left text-sm uppercase font-normal"
                      >
                        Seller ID
                      </th>

                      <th
                        scope="col"
                        class="px-5 py-3  border-b border-gray-200 bg-secondary  text-white  text-left text-sm uppercase font-normal"
                      >
                        Seller Username
                      </th>

                      <th
                        scope="col"
                        class="px-5 py-3  border-b border-gray-200 bg-secondary  text-white text-left text-sm uppercase font-normal"
                      >
                        Product Email
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
                      {buyersData.map((data) => (
                        <tr>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <img
                              src={data.image ? data.image : avater}
                              alt="Profile"
                              className="w-28 h-20"
                            />
                          </td>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {" "}
                              {data._id}
                            </p>
                          </td>

                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {" "}
                              {data.username ? data.username : "No data found"}
                            </p>
                          </td>

                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {data.email}
                            </p>
                          </td>

                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <button
                              onClick={() => handleDelete(data._id)}
                              class=" whitespace-no-wrap bg-secondary text-center text-white py-2 px-3 rounded-lg  hover:bg-primary"
                            >
                              Delete
                            </button>
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
    </div>
  );
};

export default AllBuyers;
