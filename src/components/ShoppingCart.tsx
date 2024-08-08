"use client";
import React, { useState,  } from 'react';
import { chair21 } from 'public/image';
import { shoppingcart } from 'public/data';
import Image from 'next/image';
import { IoCheckboxOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
const ShoppingCart = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount(count + 1);
    const decrement = () => {
        if (count > 0) {
          setCount(count - 1);
        }
      };
    return (
        <div className="py-20 w-full flex justify-center">
            <div className='w-[80%] rounded-lg border-2 p-8 flex justify-between max-lg:hidden'>
                <div className='flex flex-col w-[65%] divide-y-2'>
                    <h1 className='text-3xl font-bold py-4'>Shopping Cart</h1>
                    <div className='flex flex-col divide-y-2'>
                        {shoppingcart.map((item,index) => (
                            <div key={index} className="py-4 flex justify-between ">
                                <div className='flex gap-4'>
                                    <Image className=" rounded-lg"src={item.src} alt="chair"/>
                                    <div className="flex flex-col justify-between"> 
                                        <div className="flex flex-col gap-4">
                                            <p className='text-xl'>{item.name}</p>
                                            <div className='flex items-center divide-x-2 text-gray-400'>
                                                <p className="pr-2">{item.color}</p>
                                                <p className="px-2">{item.size}</p>
                                            </div>
                                            <p>{item.price}</p>
                                        </div>
                                        <p className="text-gray-400 font-bold flex items-center gap-2"><IoCheckboxOutline size={25} /> En Stock</p>
                                    </div>
                                </div>
                                <div className="flex items-center ">
                                    <p className="py-2 px-8 border-2 rounded-l-lg">{count}</p>
                                    <div className="border-t-2 border-r-2 border-b-2 py-1 px-2 rounded-r-lg">
                                        <IoIosArrowUp className="cursor-pointer" onClick={increment} />
                                        <IoIosArrowDown className="cursor-pointer" onClick={decrement} />
                                    </div>                        
                                </div>
                                <RxCross1 size={35}/>                            
                            </div>                       
                        ))} 
                    </div>
                </div>
                <div className='w-[30%] rounded-lg bg-[#EFEFEF] h-fit p-6 flex flex-col gap-4 items-center'>
                    <div className='flex flex-col divide-y-2 text-gray-400 w-full'>
                        <div className='flex justify-between items-center py-4'>
                            <p>item(3)</p>
                            <p>65.73</p>
                        </div>
                        <div className='flex justify-between items-center py-4'>
                            <p>Shipping adn handing</p>
                            <p>5.50</p>
                        </div>
                        <div className='flex justify-between items-center py-4'>
                            <p>Before tax</p>
                            <p>62.23</p>
                        </div>
                        <div className='flex justify-between items-center py-4'>
                            <p>tax collected</p>
                            <p>8.21</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between w-full'>
                        <p className='text-3xl'>Order Total:</p>
                        <p>70.44</p>
                    </div>
                    <button className='text-white bg-orange-400 hover:bg-[#15335D] h-10 w-[50%] text-xl font-bold rounded-md'>Checkout</button>
                </div>
            </div>
            {/* mobile */}            
            <div className='w-[95%]   py-8 flex flex-col gap-8 lg:hidden'>
                <div className='flex flex-col w-full divide-y-2 px-4 border-2 rounded-lg'>
                    <h1 className='text-3xl font-bold py-4'>Shopping Cart</h1>
                    <div className='flex flex-col divide-y-2'>
                        {shoppingcart.map((item,index) => (
                            <div key={index} className="py-4 flex flex-col gap-4 justify-between ">
                                <div className='w-full  flex justify-end'>
                                    <RxCross1 size={35}/>                            
                                </div>
                                <div className='flex gap-4 max-md:flex-col '>
                                    <Image className="max-md:w-full h-[300px]" src={item.src} alt="chair"/>
                                    <div className="flex gap-8 max-md:justify-between">
                                        <div className="flex flex-col justify-between"> 
                                            <div className="flex flex-col gap-4">
                                                <p className='text-xl'>{item.name}</p>
                                                <div className='flex items-center divide-x-2 text-gray-400'>
                                                    <p className="pr-2">{item.color}</p>
                                                    <p className="px-2">{item.size}</p>
                                                </div>
                                                <p>{item.price}</p>
                                            </div>
                                            <p className="text-gray-400 font-bold flex items-center gap-2"><IoCheckboxOutline size={25} /> En Stock</p>
                                        </div>
                                        <div className="flex items-center ">
                                            <p className="py-2 px-8 border-2 rounded-l-lg">{count}</p>
                                            <div className="border-t-2 border-r-2 border-b-2 py-1 px-2 rounded-r-lg">
                                                <IoIosArrowUp className="cursor-pointer" onClick={increment} />
                                                <IoIosArrowDown className="cursor-pointer" onClick={decrement} />
                                            </div>                        
                                        </div>
                                    </div>
                                </div>                                                                
                            </div>                       
                        ))} 
                    </div>
                </div>
                <div className='w-full rounded-lg bg-[#EFEFEF] h-fit p-6 flex flex-col gap-4 items-center'>
                    <div className='flex flex-col divide-y-2 text-gray-400 w-full'>
                        <div className='flex justify-between items-center py-4'>
                            <p>item(3)</p>
                            <p>65.73</p>
                        </div>
                        <div className='flex justify-between items-center py-4'>
                            <p>Shipping adn handing</p>
                            <p>5.50</p>
                        </div>
                        <div className='flex justify-between items-center py-4'>
                            <p>Before tax</p>
                            <p>62.23</p>
                        </div>
                        <div className='flex justify-between items-center py-4'>
                            <p>tax collected</p>
                            <p>8.21</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between w-full'>
                        <p className='text-3xl'>Order Total:</p>
                        <p>70.44</p>
                    </div>
                    <button className='text-white bg-orange-400 hover:bg-[#15335D] h-10 w-[50%] text-xl font-bold rounded-md'>Checkout</button>
                </div>
            </div>            
        </div>
    );
}

export default ShoppingCart;
