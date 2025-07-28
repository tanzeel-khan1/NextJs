'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

type Products = {
    img: string;
    price: string;
    description: string;
    service: string;
}
const Api = () => {
    const [data, setData] = useState<Products[]>([])

    useEffect(() =>{
        axios
        .get('http://localhost:5000/api/data/service')
        .then((res) => setData(res.data))
        .catch((err) => console.log(err))
    }, [])
 return (
  <div className="p-6 bg-gray-100 min-h-screen">
    
    <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Products</h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

      {data.map((item, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-xl transition-all duration-300">
          <img src={item.img} className="h-40 w-full object-cover rounded-xl mb-4"/>
          <h2 className="text-xl font-semibold text-green-700 mb-2">Rs. {item.price}</h2>
         
          <h3 className="text-md font-medium text-gray-800 mb-1">{item.service}</h3>
          <p className="text-sm text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);

}

export default Api
