import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className="block w-full rounded bg-secondary px-12 py-3 text-sm font-medium text-white shadow hover:bg-base-100 hover:text-secondary focus:outline-none focus:ring active:bg-secondary sm:w-auto">
      {children}
    </button>
  );
};

export default PrimaryButton;
