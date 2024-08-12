import React from 'react';
import Image from 'next/image';
import { brands, } from '@/assets/data';
const Brands = () => {
    return (
        <div className='desktop  max-md:w-[95%] flex flex-col  gap-10 max-md:gap-4 py-8'>
            <div className='  flex-col   flex gap-2 max-md:gap-1 text-center w-full '>
                <h3 className=' font-bold text-4xl text-gray-800'>
                    Shopping by brands
                </h3>
                <p className='text-base text-gray-400'>Discover lots products from poplular brands</p>
            </div>
            <div className='flex items-center max-lg:flex-col  w-full justify-between  gap-6   '>
                {brands.map((brand, index) => (
                    <div key={index} className='relative  group cursor-pointer'>
                        <div className='w-full  h-full bg-black/60 absolute rounded-lg '></div>                        
                        <Image className='w-[300px]  max-lg:w-[500px] ' src={brand.src} alt={brand.name} />                        
                        {/* <div className='absolute top-6 max-xl:top-8 max-lg:top-6 left-4 bg-white'>
                            <Image className='max-xl:w-10 max-xl:h-10 max-lg:w-20 max-lg:h-20 ' src={brand.logo} alt="elitisbrand" />
                        </div>
                        <div className='absolute  left-24 max-xl:left-16 max-lg:left-28  space-y-2 top-7 bg-white'>
                            <p className='text-xl max-xl:text-base  max-lg:text-3xl font-bold   '>{brand.name}</p>
                            <p className='  max-xl:text-xs max-lg:text-2xl text-sm'>{brand.place}</p>
                        </div> */}
                        <div className='absolute pl-4 top-0 bg-white w-full h-20 max-lg:h-[100px] flex items-center gap-4  border-x-2 border-t-2 rounded-t-lg border-gray-400'>
                            <Image className='max-xl:w-10 max-xl:h-10 max-lg:w-20 max-lg:h-20 ' src={brand.logo} alt="elitisbrand" />
                            <div className="flex flex-col gap-2">
                                <p className='text-xl max-xl:text-base  max-lg:text-3xl font-bold   '>{brand.name}</p>
                                <p className='  max-xl:text-xs max-lg:text-2xl text-sm'>{brand.place}</p>
                            </div>
                        </div>
                    </div>                                                            
                ))}
            </div>
        </div>
    );
}

export default Brands;
