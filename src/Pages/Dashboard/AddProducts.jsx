import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import AllProducts from "../Products/AllProducts";
import BookModal from "../AddProduct/BookModal";

const AddProducts = () => {
  const [productBooking, setProductBooking] = useState(null);

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API}/products`);
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="my-20 w-5/6 mx-auto">
      <div>
        <h2 className="text-5xl font-extrabold text-secondary text-center mb-10 uppercase">
          All Product
        </h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat) => (
          <AllProducts
            cat={cat}
            key={cat._id}
            setProductBooking={setProductBooking}
          />
        ))}
      </div>

      {productBooking && <BookModal productBooking={productBooking} />}
    </div>
  );
};

export default AddProducts;
