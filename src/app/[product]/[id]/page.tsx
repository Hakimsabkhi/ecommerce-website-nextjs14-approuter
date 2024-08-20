
import React from 'react';
import FirstBlock from '@/components/SingleProduct/FirstBlock';
import SecondBlock from '@/components/SingleProduct/SecondBlock';
import ThirdBlock from '@/components/SingleProduct/ThirdBlock';
import ForthBlock from '@/components/SingleProduct/ForthBlock';
import FifthBlock from '@/components/SingleProduct/FifthBlock';



interface PageProps {
  params: {
    id: string;
  };
}
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


const fetchProduct = async (id: string): Promise<ProductData | null> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products/${id}`);
    if (!res.ok) {
      throw new Error('Product not found');
    }
    const data: ProductData = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching product data:', error);
    return null;
  }
};

const Page: React.FC<PageProps> = async ({ params }) => {
  const { id } = params;
  const product = id ? await fetchProduct(id) : null;

  return (
    <div>
      <FirstBlock product={product} />
      <SecondBlock product={product} />
      <ThirdBlock product={product} />
      <ForthBlock product={product} />
     {/* <FifthBlock /> */}
    </div>
  );
};

export default Page;