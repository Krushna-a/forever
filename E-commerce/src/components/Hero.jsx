import React from "react";
import heroImg from "/hero_img.png"
const Hero = () => {
  return (
    <div className="flex flex-col w-full border md:w-100% md:flex md:flex-row md:h-auto md:mt-5">
      <div className="left-hero w-full h-[30vh] md:w-1/2 md:h-[70vh] flex flex-col justify-center items-center gap-2 ">
        <div className="flex items-center ">
          <p className="w-12 h-[2.5px] mr-2 bg-black rounded"></p>
          <p>OUR BESTSELERS</p>
        </div>
        <div>
          <p className="text-4xl">Latest Arrivals</p>
        </div>
        <div className="flex items-center mt-3">
          <p>SHOP NOW</p>
          <p className="w-12 h-[2.5px] ml-2 bg-black rounded"></p>
        </div>
      </div>
      <div className="right-hero w-full md:w-1/2">
        <img src={heroImg} alt=""  className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Hero;
