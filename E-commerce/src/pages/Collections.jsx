import React, { useEffect, useState, useContext } from "react";
import Text from "../components/Text";
import Pdt from "../components/Pdt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { ShopContext } from "../context/ShopContext";

const Collections = () => {
  const { products } = useContext(ShopContext);

  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [visible, setVisible] = useState(true); // Filters visible by default
  const [loading, setLoading] = useState(true);

  // Update filtered data whenever products, filters, or sortOption change
  useEffect(() => {
    if (!products || products.length === 0) {
      setFilteredData([]);
      setLoading(true);
      return;
    }

    let newData = products.filter((data) => {
      const matchesCategory =
        category.length === 0 || category.includes(data.category);
      const matchesType =
        subCategory.length === 0 || subCategory.includes(data.type);
      return matchesCategory && matchesType;
    });

    if (sortOption === "lowToHigh") {
      newData.sort((a, b) => a.price - b.price);
    } else if (sortOption === "highToLow") {
      newData.sort((a, b) => b.price - a.price);
    }

    setFilteredData(newData);
    setLoading(false);
  }, [products, category, subCategory, sortOption]);

  const handleCategory = (e) => {
    const name = e.target.name;
    const updated = category.includes(name)
      ? category.filter((item) => item !== name)
      : [...category, name];
    setCategory(updated);
  };

  const handleSubCategory = (e) => {
    const name = e.target.name;
    const updated = subCategory.includes(name)
      ? subCategory.filter((item) => item !== name)
      : [...subCategory, name];
    setSubCategory(updated);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  if (loading) {
    return (
      <p className="text-center mt-10 text-lg font-medium">
        Loading products...
      </p>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-start mt-10 gap-10 items-center">
      {/* Left Side - Filters */}
      <div className="left-side w-full sm:w-1/5">
        <div
          className="my-1 text-2xl font-medium cursor-pointer flex items-center justify-between"
          onClick={() => setVisible(!visible)}
        >
          <span>FILTERS</span>
          <FontAwesomeIcon
            icon={faAngleDown}
            className={`transition-transform duration-300 ${
              visible ? "" : "rotate-[-90deg]"
            }`}
          />
        </div>

        <div
          className={`${
            visible ? "block" : "hidden"
          } border p-3 flex flex-col gap-4 mb-5`}
        >
          <div>
            <p className="font-semibold mb-2">CATEGORIES</p>
            {["Men", "Women", "Kids"].map((cat) => (
              <label key={cat} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name={cat}
                  checked={category.includes(cat)}
                  onChange={handleCategory}
                />
                {cat}
              </label>
            ))}
          </div>

          <div>
            <p className="font-semibold mb-2">TYPE</p>
            {["Topwear", "Bottomwear", "Winterwear"].map((type) => (
              <label key={type} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name={type}
                  checked={subCategory.includes(type)}
                  onChange={handleSubCategory}
                />
                {type}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Products */}
      <div className="right-side w-4/5">
        <div className="flex justify-between flex-wrap w-full sm:w-auto mb-4">
          <Text text1={"ALL"} text2={"COLLECTIONS"} />

          <div className="border p-2 mt-2 flex items-center gap-2">
            Sort By:
            <select
              value={sortOption}
              onChange={handleSortChange}
              className="border p-1 rounded"
            >
              <option value="">Relevant</option>
              <option value="lowToHigh">Price: Low To High</option>
              <option value="highToLow">Price: High To Low</option>
            </select>
          </div>
        </div>

        {filteredData.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">
            No products match your filters.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {filteredData.map((pdt, index) => (
              <Pdt key={index} pdt={pdt} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Collections;
