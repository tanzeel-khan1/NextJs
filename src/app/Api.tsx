'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
type Products = {
        img: string;
        price: string;
        service: string;
     }
 const fetchProducts = async (): Promise<Products[]> => {
        const res = await axios.get('http://localhost:5000/api/data/service');
        return res.data;
     }
const Api = () => {
    const {data, isLoading, isError} = useQuery<Products[]>({
     queryKey: ['products'],
     queryFn: fetchProducts,
    })
    if(isLoading)return <h1>loading</h1>
    if(isError) return <h1>error</h1>
  return (
   <div  className=" bg-red-700 p-6 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
  <h1 className="text-5xl font-bold text-center text-blue-900 mb-12 underline decoration-blue-400">
    Featured Products
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
    {data?.map((item, index) => (
        
      <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
        <img src={item.img}  alt={item.service}className="h-48 w-full object-cover"/>
        <div className="p-5">
          <h2 className="text-2xl font-bold text-green-700 mb-1"> Rs. {item.price}</h2>
          <h3 className="text-lg text-gray-800 font-medium mb-2"> {item.service}</h3>
        </div>
      </div>
    ))}
  </div>
</div>

  )
}

export default Api
