"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';

type User = {
    _id:string;
    
    // other user fields
};

type Product = {
    _id: string;
    name: string;
    ref: string;
    imageUrl: string;
    user: User; // Reference to a User document or User ID
    createdAt: Date;
    updatedAt: Date;
};

type AddedProductsProps = {
    products: Product[];
};

const ListerReview: React.FC<AddedProductsProps> = ({ products }) => {
    console.log(products)
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const productsPerPage = 5;

    const getProducts = async () => {
        setLoading(true);
        try {
            const response = await fetch(`/api/products`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setFilteredProducts(data);
        } catch (err: any) {
            setError(`[products_GET] ${err.message}`);
        } finally {
            setLoading(false);
        }
    };
    

    

    useEffect(() => {
        setFilteredProducts(products);
        setCurrentPage(1);
        setLoading(false);
    }, [products]);

    useEffect(() => {
        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.ref.toLowerCase().includes(searchTerm.toLowerCase()) 
           // product.user.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
        setCurrentPage(1);
    }, [searchTerm, products]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    if (loading) {
        return (/* loading start */
        <div className="flex justify-center items-center h-[400px]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>   
      </div>
      /*  loading end  */)
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    
    return (
        <div className='mx-auto w-[90%] py-8 flex flex-col gap-8'>
            <div className="flex items-center justify-between">
                <p className='text-3xl font-bold uppercase'> Product Reviews</p>                
               
            </div>
            <input
                type="text"
                placeholder="Search products"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='mt-4 p-2 border border-gray-300 rounded'
            />
            <table className="table-auto w-full mt-4">
                <thead>
                    <tr>    
                        <th className="text-start py-2">ID</th>
                        <th className="text-start py-2">REF</th>
                        <th className="text-start py-2">Name</th>
                        <th className="text-start py-2">ImageURL</th>                
                        <th className="flex items-center gap-20 py-2">
                            
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {currentProducts.map((item) => (
                        <tr key={item._id} className='bg-[#15335D] text-white'>
                            <td className="border px-4 py-2">{item._id}</td>
                            <td className="border px-4 py-2">{item.ref}</td>
                            <td className="border px-4 py-2">{item.name}</td>
                            <td className="border px-4 py-2"><Image alt={item.name} src={item.imageUrl} height={60} width={60}/></td>
                            <td className="border px-4 py-2 flex justify-between items-center">
                             
                               
                                    <Link href={`/ReviewList/${item._id}`}>
                                        <button className="bg-primary w-28 h-10 rounded-md uppercase">
                                        Reviews
                                        </button>
                                    </Link>
                                    
                              
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='flex justify-center mt-4'>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => paginate(index + 1)}
                        className={`mx-1 px-3 py-1 rounded ${
                            currentPage === index + 1 ? 'bg-primary text-white' : 'bg-gray-300 text-black'
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>            
        </div>
    );
};

export default ListerReview;
