import React from "react";
import Text from "../components/Text";

const Contact = () => {
  return (
    <div>
      <Text text1={"CONTACT"} text2={"US"}></Text>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="w-1/2 ">
          <img
            className="h-100"
            src="https://www.anandgroupindia.com/wp-content/uploads/2019/05/contactus.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between px-5 py-10">
          <p className="font-bold">OUR STORE</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>tel-(+91)135461321</p>
          <p>Email jgada123@gmail.com</p>
          <p className="font-bold">CAREERS</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <p className="px-4 py-2 border w-33">Explore Jobs</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
