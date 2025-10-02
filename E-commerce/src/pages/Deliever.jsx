import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Text from "../components/Text";
import CartTotal from "../components/CartTotal";

const Deliever = () => {
  const { total } = useContext(ShopContext);
  const [selectedMethod, setSelectedMethod] = useState("Stripe");

  const paymentOptions = ["Stripe", "Razorpay", "COD"];

  return (
    <div className="w-full flex flex-col sm:flex-row px-4 py-10 gap-10">
      {/* Left - Delivery Info */}
      <div className="w-full sm:w-1/2">
        <Text text1={"DELIVERY"} text2={"INFORMATION"} />
        <form className="mt-6 space-y-4">
          <div className="flex gap-4">
            <input
              className="border p-3 w-full"
              type="text"
              placeholder="First Name"
            />
            <input
              className="border p-3 w-full"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <input
            className="border p-3 w-full"
            type="email"
            placeholder="Email"
          />
          <input
            className="border p-3 w-full"
            type="text"
            placeholder="Street"
          />
          <div className="flex gap-4">
            <input
              className="border p-3 w-full"
              type="text"
              placeholder="City"
            />
            <input
              className="border p-3 w-full"
              type="text"
              placeholder="State"
            />
          </div>
          <div className="flex gap-4">
            <input
              className="border p-3 w-full"
              type="text"
              placeholder="Zip Code"
            />
            <input
              className="border p-3 w-full"
              type="text"
              placeholder="Country"
            />
          </div>
          <input
            className="border p-3 w-full"
            type="number"
            placeholder="Phone"
          />
        </form>
      </div>

      {/* Right - Cart & Payment */}
      <div className="w-full flex flex-col items-end space-y-8">
        <CartTotal total={total} />
        <div className="w-full sm:w-1/2">
          <Text text1={"PAYMENT"} text2={"METHOD"} />
          <div className="flex justify-between mt-4">
            {paymentOptions.map((method) => (
              <div
                key={method}
                onClick={() => setSelectedMethod(method)}
                className={`border cursor-pointer w-1/3 mx-1 py-3 px-2 flex items-center justify-center text-sm rounded transition-all ${
                  selectedMethod === method
                    ? "border-black bg-gray-100"
                    : "border-gray-300"
                }`}
              >
                <div
                  className={`w-3 h-3 rounded-full mr-2 ${
                    selectedMethod === method ? "bg-green-500" : "bg-gray-300"
                  }`}
                ></div>
                {method}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deliever;
