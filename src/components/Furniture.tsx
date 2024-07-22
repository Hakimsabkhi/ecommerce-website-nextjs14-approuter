import React from 'react';
import Image from 'next/image';
import { heart, kitchen2,star } from "../../public/image";
import {itemsFurniture} from "../../public/data";
import { CiShoppingCart } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';

const Furniture = () => {
    return (
        <div className='desktop  max-md:w-[95%]  gap-4 flex justify-between max-xl:flex-col      py-8'>
            <div className='flex  gap-10 flex-col'>
                <div className='text-left max-md:text-center'>
                    <h3 className='font-bold text-2xl text-gray-800'>
                        Furniture collection of the week
                    </h3>
                    <p className='text-sm text-gray-400'>The most popular products from the collection</p>
                </div>
                <div className=' flex max-md:flex-col gap-10 max-xl:justify-center group max-xl:items-center max-xl:gap-4  '>
                    {itemsFurniture.map((item, index) => (
                        <div key={index} className='bg-white rounded-lg duration-500  lg:group-hover:scale-[0.85] lg:hover:!scale-100  w-[300px] h-[397px]  max-md:h-[400px]  relative'>
                            <Image className='absolute cursor-pointer right-1 top-1 w-5' src={heart} alt="heart" />
                            <Image className=' absolute inset-0 mx-auto top-5 max-md:w-[200px]  max-md:h-[200px]' src={item.src} alt={item.name} />
                            <div className='flex-col flex bottom-0 absolute w-full gap-1 px-2'>                            
                                <p className='text-gray-700 text-3xl cursor-pointer font-bold'>{item.name}</p>                                                                                            
                                <p className='text-orange-400 text-2xl font-bold'>{item.price}</p>
                                <div className="flex gap-2 items-center ">
                                    <Image className="size-5" src={star} alt="star" />
                                    <Image className="size-5" src={star} alt="star" />
                                    <Image className="size-5" src={star} alt="star" />
                                    <Image className="size-5" src={star} alt="star" />
                                    <Image className="size-5" src={star} alt="star" />                                    
                                    <p className='font-bold text-xl '>{item.rating}</p>
                                 
                                </div>                            
                                <div className="flex mb-1 text-lg max-md:text-sm justify-between">
                                    <button className="bg-orange-400 rounded-lg py-1 w-[65%] items-center flex relative justify-center overflow-hidden transition duration-300 ease-out group/box text-white  ">
                                        <p className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform lg:group-hover/box:translate-x-[10%] ease  ">add to cart</p>
                                        <p className="  text-white absolute flex items-center justify-center w-full h-full duration-300 -translate-x-[100%] lg:group-hover/box:translate-x-[-30%] ease  ">
                                            <FaCartShopping   className="w-8 h-8" aria-hidden="true" fill="currentColor"/>                                                                                                                    
                                        </p>
                                    </button>
                                    <button className="bg-white rounded-lg py-5 w-[33%] items-center flex relative justify-center overflow-hidden transition duration-300 ease-out group/box text-orange-400 border border-orange-400  ">
                                        <p className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform lg:group-hover/box:translate-y-[-100%] ease   ">View</p>
                                        <p className="text-orange-400 absolute  w-full h-full flex items-center justify-center duration-300 -translate-y-[-100%] lg:group-hover/box:translate-y-0 ease  ">
                                            <FaEye   className=" w-5 h-5   " aria-hidden="true" fill="currentColor"/>                                                                                                                    
                                        </p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='  '>
                <Image className='rounded-lg cursor-pointer shadow-lg h-full  object-cover' src={kitchen2} alt="kitchen" />
            </div>
        </div>
    );
}

export default Furniture;




