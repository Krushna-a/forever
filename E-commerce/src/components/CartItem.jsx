import React, {     useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const CartItem = ({ pdt,quantity,size }) => {
  const { removeFromCart, updateQuantity } = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between border-b py-4">
      {/* Product Image */}
      <div className="flex items-center gap-4 w-[40%]">
        <img
          src={pdt.image.url}
          alt={pdt.title}
          className="w-20 h-24 object-cover"
        />
        <div>
          <p className="font-medium text-sm">{pdt.title}</p>
          <p className="text-gray-600 text-sm">${pdt.price}</p>
          <span className="border px-2 py-1 text-xs mt-1 inline-block">
            {size}
          </span>
        </div>
      </div>

      {/* Quantity Selector */}
      <div className="w-[20%] flex justify-center">
        <input
          type="number"
          min={1}
          value={quantity || 1}
          onChange={(e) => updateQuantity(pdt.price, e.target.value)}
          className="border rounded w-16 h-10 text-center"
        />
      </div>

      {/* Delete Icon */}
      <div className="w-[10%] flex justify-center">
        <button className= "p-2" onClick={() => removeFromCart(pdt.id)}>
            delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;
