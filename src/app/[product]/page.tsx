import React from 'react';
import Products from '@/components/Products';
import Chairsbanner from '@/components/Chairsbanner';
import { IBrand } from '@/models/Brand';
import { IProduct } from '@/models/Product';
import { ICategory } from '@/models/Category';

interface HomePageProps {
  params: {
    product?: string;
  };
}

// Function to fetch category data by ID
const fetchCategoryData = async (id: string): Promise<ICategory | null> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/searchcategory?category=${id}`); // Adjust the API endpoint
    if (!res.ok) {
      throw new Error('Category not found');
    }
    const data: ICategory = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching category data:', error);
    return null;
  }
};

// Function to fetch products data by category ID
const fetchProductsData = async (id: string): Promise<IProduct[]> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/search?category=${id}`); // Adjust the API endpoint
    if (!res.ok) {
      throw new Error('Products not found');
    }
    const data: IProduct[] = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching products data:', error);
    return [];
  }
};

// Function to fetch brand data
const fetchBrandData = async (): Promise<IBrand[]> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/brand`); // Adjust the API endpoint
    if (!res.ok) {
      throw new Error('Brand not found');
    }
    const data: IBrand[] = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching brand data:', error);
    return [];
  }
};

export default async function HomePage({ params }: HomePageProps) {
  const id = params?.product;
  const category = id ? await fetchCategoryData(id) : null;
  const products = id ? await fetchProductsData(id) : [];
  const brand = await fetchBrandData();

  return (
    <div>
      <Chairsbanner category={category || undefined} />
      {/* Uncomment the following line to render products */}
      {/* <Products products={products} brand={brand} /> */}
    </div>
  );
}
