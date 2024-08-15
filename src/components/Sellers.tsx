"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { star } from "@/assets/image";

import { FaEye, FaCartShopping, FaRegHeart, FaHeart } from "react-icons/fa6";
import ProductCard from "./ProductPage/ProductCard";

const Sellers = () => {
   /*  const [clickedStates, setClickedStates] = useState<boolean[]>(items.map(() => false)); */
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
  /*   const handleClick = (index: number) => {
        const newClickedStates = [...clickedStates];
        newClickedStates[index] = !newClickedStates[index];
        setClickedStates(newClickedStates);
    }; */
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
        <div className="desktop max-md:w-[95%] flex flex-col justify-center items-center gap-10 py-8">
            <div className="flex w-full flex-col sm:flex-row items-center justify-between">
                <h3 className="font-bold text-4xl text-[#525566] font-poppins">Weekly bestsellers</h3>
                <div className="text-sm flex gap-2 text-[#525566] font-poppins">
                    <a href="#" className="underline decoration-2 underline-offset-4 decoration-orange-500">All</a>
                    <a href="#">Chairs</a>
                    <a href="#">Sofas</a>
                    <a href="#">Armchairs</a>
                    <a href="#">Tables</a>
                </div>
            </div>
            <div className="grid grid-cols-3 w-full max-md:grid-cols-2 group max-xl:grid-cols-3 gap-8 max-md:gap-3">
                {products.map((item, _id) => (
                    <ProductCard key={item._id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Sellers;
