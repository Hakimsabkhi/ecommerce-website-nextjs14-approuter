"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
interface BrandData {
    id: string;
    name: string;
    imageUrl: string;
    logoUrl: string;
    place: string;
  }
const Brands = () => {
    const [brands, setBrands] = useState<BrandData[]>([]);

    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await fetch('/api/brand');
          const data: BrandData[] = await response.json(); // Ensure data is an array
          setBrands(data);
        } catch (error) {
          console.error('Failed to fetch categories', error);
        }
      };
  
      fetchCategories();
    }, []);
    return (
        <div className='desktop max-md:w-[95%] flex flex-col gap-10 max-md:gap-4 py-8'>
            <div className='flex-col flex gap-2 max-md:gap-1 text-center w-full'>
                <h3 className='font-bold text-4xl text-gray-800'>
                    Shopping by brands
                </h3>
                <p className='text-base text-[#525566]'>Discover lots of products from popular brands</p>
            </div>
            <div className='flex items-center max-lg:flex-col w-full justify-between gap-6'>
                {brands.map((brand, index) => (
                    <div key={index} className='relative group cursor-pointer'>
                        <div className='w-full h-full bg-black/60 absolute rounded-lg'></div>
                        <Image 
                            className='w-[300px] max-lg:w-[500px]' 
                            src={brand.imageUrl} 
                            alt={brand.name} 
                            width={300} // Set appropriate width
                            height={200} // Set appropriate height
                            priority={index === 0} // Eagerly load the first image
                        />
                        <div className='absolute pl-4 top-0 bg-white w-full h-20 max-lg:h-[100px] flex items-center gap-4 border-x-2 border-t-2 rounded-t-lg border-gray-400'>
                            <Image 
                                className='max-xl:w-10 max-xl:h-10 max-lg:w-20 max-lg:h-20' 
                                src={brand.logoUrl} 
                                alt={brand.name} 
                                width={40} // Set appropriate width
                                height={40} // Set appropriate height
                            />
                            <div className="flex flex-col gap-2">
                                <p className='text-xl max-xl:text-base max-lg:text-3xl font-bold'>{brand.name}</p>
                                <p className='max-xl:text-xs max-lg:text-2xl text-sm'>{brand.place}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Brands;
