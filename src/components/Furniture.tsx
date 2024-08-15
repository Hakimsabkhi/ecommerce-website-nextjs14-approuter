"use client"
import React, { useEffect, useState }  from 'react';
import Image from 'next/image';
import { heart, kitchen2,star,f1,f2,f3 } from "@/assets/image";
import {itemsFurniture} from "@/assets/data";
import { CiShoppingCart } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import ProductCard from './ProductPage/ProductCard';

const Furniture = () => {
/*     const [clickedStates, setClickedStates] = useState(itemsFurniture.map(() => false));

    const handleClick = (index: number) => {
        // Create a new array with the updated state for the clicked item
        const newClickedStates = [...clickedStates];
        newClickedStates[index] = !newClickedStates[index];
        setClickedStates(newClickedStates);
    }; */
    const [products, setProducts] =  useState<ProductsData[]>([])
    interface Brand {
        _id: string;
        name: string;
      }
    
    interface ProductsData {
        _id: string;
        name: string;
        description: string;
        ref: string;
        price: number;
        imageUrl?: string;
        brand?: Brand; // Make brand optional
        stock: number;
        discount?: number;
        color?: string;
        material?: string;
        status?: string;
      }
      useEffect(() => {
        const fetchProduct = async () => {          
            try {
              const response = await fetch(`/api/products`);
              const data = await response.json();
              setProducts(data);
            } catch (error) {
              console.error("Error fetching products:", error);
            } };
        fetchProduct();
      },[]);

    return (
        <div className="desktop  max-md:w-[95%] flex flex-col justify-center items-center gap-10 py-8">
            <div className="flex  w-full flex-col gap-2  items-center   ">
                <h3 className="font-bold text-4xl text-gray-800">Furniture collection of the week</h3>
                <div className="text-base flex gap-2 text-[#525566]">
                    <p>The msot popular products from the collection</p>
                </div>
            </div>
            <div className='flex max-2xl:flex-col w-full justify-between gap-8 items-center'>
                <Image className='2xl:hidden md:w-full md:h-40' src={f3} alt="furniture" />
                <Image className='max-2xl:hidden' src={f1} alt="furniture" />
            <div className="grid grid-cols-3  w-full  max-xl:grid-cols-2 group    gap-8  max-md:gap-3">
                {products.map((item, _id) => (
                    <ProductCard key={item._id} item={item} />
                ))}
            </div>
                <Image className='max-2xl:hidden' src={f2} alt="furniture" />
                <Image className='2xl:hidden md:w-full md:h-40' src={f3} alt="furniture" />
            </div>
        </div>
    );
}

export default Furniture;





