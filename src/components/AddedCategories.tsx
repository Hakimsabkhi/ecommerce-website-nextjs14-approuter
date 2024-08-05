"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Category = {
    _id: string;
    name: string;
    imageUrl: string;
    createdAt: Date;
    updatedAt: Date;
};

const AddedCategories = () => {
    const [addedCategory, setAddedCategory] = useState<Category[]>([]);
    const [filteredCategory, setFilteredCategory] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const getCategory = async () => {
        try {
            const response = await axios.get('/api/category');
            setAddedCategory(response.data);
            setFilteredCategory(response.data);
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
    }, [searchTerm, addedCategory]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    /*return (
        <div className='mx-auto w-[70%] py-8 flex flex-col gap-8'>
            <div className="flex items-center justify-between">
                <p className='text-3xl font-bold'>ALL categories</p>
                <button className='bg-orange-400 text-white rounded-lg w-[15%] h-10'>
                    Add a new category
                </button>
            </div>
            <div className="flex flex-col gap-4">
                <div className='flex items-center gap-60 text-xl'>
                    <p>ImageURL</p>
                    <p>Created by</p>
                    <p>Name</p>
                </div>
                <div className="flex flex-col gap-0.5">
                    {addedCategory.map((item, index) => (
                        <div key={index} className='flex gap-0.5'>
                            <div className='bg-[#15335D] h-16 w-[20%] flex text-left items-center'>
                                <p className='px-4 py-2 text-white'>{item.imageUrl}</p>
                            </div>
                            <div className='bg-[#15335D] h-16 w-[30%] flex justify-center items-center'>
                                <p className='px-4 py-2 text-white'>{item.name}</p>
                            </div>
                            <div className='bg-[#15335D] h-16 w-[50%] flex items-center justify-between pr-2 rounded-tr-lg'>
                                <div className="flex items-center gap-1 text-right text-white">
                                    <button className="bg-orange-400 w-28 h-14 rounded-md">
                                        Modify
                                    </button>
                                    <button className="bg-orange-400 w-28 h-14 rounded-md">
                                        Delete
                                    </button>
                                </div>
                            </div>                        
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}*/
return (
    <div className='mx-auto w-[70%] py-8 flex flex-col gap-8'>
        <div className="flex items-center justify-between">
            <p className='text-3xl font-bold'>ALL categories</p>
            <button className='bg-orange-400 text-white rounded-lg w-[15%] h-10'>
                Add a new category
            </button>
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
                    <th className="px-4 py-2">ImageURL</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {filteredCategory.map((item, index) => (
                    <tr key={index} className='bg-[#15335D] text-white'>
                        <td className="border px-4 py-2">{item.imageUrl}</td>
                        <td className="border px-4 py-2">{item.name}</td>
                        <td className="border px-4 py-2 flex justify-center items-center gap-2">
                            <button className="bg-orange-400 w-28 h-10 rounded-md">
                                Modify
                            </button>
                            <button className="bg-orange-400 w-28 h-10 rounded-md">
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
}

export default AddedCategories;


