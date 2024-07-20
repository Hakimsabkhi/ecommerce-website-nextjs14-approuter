import React from 'react';
import Image from 'next/image';
import { mags, frames, skygarden, heart, kitchen2 } from "../../public/image";
import {itemsFurniture} from "../../public/data";

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
                <div className=' flex max-md:flex-col gap-10 max-xl:justify-center max-xl:items-center max-xl:gap-4  '>
                    {itemsFurniture.map((item, index) => (
                        <div key={index} className='bg-white rounded-lg  w-[300px] h-[397px]  max-md:h-[400px]  relative'>
                            <Image className='absolute cursor-pointer right-1 top-1 w-4' src={heart} alt="heart" />
                            <Image className=' absolute inset-0 mx-auto top-5 max-md:w-[200px]  max-md:h-[200px]' src={item.src} alt={item.name} />
                            <div className='flex-col flex bottom-0 absolute w-full px-2'>                            
                                <p className='text-gray-700 cursor-pointer font-bold'>{item.name}</p>                                                            
                                <p className='text-gray-400 cursor-pointer hover:opacity-50'>{item.type}</p>                                                            
                                <p className='text-orange-800'>{item.price}</p>                            
                                <div className='flex xl:hidden justify-center'>
                                <p className='bg-orange-400 rounded-full text-center w-4/5 text-white py-2 mb-1'>add to cart</p>
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




