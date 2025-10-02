import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex sm:flex-row justify-between flex-wrap border-t mt-10">
      <div className="w-full sm:w-1/2 pr-30 mt-10 h-60 ml-3">
        <img
          src="https://static.vecteezy.com/system/resources/previews/047/656/219/non_2x/abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg"
          alt=""
          className="h-20"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero hic
          odio mollitia vitae aspernatur odit iusto fugit molestiae quaerat eos
          distinctio eveniet,  minima labore architecto
          voluptates impedit?
        </p>
      </div>
      <div className="mt-15 sm:mt-30">
        <p>COMPANY</p>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="mt-10 sm:mt-30">
        <p>GET IN TOUCH</p>
        <ul>
          <li>+91-1223455665</li>
          <li>krush@gmail.com</li>
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
