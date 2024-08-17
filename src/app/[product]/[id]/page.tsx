"use client";

import React, { useEffect, useState } from 'react';
import FirstBlock from '@/components/SingleProduct/FirstBlock';
import SecondBlock from '@/components/SingleProduct/SecondBlock';
import ThirdBlock from '@/components/SingleProduct/ThirdBlock';
import ForthBlock from '@/components/SingleProduct/ForthBlock';
import FifthBlock from '@/components/SingleProduct/FifthBlock';
import { useParams } from 'next/navigation';

interface ProductData {
  _id: string;
  name: string;
  description: string;
  ref: string;
  price: number;
  imageUrl?: string;
  brand?: Brand; // Make brand optional
  stock: number;
  discount?: number;
  color?: string;
  material?: string;
  status?: string;
  user: user;
}

interface Brand {
  _id: string;
  name: string;
  place:string;
  imageUrl:string;
}
interface user {
  username: string;
}
const Page: React.FC = () => {
  const params = useParams();
  const { id } = params as { id: string }; // Type assertion to ensure id is a string
  const [product, setProduct] = useState<ProductData | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        try {
          const response = await fetch(`/api/products/${id}`);
          if (!response.ok) {
            throw new Error('Failed to fetch product data');
          }
          const data: ProductData = await response.json();
          setProduct(data);
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      }
    };
    fetchProduct();
  }, [id]);

  if (!id) {
    return <div>Product not found</div>;
  }



  return (
    <div>
      <FirstBlock product={product} />
      {/* Uncomment the following lines to include additional blocks */}
      <SecondBlock product={product} />
      <ThirdBlock product={product} /> 
      <ForthBlock product={product} /> 
      <FifthBlock /> 
    </div>
  );
};

export default Page;
