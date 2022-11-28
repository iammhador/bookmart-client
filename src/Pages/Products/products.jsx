import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import AllProducts from "./AllProducts";
import BookModal from "../AddProduct/BookModal";
const Products = ({ cat }) => {
  const [productBooking, setProductBooking] = useState(null);

  return (
    <div>
      <div>
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
