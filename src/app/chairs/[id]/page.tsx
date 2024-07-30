"use client";
import React from 'react';
import FirstBlock from '@/components/SinglePageComponents/FirstBlock';
import SecondBlock from '@/components/SinglePageComponents/SecondBlock';
import ThirdBlock from '@/components/SinglePageComponents/ThirdBlock';
import ForthBlock from '@/components/SinglePageComponents/ForthBlock';
import FifthBlock from '@/components/SinglePageComponents/FifthBlock';
import { useParams } from 'next/navigation';
import { products } from 'public/data'; // Adjust path as needed
import { Product } from '../../../../public/data'; // Adjust the path as needed

const Page: React.FC = () => {
    const params = useParams();
    const { id } = params as { id: string }; // Type assertion to ensure id is a string
  
    // Find the product based on the id from the URL
    const product = products.find((product: Product) => product.id === id);

    if (!product) {
      return <div>Product not found</div>;
    }

    return (
        <div>
            <FirstBlock product={product} />
            <SecondBlock product={product} />
            <ThirdBlock product={product} />
            <ForthBlock product={product} />
            <FifthBlock product={product} />
        </div>
    );
}

export default Page;