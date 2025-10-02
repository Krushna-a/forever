import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { sampleDresses } from "../../init/data";
import axios from "axios"

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [addToCart, setAddToCart] = useState(null);
  const [cartItems, setCartItems] = useState({});
  const [cartItemCnt, setCartItemCnt] = useState(0);
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/products`);
      if (response.data && response.data.products) {
        setProducts(response.data.products);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 

  const addItemToCart = (itemId, size) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
        setCartItemCnt((prev) => prev + 1);
      } else {
        cartData[itemId][size] = 1;
        setCartItemCnt((prev) => prev + 1);
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
      setCartItemCnt((prev) => prev + 1);
    }
    setCartItems(cartData);
  };
  const removeFromCart = (id) => {
    setCartPdts((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartPdts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(quantity) } : item
      )
    );
  };
  const backend_url = import.meta.env.VITE_BACKEND_URL

  const value = {
    backend_url,
    sampleDresses,
    addToCart,
    setAddToCart,
    removeFromCart,
    updateQuantity,
    addItemToCart,
    cartItems,
    setCartItems,
    cartItemCnt,
    total,setTotal,
    products
  };
  useEffect(() => {
    addItemToCart;
  }, [addToCart, cartItems]);

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
