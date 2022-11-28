import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import BookModal from "../AddProduct/BookModal";
import Advertised from "./Advertised";

const PublishedPost = () => {
  const [productBooking, setProductBooking] = useState(null);
  const [postData, setPostData] = useState([]);
  // const {
  //   data: publishedPost,
  //   refetch,
  //   isLoading,
  // } = useQuery({
  //   queryKey: [""],
  //   queryFn: async () => {
  //     const res = await fetch(`${process.env.REACT_APP_API}/products`);
  //     const data = await res.json();
  //     return data;
  //   },
  // });
  // isLoading();

  // console.log(publishedPost);
  // refetch()
  fetch(`${process.env.REACT_APP_API}/products`)
    .then((res) => res.json())
    .then((data) => setPostData(data));

  return (
    <div>
      <h2 className="text-5xl font-extrabold text-secondary text-center mb-10 uppercase">
        Advertised Product
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
        {postData.map((publishProduct) => (
          <Advertised
            publishProduct={publishProduct}
            key={publishProduct._id}
            setProductBooking={setProductBooking}
          />
        ))}
      </div>
      {productBooking && <BookModal productBooking={productBooking} />}
    </div>
  );
};

export default PublishedPost;
