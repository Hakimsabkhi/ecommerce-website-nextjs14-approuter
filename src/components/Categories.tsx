"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
interface CategoryData {
    id: string;
    name: string;
    imageUrl: string;
  }
  interface Props {
    categories?: CategoryData[]; // Make categories optional
  }


const Categories: React.FC= () => {
    const [categories, setCategories] = useState<CategoryData[]>([]);

    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await fetch('/api/category');
          const data: CategoryData[] = await response.json(); // Ensure data is an array
          setCategories(data);
        } catch (error) {
          console.error('Failed to fetch categories', error);
        }
      };
  
      fetchCategories();
    }, []);

    return (
        <div className='desktop max-md:w-[95%] flex flex-col gap-10 py-8'>
            <div className='flex-col flex gap-2 text-left w-full max-lg:text-center'>
                <h3 className='font-bold text-4xl text-gray-800'>
                    Our categories
                </h3>
                <p className='text-base text-[#525566]'>Lots of new products and product collections</p>
            </div>
            <div className='gap-6 w-full grid grid-cols-5 max-md:grid-cols-2'>
                {categories.map((category, index) => (  
                    <Link key={index} href={`/${category.name}`}>                 
                        <div  className='relative w-full group overflow-hidden'>
                            <div className='w-full h-full bg-black/60 absolute rounded-full opacity-0 lg:group-hover:opacity-80 duration-500'></div>
                            <p className='cursor-pointer absolute xl:group-hover:top-32 lg:group-hover:top-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#EEEDE7] text-black text-xl max-xl:text-sm max-md:text-xl rounded-3xl max-xl:px-3 max-md:px-8 px-8 py-1 duration-500'>
                                {category.name}
                            </p>
                            <p className='cursor-pointer absolute top-[80%] xl:group-hover:top-40 lg:group-hover:top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl max-xl:text-xs opacity-0 lg:group-hover:opacity-100 pt-2 duration-500'>
                                16 products
                            </p>
                            <Image
                                className='w-full'
                                src={category.imageUrl}
                                alt={category.name}
                                width={500} // Set appropriate width
                                height={500} // Set appropriate height
                                style={{ objectFit: 'contain' }}
                                priority={index === 0} // Eagerly load the first image
                            />
                        </div>                   
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Categories;
