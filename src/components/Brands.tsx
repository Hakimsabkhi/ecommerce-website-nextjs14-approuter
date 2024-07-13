import React from 'react';
import Image from 'next/image';
import { elitispic, elitislogo, HAYpic, HAYlogo, kettallogo, kettalpic, lladropic, lladrologo, poliformpic, poliformlogo } from "../../public/image";
import { brands } from 'public/data';
const Brands = () => {
    return (
        <div className='centred flex flex-col  gap-10 max-md:gap-4 py-8'>
            <div className='  flex-col   flex gap-2 max-md:gap-1 text-left w-full '>
                <h3 className=' font-bold text-2xl text-gray-800'>
                    Shopping by brands
                </h3>
                <p className='text-sm text-gray-400'>Discover lots products from poplular brands</p>
            </div>
            <div className='flex items-center w-full justify-between gap-6  max-md:flex-col max-md:w-full '>
                {brands.map((brand, index) => (
                    <div key={index} className='relative w-full '>
                        <Image className='w-[300px]' src={brand.src} alt={brand.name} />
                        <div className='absolute top-6 left-4'>
                            <Image src={brand.logo} alt="elitisbrand" />
                        </div>
                        <div className='absolute top-7 left-24 space-y-2 '>
                            <p className='text-xl  font-bold text-white '>{brand.name}</p>
                            <p className='text-white text-sm'>{brand.place}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Brands;
