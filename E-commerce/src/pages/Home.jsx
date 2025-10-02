import React, { useContext, useEffect, useState } from "react";
import Hero from "../components/Hero";
import Text from "../components/Text";
import Pdt from "../components/Pdt";
import Services from "../components/Services";
import Footer from "../components/Footer";
import { ShopContext } from "../context/ShopContext";
import axios from 'axios'

const Home = () => {
  const {products, backend_url } = useContext(ShopContext);
  

  const latestCollectionData = products.slice(0, 10);
  const bestSellerData = products.slice(0, 5);

  return (
    <div>
      <Hero></Hero>
      <Text text1={"LATEST"} text2={"COLLECTION"}></Text>
      <div className="text-center mb-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit corporis
        dicta voluptatibus? Sit hic quam doloribus! Accusamus nam excepturi
        similique!
      </div>
      <div className="latest-collection grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {latestCollectionData.map((pdt) => (
          <Pdt key={pdt._id} pdt={pdt} />
        ))}
      </div>
      <Text text1={"BEST"} text2={"SELLER"}></Text>
      <div className="text-center my-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit corporis
        dicta voluptatibus? Sit hic quam doloribus! Accusamus nam excepturi
        similique!
      </div>
      <div className="latest-collection grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {bestSellerData.map((pdt) => (
          <Pdt key={pdt._id} pdt={pdt} />
        ))}
      </div>
    </div>
  );
};

export default Home;
