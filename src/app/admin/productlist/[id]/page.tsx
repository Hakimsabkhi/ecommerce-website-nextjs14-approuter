"use client";

import React, { useEffect, useState } from 'react';
import ModifyProduct from '@/components/Products/ModifyProduct';
import { useParams } from 'next/navigation';

// Define the ProductData type
interface ProductData {
    _id: string;
    name: string;
    description: string;
    ref: string;
    price: number;
    imageUrl?: string;
    category: {_id:string}; // Assuming category is an object
    brand: {_id:string}; // Assuming brand is an object
    stock: number;
    user: string;
}

interface Category {
    _id: string;
    name: string;
}

interface Brand {
    _id: string;
    name: string;
}

const Page = () => {
    const params = useParams() as { id: string };
    const [productData, setProductData] = useState<ProductData | null>(null);
   
    useEffect(() => {
        // Fetch product data by ID
        const fetchProductData = async () => {
            try {
                const response = await fetch(`/api/products/getProductById/${params.id}`);
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const data = await response.json();
                setProductData(data);
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        };

        // Fetch categories data
       
        fetchProductData();
      
    }, [params.id]);

   

    return (
        <div>
            {/* Ensure ModifyProduct handles null or undefined productData */}
            {productData && <ModifyProduct productData={productData}  />}
        </div>
    );
};

export default Page;
