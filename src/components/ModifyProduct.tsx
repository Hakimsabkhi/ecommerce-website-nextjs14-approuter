"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useParams, useRouter } from 'next/navigation';

// Define the Category and Brand types
interface Category {
    _id: string;
    name: string;
}

interface Brand {
    _id: string;
    name: string;
}

const AddProduct = () => {
    const params = useParams();
    

    return (
        <form  className='mx-auto w-[90%] max-lg:w-[90%] py-8 max-lg:pt-20 flex flex-col gap-8'>
            <p className='text-3xl font-bold'>Modify</p>
            
            <div className='flex max-lg:flex-col items-center gap-2 max-lg:gap-8'>
                <div className='flex items-center w-[40%] max-lg:w-full max-lg:justify-between gap-2'>
                    <p className="text-xl font-bold">Name *</p>
                    <input 
                        type="text" 
                        name="name"
                        
                        
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[80%] block p-2.5" 
                        required 
                    />
                </div>
                <div className='flex items-center w-[30%] max-lg:w-full max-lg:justify-between gap-2'>
                    <p className="text-xl font-bold">Upload Image *</p>
                    <input 
                        type="file" 
                        
                        className='hidden'
                        id='file-upload'
                         
                    />
                    <label htmlFor='file-upload' className='bg-[#EFEFEF] text-white rounded-md w-[50%] h-10 border-2 flex justify-center items-center cursor-pointer'>
                        <p className="text-black">
                            Select an Image
                        </p>
                    </label>
                </div>
                
                <div className='flex items-center w-[30%] max-lg:w-full max-lg:justify-between gap-4'>
                    <p className="text-xl font-bold">Category *</p>
                    <select 
                        name="category"
                        
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[60%] block p-2.5" 
                        required
                    >
                        <option value="">Select a category</option>
                        
                    </select>
                </div>
                <div className='flex items-center w-[30%] max-lg:w-full max-lg:justify-between gap-4'>
                    <p className="text-xl font-bold">Brand *</p>
                    <select 
                        name="brand"
                        
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[60%] block p-2.5" 
                        required
                    >
                        <option value="">Select a brand</option>
                        
                    </select>
                </div>
            </div>
            <div className='flex max-lg:flex-col items-center max-lg:gap-8 justify-between'>
                <div className='flex items-center w-[30%] max-lg:w-full max-lg:justify-between gap-4'>
                    <p className="text-xl font-bold">Quantity *</p>
                    <input 
                        type="text" 
                        name="stock"
                        
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[60%] block p-2.5" 
                        required 
                    />
                </div>
                <div className='flex items-center w-[30%] max-lg:w-full max-lg:justify-between gap-4'>
                    <p className="text-xl font-bold">Ref *</p>
                    <input 
                        type="text" 
                        name="ref"
                        
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[60%] block p-2.5" 
                        required 
                    />
                </div>
                <div className='flex items-center w-[30%] max-lg:w-full max-lg:justify-between gap-4'>
                    <p className="text-xl font-bold">Price *</p>
                    <input 
                        type="text" 
                        name="price"
                        
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[60%] block p-2.5" 
                        required 
                    />
                </div>
                <div className='flex items-center w-[30%] max-lg:w-full max-lg:justify-between gap-4'>
                    <p className="text-xl font-bold">Discount</p>
                    <input 
                        type="text" 
                        name="discount"
                        
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[60%] block p-2.5" 
                    />
                </div>
            </div>
            <div className='flex items-center w-full gap-4'>
                <p className="text-xl font-bold">Description</p>
                <textarea 
                    name="description"
                    
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full block p-2.5" 
                    required 
                />
            </div>
            <div className="w-full flex justify-end">
                <button type="submit" className='bg-orange-400 text-white rounded-md w-[20%] max-lg:w-[50%] h-10'>
                    <p className="text-white">
                        Modify
                    </p>
                </button>
            </div>
        </form>
    );
};

export default AddProduct;
