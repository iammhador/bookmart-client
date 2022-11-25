import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLoaderData } from "react-router-dom";

const CategoryDetails = () => {
  const { data } = useLoaderData();
  console.log(data);
  // const {} = categoryDetails()

  // const { data: categoryDetails = [] } = useQuery({
  //   queryKey: ["category"],
  //   queryFn: async () => {
  //     const res = await fetch("http://localhost:5000/categories");
  //     const data = await res.json();
  //     return data;
  //   },
  // });
  // console.log(categoryDetails);
  //   const {data: categoryInfo = []} = useQuery({
  //     queryKey: ["categoryName"],
  //     queryFn: async () => {
  // const res = await fetch(`http://localhost:5000/categories/${}`)
  //     }
  //   });
  return <div>Hello</div>;
};

export default CategoryDetails;
