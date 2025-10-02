import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import Text from "../components/Text";
import Pdt from "../components/Pdt";
import { ToastContainer, toast } from "react-toastify";

const Product = () => {
  const [selectSize, setSelectSize] = useState("");
  const {
    products,
    addToCart,
    setAddToCart,
    cartItems,
    setCartItems,
    addItemToCart,
  } = useContext(ShopContext);
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [relatedPdt, setRelatedPdt] = useState([]);
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [clicked, setClicked] = useState(false);

  const handlesizeError = (selectSize) => {
    if (selectSize == "") {
      const error = () => toast("Please select Size");
      error();
    } else {
      addItemToCart(id, selectSize);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setClicked(true);
    setTimeout(() => setClicked(false), 100); // 200ms flash
  };

  // Get current product
  useEffect(() => {
    const item = products.find((item) => item._id === id);
    if (item) {
      setProductData(item);
      setCategory(item.category);
      setSubCategory(item.type);
    }
  }, [products, id]);

  // Get related products (after category/subCategory updated)
  useEffect(() => {
    if (category && subCategory) {
      const relatedPdtData = products.filter(
        (item) =>
          item.category === category &&
          item.type === subCategory &&
          item.id !== id // exclude current product
      );
      setRelatedPdt(relatedPdtData);
    }
  }, [category, subCategory, products, id]);

  if (!productData || !productData.image) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="my-10 flex flex-col md:flex-row h-[500px]">
        <img
          src={productData.image.url}
          alt=""
          className="md:w-1/2 object-cover"
        />
        <div className="md:w-1/2 md:mt-0 mt-10 px-10 flex flex-col justify-between gap-5">
          <h1 className="text-3xl">{productData.title}</h1>
          <p className="text-xl">${productData.price}</p>
          <p>{productData.description}</p>
          <div>
            <p>Select Size</p>
            <div className="flex my-2">
              {productData.size.map((size) => (
                <span
                  key={size}
                  onClick={() => setSelectSize(size)}
                  className={`h-10 w-10 border m-1 flex justify-center items-center cursor-pointer ${
                    size === selectSize ? "text-white bg-black" : ""
                  }`}
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
          <span
            onClick={(e) => {
              handleClick(e), handlesizeError(selectSize);
            }}
            className={`bg-black text-white font-medium py-2 text-center border w-[150px] px-4 py-2 rounded-md text-white transition-colors duration-150 ${
              clicked ? "bg-white text-black" : "bg-black"
            }`}
          >
            Add To Cart
          </span>
          <hr className="my-5" />
          <div>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Description / Reviews Tabs */}
      <div>
        <div className="flex">
          <div className="border w-[171px] h-[70px] flex justify-center items-center">
            Description
          </div>
          <div className="border w-[171px] h-[70px] flex justify-center items-center">
            Reviews
          </div>
        </div>
        <div className="border py-5 px-8">
          <p className="mb-5">
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>

      {/* Related Products */}
      <Text text1={"RELATED"} text2={"PRODUCTS"} />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 sm:px-0">
        {relatedPdt.map((relPdtData, index) => (
          <Pdt key={relPdtData.id} pdt={relPdtData} />
        ))}
      </div>
    </div>
  );
};

export default Product;
