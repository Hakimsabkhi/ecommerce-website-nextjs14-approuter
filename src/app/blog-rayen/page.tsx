import React from 'react';
import Blog from '@/components/Blog';
import Blogbanner from '@/components/blogbanner';

export default function HomePage() {
  return (
    <div>
      <Blogbanner/>
      <Blog/>      
    </div>  

  );
}