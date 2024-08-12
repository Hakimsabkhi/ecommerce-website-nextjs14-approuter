import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';


interface CategoryData {
  name: string;
  logoUrl?:string;
  imageUrl?: string;
  bannerUrl?:string;
}

const Chairsbanner: React.FC = () => {
  const [category, setCategory] = useState<CategoryData | null>(null);
  const params = useParams() as { [key: string]: string | string[] | undefined };
  const product = params.product as string | undefined;

  useEffect(() => {
    const fetchCategory = async () => {
      if (product) {
        try {
          const response = await fetch(`/api/searchcategory?category=${product}`);
          const data = await response.json();
          console.log(data);
          // Assuming the API returns an object with 'name' and 'logourl'
          setCategory({
            name: data.name || product,
            imageUrl: data.imageUrl || '',
          });
        } catch (error) {
          console.error('Error fetching category:', error);
        }
      }
    };

    fetchCategory();
  }, [product]);

  return (
    <div className='max-lg:pt-16'>
      <div className='relative w-full'>
        <a 
          href="/" 
          className='text-8xl max-md:text-3xl text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/4 absolute font-bold'>
          {category ? category.name : 'Loading...'}
        </a>
        <div className='w-full h-full flex items-center justify-center'>
          {category?.imageUrl ? (
            <Image 
              className='object-cover w-full h-[400px]' 
              src={category.bannerUrl|| 'default-image-url' } 
              alt='category logo' 
              height={300} 
              width={300} 
            />
          ) : (
            <p>Loading image...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Chairsbanner;
