"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(async () => {
          const res = await axios.get("http://localhost:7000/api/auth/product", {
            withCredentials: true,
          });
          setProducts(res.data);
          setLoading(false);
        }, 2000);
      } catch (err) {
        console.error("Error fetching product data:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
        <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 animate-pulse">
          Loading products...
        </h2>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-700 dark:text-white">
        Product List
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((item: any) => (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {item.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Address: {item.Address}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Phone: {item.phone}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
