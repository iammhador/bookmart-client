import { useQuery } from "@tanstack/react-query";
import React from "react";
import ProductDetailsInfo from "./ProductDetailsInfo";

const AddProduct = () => {
  const { data: userInfo = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API}/users`);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="w-5/6 mx-auto my-20 ">
      {userInfo.map((user) => (
        <ProductDetailsInfo key={user._id} user={user} />
      ))}
    </div>
  );
};

export default AddProduct;
