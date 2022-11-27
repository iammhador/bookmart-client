import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import AllProducts from "./AllProducts";
import BookModal from "../AddProduct/BookModal";
const Products = ({ cat }) => {
  const [productBooking, setProductBooking] = useState(null);
  // const { data: categories = [] } = useQuery({
  //   queryKey: ["categories"],
  //   queryFn: async () => {
  //     const res = await fetch(`${process.env.REACT_APP_API}/products`);
  //     const data = await res.json();
  //     return data;
  //   },
  // });
  return (
    <div>
      <div>
        {/* {categories.map((cat) => (
          <AllProducts
            cat={cat}
            key={cat._id}
            setProductBooking={setProductBooking}
          />
        ))} */}
        <AllProducts
          setProductBooking={setProductBooking}
          cat={cat}
          key={cat._id}
        />
      </div>

      {productBooking && <BookModal productBooking={productBooking} />}
    </div>
  );
};

export default Products;
