import React, {useState} from 'react';
import Image from 'next/image';
import { twibble1, twibble2, twibble3, twibble4,star } from '../../../public/image';
import {Product,products} from '../../../public/data'; // Ensure the path is correct

import {
    
    heart,
} from "../../../public/image";
import { items } from "../../../public/data";
import { CiShop, CiShoppingCart,CiUser } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const FifthBlock: React.FC<{ product: Product }> = ({ product }) => {

    const firstFourProducts = products.slice(0, 5);
    const [clickedStates, setClickedStates] = useState(firstFourProducts.map(() => false));

    const handleClick = (index: number) => {  
        const newClickedStates = [...clickedStates];
        newClickedStates[index] = !newClickedStates[index];
        setClickedStates(newClickedStates);
    };
    return (
        <main className='max-lg:hidden desktop bg-white py-10 flex justify-center '>
            <div className="grid grid-cols-5 w-full  max-md:grid-cols-2 group  max-xl:grid-cols-3  gap-8  max-md:gap-3">
                {firstFourProducts.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg duration-500 border-2 cursor-pointer  lg:group-hover:scale-[0.85] lg:hover:!scale-100 h-[397px]  max-md:h-[290px]  relative">                        
                        <Image
                            className=" absolute inset-0 max-md:w-[140px] w-[250px] h-[200px] mx-auto top-5  "
                            src={item.src}
                            alt={item.name}
                        />
                        <div className="flex-col flex bottom-0 gap-1 absolute w-full px-2">
                            <div className='h-24 max-md:h-20'>
                                <p className="text-gray-700 cursor-pointer text-3xl max-md:text-xl font-bold">
                                    {item.name}
                                </p>
                                <div className="flex-col gap-1">
                                    <p className="text-orange-400 text-2xl max-md:text-lg font-bold">
                                        {item.price}
                                    </p>
                                    {item.oldPrice && (
                                        <div className="flex gap-1">
                                            <p className="line-through max-sm:text-sm opacity-50">{item.oldPrice}</p>
                                            <p className='text-white rounded-lg  bg-orange-400 px-2'>20%</p>
                                        </div>
                                    )}                                
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex gap-2 items-center">
                                    <Image className="size-4 max-md:size-4" src={star} alt="star" />
                                    <Image className="size-4 max-md:size-4" src={star} alt="star" />
                                    <Image className="size-4 max-md:size-4" src={star} alt="star" />
                                    <Image className="size-4 max-md:size-4" src={star} alt="star" />
                                    <Image className="size-4 max-md:size-4" src={star} alt="star" />
                                    <p className="flex  text-lg max-md:text-xs font-bold ">{item.rating} </p>
                                </div>                                                        
                                <div className="flex mb-1 text-lg max-md:text-sm justify-between">
                                <button className="AddtoCart bg-orange-400 hover:bg-[#15335D] text-white w-[50%] max-md:rounded-[3px] max-2xl:text-sm group/box">
                                        <p className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform lg:group-hover/box:translate-x-[10%] ease   ">Add to cart</p>
                                        <p className="  text-white absolute flex items-center justify-center w-full h-full duration-300 -translate-x-[100%] lg:group-hover/box:translate-x-[-35%] ease  ">
                                            <FaCartShopping className="w-6  h-6" aria-hidden="true" fill="currentColor" />
                                        </p>
                                    </button>
                                    <button className="AddtoCart bg-white  max-md:rounded-[3px]  w-[30%]  group/box text-orange-400 border border-orange-400  ">
                                        <p className="absolute font-poppins flex items-center justify-center w-full h-full transition-all duration-300 transform lg:group-hover/box:translate-y-[-100%] ease   ">View</p>
                                        <p className="text-orange-400 absolute  w-full h-full flex items-center justify-center duration-300 -translate-y-[-100%] lg:group-hover/box:translate-y-0 ease  ">
                                            <FaEye className=" w-5 h-5   " aria-hidden="true" fill="currentColor" />
                                        </p>
                                    </button>
                                    <button
                                        className="relative bg-white hover:bg-orange-400 max-md:rounded-[3px] AddtoCart w-[13%] group/box text-orange-400 hover:text-white border border-orange-400"
                                        onClick={() => handleClick(index)}
                                    >
                                        <p className="absolute flex items-center justify-center w-full h-full">
                                            <FaRegHeart className="w-5 h-5 max-2xl:w-3 max-2xl:h-3" aria-hidden="true" fill="currentColor" />
                                        </p>
                                        <p className={`absolute flex items-center justify-center w-full h-full ${clickedStates[index] ? 'opacity-100' : 'opacity-0'} group-hover/box:opacity-100`}>
                                            <FaHeart className="w-5 h-5 max-2xl:w-3 max-2xl:h-3" aria-hidden="true" fill="currentColor" />
                                        </p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default FifthBlock;