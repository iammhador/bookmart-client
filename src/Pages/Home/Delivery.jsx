import React from "react";
import deliveryMan from "../../Asset/delivery-man.png";
const Delivery = () => {
  return (
    <div className="my-20">
      <div>
        <h2 className="text-5xl font-extrabold text-secondary text-center mb-10 uppercase">
          Delivery Option
        </h2>
      </div>
      <div className="container mx-auto shadow-lg py-5 px-10 rounded-lg">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <img
            className="w-32 h-32  p-2 rounded-full"
            src={deliveryMan}
            alt="delivery Man"
          />
          <div className="flex-1 py-2 lg:py-0 ml-2">
            <p className="text-2xl font-semibold">
              To provide hassle-free experience, We collect your products and
              deliver it to you.
            </p>
            <p className="font-medium text-gray-500 text-lg mt-2 ">
              Choose your products without any fear of delivery problems. We
              collect your products from the seller, Pass it to our trusted
              delivery service product, and within a day you will get your
              product.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
