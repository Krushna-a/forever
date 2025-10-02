import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Text from "../components/Text";
import CartItem from "../components/CartItem";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { cartItems, total, setTotal,products } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  useEffect(() => {
    let newTotal = 0;
    cartData.forEach((item) => {
      const cartProduct = products.filter(
        (dress) => item._id === dress.id && dress.size.includes(item.size)
      )[0];
      if (cartProduct) {
        newTotal += cartProduct.price * item.quantity;
      }
    });
    setTotal(newTotal);
  }, [cartData]);
  
  return (
    <div>
      <Text text1={"YOUR"} text2={"CART"}></Text>
      <div>
        {cartData.map((item) => {
          const cartProduct = products.filter(
            (dress) => item._id === dress._id && dress.size.includes(item.size)
          )[0];
          return (
            <CartItem
              pdt={cartProduct}
              quantity={item.quantity}
              size={item.size}
            />
          );
        })}
      </div>
      <div>
        <div>Cart total</div>
        <CartTotal total={total} />
      </div>
    </div>
  );
};


export default Cart;
