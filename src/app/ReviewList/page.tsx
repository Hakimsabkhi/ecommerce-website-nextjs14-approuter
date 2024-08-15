"use client"
import ListerReview from '@/components/ListerReview';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
type Product = {
    _id: string;
    name: string;
    
    ref: string;
  
    imageUrl: string;
   
    user: {_id:string}; // Reference to a User document or User ID
    
    createdAt: Date;
    updatedAt: Date;
};

const Page = () => {
    const [products, setProducts] = useState<Product[]>([]);
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products');
                setProducts(response.data); // Assuming response.data is an array of products
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        
        fetchProducts();
    }, []);

    return (
        <div>
            <ListerReview products={products}/>
        </div>
            
      
    )
}

export default Page;
