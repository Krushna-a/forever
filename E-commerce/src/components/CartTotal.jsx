import React, { useEffect, useState } from "react";
import Text from "../components/Text";
import { Link } from "react-router-dom";

const CartTotal = ({ total }) => {
  return total !== 0 ? (
    <div className="flex flex-col items-end mt-10 px-4">
      <div className="mb-1 mr-6">
        <Text text1="CART" text2="TOTALS" />
      </div>

      <div className="w-full max-w-sm p-6 bg-white">
        <table className="w-full text-sm text-left text-gray-700">
          <tbody>
            <tr className="border-b py-2">
              <td className="py-2 font-medium">Subtotal</td>
              <td className="text-right">${total}</td>
            </tr>
            <tr className="border-b py-2">
              <td className="py-2 font-medium">Shipping Fee</td>
              <td className="text-right">$10</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="pt-4 font-semibold text-lg">
              <td className="py-3">Total</td>
              <td className="text-right">${total + 10}</td>
            </tr>
          </tfoot>
        </table>

        <Link to="/deliver" className="mt-6">
          <button className="w-full bg-black text-white py-3 hover:bg-gray-800 transition">
            PROCEED TO CHECKOUT
          </button>
        </Link>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default CartTotal;
