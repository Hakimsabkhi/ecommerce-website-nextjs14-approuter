import React from 'react';
import Image from 'next/image';
import { chair2, chair3, star, heart, chair4, chair5, table2, table3, table1, sofa2, sofa3, sofa4 } from "../../public/image";
import {items} from "../../public/data";

const Sellers = () => {
    return (
        <div className='centred flex flex-col justify-center items-center gap-10 py-8'>
            <div className='flex  w-full flex-col sm:flex-row items-center justify-between  '>
                <h3 className='font-bold text-2xl text-gray-800'>
                    Weekly bestsellers
                </h3>
                <div className='text-sm flex gap-2 text-gray-400'>
                    <a href="#" className='underline decoration-2 underline-offset-4 decoration-orange-500'>All</a>
                    <a href="#">Chairs</a>
                    <a href="#">Sofas</a>
                    <a href="#">Armchairs</a>
                    <a href="#">Tables</a>
                </div>
            </div>
            <div className='grid grid-cols-5 w-full  max-md:grid-cols-2  max-xl:grid-cols-3  gap-8  max-md:gap-3'>
                {items.map((item, index) => (
                    <div key={index} className='bg-white rounded-lg  h-[397px]  max-md:h-[332px]  relative'>
                        <Image className='absolute cursor-pointer right-1 top-1 w-4' src={heart} alt="heart" />
                        <Image className=' absolute inset-0 mx-auto top-5 max-md:w-[200px]  max-md:h-[200px]' src={item.src} alt={item.name} />
                        <div className='flex-col flex bottom-0 absolute w-full px-2'>
                            <div className='flex justify-between'>
                                <p className='text-gray-700 cursor-pointer font-bold'>{item.name}</p>
                                {item.rating && (
                                    <p className='flex gap-2 items-center'>{item.rating} <Image src={star} alt="star" /> </p>
                                )}
                            </div>
                            <p className='text-gray-400 cursor-pointer hover:opacity-50'>{item.type}</p>
                            <div className='flex gap-1'>
                                {item.oldPrice && (
                                    <p className='line-through opacity-50'>{item.oldPrice}</p>
                                )}
                                <p className='text-orange-800'>{item.price}</p>
                            </div>
                            <div className='flex xl:hidden justify-center'>
                                <p className='bg-orange-400 rounded-full text-center w-4/5 text-white py-2 mb-1'>add to cart</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sellers;

