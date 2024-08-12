"use client";
import React from 'react';
import FirstBlock from '@/components/SingleProduct/FirstBlock';
import SecondBlock from '@/components/SingleProduct/SecondBlock';
import ThirdBlock from '@/components/SingleProduct/ThirdBlock';
import ForthBlock from '@/components/SingleProduct/ForthBlock';
import FifthBlock from '@/components/SingleProduct/FifthBlock';
import { useParams } from 'next/navigation';
import { products } from '@/assets/data'; // Adjust path as needed
import { Product } from '@/assets/data';

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