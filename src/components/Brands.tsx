import React from 'react';
import Image from 'next/image';
import { elitispic, elitislogo, HAYpic, HAYlogo, kettallogo, kettalpic, lladropic, lladrologo, poliformpic, poliformlogo } from "../../public/image";
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
            <div className='flex items-center max-lg:flex-col  w-full justify-between gap-6   '>
                {brands.map((brand, index) => (
                    <div key={index} className='relative  cursor-pointer'>
                        <Image className='w-[300px]  max-lg:w-[500px] ' src={brand.src} alt={brand.name} />
                        <div className='absolute top-6 max-xl:top-8 left-4'>
                            <Image className='max-xl:w-10 max-xl:h-10' src={brand.logo} alt="elitisbrand" />
                        </div>
                        <div className='absolute top-7 left-24 max-xl:left-16 space-y-2 '>
                            <p className='text-xl max-xl:text-base font-bold text-white '>{brand.name}</p>
                            <p className='text-white max-xl:text-xs text-sm'>{brand.place}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Brands;
