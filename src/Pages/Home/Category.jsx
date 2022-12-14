import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import AOS from "aos";
import CategoryShow from "./CategoryShow";

const Category = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  const { data: categoryDetails = [], refetch } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API}/category`);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div data-aos="fade-down" className="mb-20">
      <h2 className="text-5xl font-extrabold text-secondary text-center mb-10 uppercase">
        Category
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categoryDetails.map((cate) => (
          <CategoryShow key={cate?._id} cate={cate} />
        ))}
      </div>
    </div>
  );
};

export default Category;
