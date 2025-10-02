import React from "react";
import { Link } from "react-router-dom";

const Pdt = ({ pdt }) => {
  return (
    <Link
      to={`/product/${pdt._id}`}
      key={pdt.id}
      className="bg-white shadow hover:shadow-lg transition-all transform hover:scale-105 duration-300 ease-in-out flex flex-col"
    >
      <div className="aspect-[4/5] w-full overflow-hidden">
        <img
          src={pdt.image.url}
          alt={pdt.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="pt-3 px-1 mb-2">
        <p className="text-sm sm:text-base font-medium truncate">{pdt.title}</p>
        <p className="text-xs sm:text-sm text-gray-600 mt-1">${pdt.price}</p>
      </div>
    </Link>
  );
};

export default Pdt;
