import { useQuery } from "@tanstack/react-query";
import Aos from "aos";
import React, { useEffect } from "react";
import profile from "../../Asset/user.png";
const AllUser = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API}/users`);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <div class="container mx-auto px-4 sm:px-8 max-w-3xl">
        <div data-aos="fade-down" class="py-8">
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Profile Image
                    </th>

                    <th
                      scope="col"
                      class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Username
                    </th>
                    <th
                      scope="col"
                      class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <>
                      <tr>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div class="flex items-center">
                            <div class="flex-shrink-0">
                              <img
                                alt="profile"
                                src={user?.image ? user?.image : profile}
                                class="mx-auto object-cover rounded-full h-20 w-20 shadow-lg p-2"
                              />
                            </div>
                          </div>
                        </td>

                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p class="text-gray-900 whitespace-no-wrap">
                            {" "}
                            {user?.username ? user?.username : "No data found"}
                          </p>
                        </td>

                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p class="text-gray-900 whitespace-no-wrap">
                            {" "}
                            {user?.email}
                          </p>
                        </td>

                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden="true"
                              class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            ></span>
                            <span class="relative">{user?.role}</span>
                          </span>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
