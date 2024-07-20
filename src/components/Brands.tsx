import React from 'react';
import Image from 'next/image';
import { brands, } from 'public/data';
const Brands = () => {
    return (
        <div className='desktop  max-md:w-[95%] flex flex-col  gap-10 max-md:gap-4 py-8'>
            <div className='  flex-col   flex gap-2 max-md:gap-1 text-left w-full '>
                <h3 className=' font-bold text-2xl text-gray-800'>
                    Shopping by brands
                </h3>
                <p className='text-sm text-gray-400'>Discover lots products from poplular brands</p>
            </div>
            <div className='flex items-center max-lg:flex-col  w-full justify-between  gap-6   '>
                {brands.map((brand, index) => (
                    <div key={index} className='relative overflow-hidden group cursor-pointer'>
                        <div className='w-full  h-full bg-black/60 absolute rounded-lg opacity-0 lg:group-hover:opacity-80  duration-500'></div>
                        <Image className='w-[300px]  max-lg:w-[500px] ' src={brand.src} alt={brand.name} />
                        <div className='absolute top-6 max-xl:top-8 left-4'>
                            <Image className='max-xl:w-10 max-xl:h-10' src={brand.logo} alt="elitisbrand" />
                        </div>
                        <div className='absolute  left-24 max-xl:left-16 space-y-2 xl:opacity-0 lg:group-hover:opacity-100 lg:top-[-100%] lg:group-hover:top-7 max-lg:top-7 duration-500 '>
                            <p className='text-xl max-xl:text-base font-bold text-white max-lg:text-black '>{brand.name}</p>
                            <p className='text-white max-lg:text-black max-xl:text-xs text-sm'>{brand.place}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Brands;
