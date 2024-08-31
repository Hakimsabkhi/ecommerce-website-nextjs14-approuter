"use client";
import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import { toast } from 'react-toastify';
import Dialog from './dialogDelete/Dialog';


type User = {
    _id:string;
    username: string;
    // other user fields
};

type Product = {
    _id: string;
    name: string;
    description: string;
    ref: string;
    price: number;
    imageUrl: string;
    category: string;
    stock: number;
    user: User; // Reference to a User document or User ID
    discount: number;
    createdAt: Date;
    updatedAt: Date;
    
};

type AddedProductsProps = {
    products: Product[];
};

const AddedProducts: React.FC<AddedProductsProps> = ({ products }) => {
    console.log(products)
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const productsPerPage = 5;
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const handleDeleteClick = () => {
        setIsDialogOpen(true);
      };
    
      const handleCloseDialog = () => {
        setIsDialogOpen(false);
      };

    const getProducts = async () => {
        
        try {
            const response = await fetch('/api/products/getAllProduct', {
                method: 'GET',
            });
            console.log(response)
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
    
            const data = await response.json();
            setFilteredProducts(data);
        } catch (err: any) {
            setError(`[products_GET] ${err.message}`);
        } 
    };
    

    const deleteProduct = async (productId: string) => {
     
        try {
            const response = await fetch(`/api/products/deleteProduct/${productId}`, {
                method: 'DELETE',
            });
    
            if (!response.ok) {
                throw new Error('Failed to delete the product');
            }
            getProducts();
            toast.success("Category delete successfully!" );
            // Refresh products after deletion
            
        } catch (err: any) {
           // setError(`[Product_DELETE] ${err.message}`);
           toast.error("faild Product_DELETE");
        } 
    };
    

    useEffect(() => {
        setFilteredProducts(products);
        setCurrentPage(1);
       
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

   

    if (error) {
        return <div>Error: {error}</div>;
    }
    
    return (
        <div className='mx-auto w-[90%] py-8 flex flex-col gap-8'>
            <div className="flex items-center justify-between">
                <p className='text-3xl font-bold'>ALL Products</p>
                              
                <Link href="/admin/productlist/addproduct">
                    <button className='bg-primary font-bold hover:bg-[#15335D] text-white rounded-lg w-[200px] h-10'>
                        <p>Add the new Product</p>
                        
                    </button>
                </Link>
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
                            <p>Created By</p>
                            <p>Action</p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {currentProducts.map((item) => (
                        <tr key={item._id} className='bg-[#15335D] text-white'>
                            <td className="border px-4 py-2">{item._id}</td>
                            <td className="border px-4 py-2">{item.ref}</td>
                            <td className="border px-4 py-2">{item.name}</td>
                            <td className="border px-4 py-2">{item.imageUrl}</td>
                            <td className="border px-4 py-2 flex justify-between items-center">
                                <p>{item?.user?.username}</p>
                                <div className="flex items-center gap-2">
                                    <Link href={`/admin/productlist/${item._id}`}>
                                        <button className="bg-primary w-28 h-10 rounded-md">
                                            Modify
                                        </button>
                                    </Link>
                                    <button onClick={handleDeleteClick}  className="bg-primary w-28 h-10 rounded-md">
                                        Delete
                                    </button>
                                    {isDialogOpen &&     < Dialog  handleCloseDialog={handleCloseDialog} Delete={deleteProduct} id={item._id}
                                    name={item.name}/>}
                                    
                                </div>
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

export default AddedProducts;
