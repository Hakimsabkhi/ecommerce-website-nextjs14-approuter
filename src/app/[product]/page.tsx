import React from 'react';
import Products from '@/components/Products';
import Chairsbanner from '@/components/Chairsbanner';

import { ICategory } from '@/models/Category';

interface ProductData {
  _id: string;
  name: string;
  description: string;
  ref: string;
  price: number;
  imageUrl?: string;
  brand: brand;
  stock: number;
  discount?: number;
  color?: string;
  material?: string;
  status?: string;
}

interface brand {
  _id: string;
  name: string;
}

// Server Component Function
async function fetchCategoryData(id: string): Promise<ICategory | null> {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/searchcategory?category=${id}`);
    if (!res.ok) {
      throw new Error('Category not found');
    }
    const data: ICategory = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching category data:', error);
    return null;
  }
}

async function fetchProductsData(id: string): Promise<ProductData[]> {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/search?category=${id}`);
    if (!res.ok) {
      throw new Error('Products not found');
    }
    const data: ProductData[] = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching products data:', error);
    return [];
  }
}

async function fetchBrandData(): Promise<brand[]> {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/brand/getAllBrand`);
    if (!res.ok) {
      throw new Error('Brand not found');
    }
    const data: brand[] = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching brand data:', error);
    return [];
  }
}

// Page Component
export default async function HomePage({ params }: { params: { product?: string } }) {
  const id = params?.product;
  const category = id ? await fetchCategoryData(id) : null;
  const products = id ? await fetchProductsData(id) : [];
  const brands = await fetchBrandData();

  return (
    <div>
      <Chairsbanner category={category || undefined} />
      <Products products={products} brands={brands} />
    </div>
  );
}
