"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';

type Category = {
    _id: string;
    name: string;
    imageUrl: string;
    logoUrl: string;
    createdAt: Date;
    updatedAt: Date;
};

const AddedCategories: React.FC = () => {
    const [addedCategory, setAddedCategory] = useState<Category[]>([]);
    const [filteredCategory, setFilteredCategory] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const categoriesPerPage = 5; // Number of categories to display per page
    const DeleteCategory = async (categoryId: string) => {
        setLoading(true);
        try {
          const response = await fetch(`/api/category/deleteCategory/${categoryId}`, {
            method: 'DELETE',
          });
      
          if (!response.ok) {
            throw new Error('Failed to delete category');
          }
      
          // Refresh categories after deletion
          getCategory();
        } catch (err: any) {
          setError(`[Category_DELETE] ${err.message}`);
        } finally {
          setLoading(false);
        }
      };
      

    const getCategory = async () => {
        try {
          const response = await fetch('http://loaclhost:3000/api/category/getAllCategory');
      
          if (!response.ok) {
            throw new Error('Failed to fetch categories');
          }
      
          const data = await response.json();
          setAddedCategory(data);
          setFilteredCategory(data);
        } catch (err: any) {
          setError(`[Category_GET] ${err.message}`);
        } finally {
          setLoading(false);
        }
      };
      

    useEffect(() => {
        getCategory();
    }, []);

    useEffect(() => {
        const filtered = addedCategory.filter(category =>
            category.name.toLowerCase().includes(searchTerm.toLowerCase())             
        );
        setFilteredCategory(filtered);
        setCurrentPage(1); // Reset to the first page when search term changes
    }, [searchTerm, addedCategory]);

    const indexOfLastCategory = currentPage * categoriesPerPage;
    const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
    const currentCategories = filteredCategory.slice(indexOfFirstCategory, indexOfLastCategory);
    const totalPages = Math.ceil(filteredCategory.length / categoriesPerPage);

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
                <p className='text-3xl font-bold'>ALL categories</p>
                <a href="/CategoryList/AddCategory" className="w-[15%]">
                    <button className='bg-primary font-bold hover:bg-[#15335D] text-white rounded-lg w-full h-10'>
                        Add a new category
                    </button>
                </a>
            </div>
            <input
                type="text"
                placeholder="Search categories"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='mt-4 p-2 border border-gray-300 rounded'
            />
            <table className="table-auto w-full mt-4">
                <thead>
                    <tr>
                        <th className="py-2 text-start">Icon</th>
                        <th className=" py-2 text-start">ImageURL</th>
                        <th className=" py-2 text-start">Name</th>
                        <th className=" py-2 text-start flex items-center gap-4">
                            <p>
                                Created By
                            </p>
                            <p>
                                Action
                            </p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {currentCategories.map((item, index) => (
                        <tr key={index} className='bg-[#15335D] text-white'>
                            <td className="border px-4 py-2 "><Image src={item.logoUrl} width={30} height={30} alt="icon"/></td>
                            <td className="border px-4 py-2">{item.imageUrl}</td>
                            <td className="border px-4 py-2">{item.name}</td>
                            <td className="border px-4 py-2 flex justify-between items-center ">
                                <p>Hakim</p>
                                <div className="flex items-center gap-2">
                                    <Link href={`/CategoryList/${item._id}`}>
                                        <button className="bg-primary w-28 h-10 rounded-md">
                                            Modify
                                        </button>
                                    </Link>
                                    <button onClick={() => DeleteCategory(item._id)} className="bg-primary w-28 h-10 rounded-md">
                                        Delete
                                    </button>
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

export default AddedCategories;
