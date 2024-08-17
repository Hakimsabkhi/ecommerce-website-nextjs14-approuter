
import React from 'react';
import Products from '@/components/Products';
import Chairsbanner from '@/components/Chairsbanner';
import { GetServerSideProps } from 'next';

export default function HomePage() {
  
   
  return (
    <div>
      <Chairsbanner />
      <Products  /> 
    </div>  

  );
}
