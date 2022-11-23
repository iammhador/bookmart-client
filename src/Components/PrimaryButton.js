import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className="py-3 px-6 rounded bg-secondary text-base-100 font-semibold hover:bg-primary hover:text-base-100">
      {children}
    </button>
  );
};

export default PrimaryButton;
