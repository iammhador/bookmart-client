import React, { useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";

const MatchCategory = () => {
  const data = useLoaderData();
  console.log(data);
  //   const { category, setCategory } = useState();
  // let styleList = props.location.styleList;
  // console.log(styleList);
  //   const {} = data;
  //   setCategory(data);
  //   fetch(`${process.env.REACT_APP_API}/products`, {
  //     method: "GET",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(category),
  //   });
  return <div>Hello</div>;
};

export default MatchCategory;
