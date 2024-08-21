import React from 'react';
import Headerbottom from '@/components/Headerbottom';

interface Category {
  _id: string;
  name: string;
  imageUrl?: string;
}

// Function to fetch category data
const fetchCategories = async (): Promise<Category[]> => {
  try {
    
    const res = await fetch('http://localhost:3000/api/category/getAllCategory' ,{ cache: 'no-store' });
    if (!res.ok) {
      throw new Error('Failed to fetch categories');
    }
    return res.json();
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    return [];
  }
};

// Server-side component to fetch categories and pass them to the client-side component
const CategoryHeader = async () => {
  const categories = await fetchCategories();

  return <Headerbottom categories={categories} />;
};

export default CategoryHeader; 