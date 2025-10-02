import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faListCheck,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-10 items-end justify-start pt-20 drop-shadow-[4px_0_4px_rgba(0,0,0,0.25)] border-r ">
      <NavLink to='/add' className="border w-10 py-2 md:w-30 active:bg-blue-300 lg:w-50 flex  items-center gap-3 pl-4 border-r-0" >
        <FontAwesomeIcon icon={faPlus} />
        <p className="hidden sm:block">Add Items</p>
      </NavLink>
      <NavLink to='/list' className="border w-10 py-2 md:w-30 lg:w-50 flex active:bg-blue-300 items-center gap-3 pl-4 border-r-0">
        <FontAwesomeIcon icon={faList} />
        <p className="hidden sm:block">List Items</p>
      </NavLink>
      <NavLink to='/orders' className="border w-10 py-2 md:w-30 lg:w-50 flex active:bg-blue-300 items-center gap-3 pl-4 border-r-0">
      <FontAwesomeIcon icon={faListCheck} />
        <p className="hidden sm:block">Orders</p>
      </NavLink>
    </div>
  );
};

export default Sidebar;
