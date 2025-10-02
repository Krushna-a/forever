import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import {
  faMagnifyingGlass,
  faCartShopping,
  faUser,
  faSliders,
  faXmark,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {  cartItemCnt } = useContext(ShopContext);

  return (
    <>
      <div
        className={`${
          visible ? "hidden" : ""
        } flex justify-between items-center shadow-lg`}
      >
        <img
          src="https://static.vecteezy.com/system/resources/previews/047/656/219/non_2x/abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg"
          alt=""
          className="h-20"
        />

        <div className="NavLinks w-[40vw] hidden md:flex md:justify-between md:items-center text-xl ">
          <NavLink
            to="/"
            className="flex flex-col items-center hover:scale-107 transition ease-in"
          >
            <p>Home</p>
            <hr className="w-3/4 h-[2.5px] bg-black border-none rounded hidden " />
          </NavLink>

          <NavLink
            to="/collection"
            className="flex flex-col items-center hover:scale-107 transition ease-in"
          >
            <p>Collection</p>
            <hr className="w-3/4 h-[2.5px] bg-black border-none rounded hidden" />
          </NavLink>

          <NavLink
            to="/about"
            className="flex flex-col items-center hover:scale-107 transition ease-in"
          >
            <p>About</p>
            <hr className="w-3/4 h-[2.5px] bg-black border-none rounded hidden" />
          </NavLink>

          <NavLink
            to="/contact"
            className="flex flex-col items-center hover:scale-107 transition ease-in"
          >
            <p>Contact</p>
            <hr className="w-3/4 h-[2.5px] bg-black border-none rounded hidden" />
          </NavLink>
        </div>
        <div className="min-w-[8vw] flex justify-center items-center gap-5 mr-5 ">
          <div>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <div className="relative group">
            <FontAwesomeIcon icon={faUser} />
            <div className="hidden group-hover:block dropdown-menu absolute top-5 right-2 flex flex-col gap-5 bg-gray-400 min-w-30 p-3 rounded">
              <NavLink to="/login">
                <p className="hover:underline cursor-pointer">Login</p>
              </NavLink>
              <NavLink to="/signup">
                <p className="hover:underline cursor-pointer">Sign Up</p>
              </NavLink>
              <p className="hover:underline cursor-pointer">Logout</p>
            </div>
          </div>
          <NavLink to="/cart" className="relative">
            <FontAwesomeIcon icon={faCartShopping} />
            <p className="absolute right-[-15px] bottom-[-13px] h-5 w-5 p-3 rounded-full flex justify-center items-center text-white  bg-black">
              {cartItemCnt}
            </p>
          </NavLink>
          <div
            className="md:hidden"
            onClick={() => {
              setVisible(!visible);
            }}
          >
            <FontAwesomeIcon icon={faSliders} />
          </div>
        </div>
      </div>
      <div
        className={`${
          visible ? "w-full h-[100vh] top-0 bg-white" : "w-0"
        } fixed transition-all duration-300 overflow-hidden
      flex flex-col bg-white  `}
      >
        {/* { sidebar} */}
        <div
          className="mt-10 pr-8 py-2 text-4xl text-right"
          onClick={(e) => {
            setVisible(!visible);
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <div className="pt-5 p-10 gap-10 flex flex-col transition-all">
          <NavLink
            to="/"
            className="transition duration-300 ease-in-out hover:scale-105 mt-10 border-b py-2"
            onClick={() => setVisible(!visible)}
          >
            Home
          </NavLink>
          <NavLink
            to="/collection"
            className="transition duration-300 ease-in-out hover:scale-105 mt-5 border-b py-2"
            onClick={() => setVisible(!visible)}
          >
            Collection
          </NavLink>
          <NavLink
            to="/about"
            className="transition duration-300 ease-in-out hover:scale-105 mt-5 border-b py-2"
            onClick={() => setVisible(!visible)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="transition duration-300 ease-in-out hover:scale-105 mt-5 border-b py-2"
            onClick={() => setVisible(!visible)}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
