import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const List = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products`);
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("adminToken");
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      fetchData();
    } catch (error) {
      console.error("Error deleting product:", error.response?.data || error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleProductAdded = () => {
    fetchData();
  };

  return (
    <div className="h-screen bg-white p-4 mt-2 w-full">
      <div className="h-full max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">All Products List</h2>
          <div className="bg-green-50 text-green-600 px-4 py-2 rounded-md hidden">
            Product Added
          </div>
          <Link to="/add">
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              Add Product
            </button>
          </Link>
        </div>

        {/* Product List Table */}
        <div className="bg-white rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {products.map((product, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <img
                      src={product.image.url}
                      alt={product.title}
                      className="w-12 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {product.title}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    ${product.price}
                  </td>
                  <td className="px-6 py-4 flex gap-2">
                    {/* Edit Button */}
                    <Link
                      to={`/edit/${product._id}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Edit
                    </Link>

                    {/* Delete Button */}
                    <button
                      className="text-gray-600 hover:text-red-600"
                      onClick={() => handleDelete(product._id)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default List;
