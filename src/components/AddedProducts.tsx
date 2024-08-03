"use client"
import React from 'react';
//import { addedproducts } from "@//public/data";
import { useEffect, useState } from 'react';
import axios from 'axios';
type Product = {
    id: string;
    name: string;
    description: string;
    ref:string;
    price: number;
    imageUrl: string;
    category: string;
    stock: number;
    user:  string; // Reference to a User document or User ID
    discount: number;
    createdAt: Date;
    updatedAt: Date;
  
  };
  
const AddedProducts = () => {
    const [addedproducts, setAddedproducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getProducts = async () => {
    try {
      const response = await axios.get('/api/products'); // Note the use of axios.get here
       setAddedproducts(response.data);
    } catch (err: any) {
      setError(`[products_GET] ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
    return (
        <div className='mx-auto w-[70%] py-8 flex flex-col gap-8 '>
            <div className="flex items-center justify-between">
                <p className='text-3xl font-bold'>ALL Products</p>
                <button className='bg-orange-400 text-white rounded-lg w-[15%] h-10'>
                    <p className=''>
                        Add the new Product
                    </p>
                </button>
            </div>
            <div className="flex flex-col gap-4">
                <div className='flex items-center gap-44 text-xl'>
                    <p >
                        ID
                    </p>
                    <p className=''>
                        Ref
                    </p>
                    <p>
                        Name
                    </p>
                    <p>
                        ImageURL
                    </p>
                    <p>
                        Created by
                    </p>
                </div>
                <div className="flex flex-col gap-0.5">
                    {addedproducts.map((item,index) => (
                        <div key={index} className='flex gap-0.5'>                            
                            <div className='bg-[#15335D] h-16 w-[20%] flex text-left items-center '>
                                <p className=' px-4 py-2 text-white'>{item.id}</p>
                            </div>
                            <div className='bg-[#15335D] h-16 w-[20%] flex text-left items-center '>
                                <p className=' px-4 py-2 text-white'>{item.ref}</p>
                            </div>
                         <div className='bg-[#15335D] h-16 w-[20%] flex text-left items-center '>
                                <p className=' px-4 py-2 text-white'>{item.name}</p>
                            </div>
                            <div className='bg-[#15335D] h-16 w-[30%]  flex justify-center items-center'>
                                <p className=' px-4 py-2 text-white'>{item.imageUrl}</p>
                            </div>
                            <div className='bg-[#15335D] h-16 w-[50%] flex items-center justify-between pr-2 '>
                                <p className=' px-4 py-2 text-white text-left'>{item.user}</p>
                                <div className="flex items-center gap-1 text-right text-white">
                                    <button className="bg-orange-400 w-28 h-14 rounded-md items-center">
                                        <p className="">Modify</p>
                                    </button>
                                    <button className="bg-orange-400 w-28 h-14 rounded-md items-center">
                                        <p className="">Delete</p>
                                    </button>
                                </div>
                            </div>                       
                        </div>                                 
                    ))}           
                </div>
            </div>
        </div>
    );
}

export default AddedProducts;
