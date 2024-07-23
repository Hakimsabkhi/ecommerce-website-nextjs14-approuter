import React from 'react';
import Image from 'next/image';
import { heart, kitchen2,star,f1,f2,f3 } from "../../public/image";
import {itemsFurniture} from "../../public/data";
import { CiShoppingCart } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { FaRegHeart } from "react-icons/fa6";

const Furniture = () => {
    return (
        <div className="desktop  max-md:w-[95%] flex flex-col justify-center items-center gap-10 py-8">
            <div className="flex  w-full flex-col gap-2  items-center   ">
                <h3 className="font-bold text-2xl text-gray-800">Furniture collection of the week</h3>
                <div className="text-sm flex gap-2 text-gray-400">
                    <p>The msot popular products from the collection</p>
                </div>
            </div>
            <div className='flex max-2xl:flex-col w-full justify-between gap-8 items-center'>
                <Image className='2xl:hidden md:w-full md:h-40' src={f3} alt="furniture" />
                <Image className='max-2xl:hidden' src={f1} alt="furniture" />
            <div className="grid grid-cols-3  w-full  max-xl:grid-cols-2 group    gap-8  max-md:gap-3">
                {itemsFurniture.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg duration-500  lg:group-hover:scale-[0.85] lg:hover:!scale-100 h-[397px]  max-md:h-[290px]  relative">                        
                        <Image
                            className=" absolute inset-0 max-md:w-[140px] mx-auto top-5  "
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
                                            <p className="line-through opacity-50 max-sm:text-sm">{item.oldPrice}</p>
                                            <p className='text-white rounded-lg bg-orange-400 px-2'>20%</p>
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
                                    <button className="bg-orange-400 rounded-lg py-5 w-[50%] items-center flex relative justify-center overflow-hidden transition duration-300 ease-out group/box text-white  ">
                                        <p className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform lg:group-hover/box:translate-x-[10%] ease  ">add to cart</p>
                                        <p className="  text-white absolute flex items-center justify-center w-full h-full duration-300 -translate-x-[100%] lg:group-hover/box:translate-x-[-35%] ease  ">                                        
                                            <FaCartShopping   className="w-6  h-6" aria-hidden="true" fill="currentColor"/>                                                                                                                    
                                        </p>
                                    </button>                                                                        
                                    <button className="bg-white rounded-lg py-5 w-[30%] items-center flex relative justify-center overflow-hidden transition duration-300 ease-out group/box text-orange-400 border border-orange-400  ">
                                        <p className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform lg:group-hover/box:translate-y-[-100%] ease   ">View</p>
                                        <p className="text-orange-400 absolute  w-full h-full flex items-center justify-center duration-300 -translate-y-[-100%] lg:group-hover/box:translate-y-0 ease  ">
                                            <FaEye   className=" w-5 h-5   " aria-hidden="true" fill="currentColor"/>                                                                                                                    
                                        </p>
                                    </button>
                                    <button className="bg-white rounded-lg py-5 w-[13%] items-center flex relative justify-center  text-orange-400 border border-orange-400  ">
                                        <p className="absolute flex items-center justify-center w-full h-full    ">
                                            <FaRegHeart   className=" w-5 h-5   " aria-hidden="true" fill="currentColor"/>
                                        </p>                                        
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
                <Image className='max-2xl:hidden' src={f2} alt="furniture" />
                <Image className='2xl:hidden md:w-full md:h-40' src={f3} alt="furniture" />
            </div>
        </div>
    );
}

export default Furniture;




