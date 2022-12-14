import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import Aos from "aos";
import { toast } from "react-hot-toast";

const AllSellers = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  const { data: userData = [], refetch } = useQuery({
    queryKey: [""],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API}/users?role=Seller`);
      const data = await res.json();
      return data;
    },
  });

  // console.log(sellerId);
  const handleVerified = (id) => {
    fetch(`${process.env.REACT_APP_API}/users/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Seller Verified");
      });
  };

  const handleDelete = (id) => {
    fetch(`${process.env.REACT_APP_API}/users/${id}`, {
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
      <>
        <div class="container mx-auto px-4 sm:px-8 max-w-3xl">
          <div class="py-8">
            <div
              data-aos="fade-down"
              class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto"
            >
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
                        Seller Verification
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
                      {userData.map((data) => (
                        <tr>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <img
                              src={data.image}
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
                            <button onClick={() => handleVerified(data._id)}>
                              {data.sellerVerification ? (
                                <p class=" whitespace-no-wrap bg-cyan-500 text-center text-white py-2 px-3 rounded-lg  hover:bg-primary">
                                  Verified
                                </p>
                              ) : (
                                <p class=" whitespace-no-wrap bg-green-500 text-center text-white py-2 px-3 rounded-lg  hover:bg-primary">
                                  Verify
                                </p>
                              )}
                            </button>
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

export default AllSellers;
