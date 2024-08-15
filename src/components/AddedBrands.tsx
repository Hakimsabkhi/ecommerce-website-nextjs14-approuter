"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';

type Brand = {
    _id: string;
    name: string;
    place: string;
    imageUrl: string;
    logoUrl: string;
    createdAt: Date;
    updatedAt: Date;

};

const AddedBrands: React.FC = () => {
    const [addedBrand, setAddedBrand] = useState<Brand[]>([]);
    const [filteredBrand, setFilteredBrand] = useState<Brand[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const BrandesPerPage = 5; // Number of categories to display per page
    const Deletebrand = async (brandId: string) => {
        setLoading(true);
        try {
            await axios.delete(`/api/brand/${brandId}`);
            // Refresh categories after deletion
            getBrand();
        } catch (err: any) {
            setError(`[Brand_DELETE] ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    const getBrand = async () => {
        try {
            const response = await axios.get('/api/brand');
            setAddedBrand(response.data);
            setFilteredBrand(response.data);
        } catch (err: any) {
            setError(`[Brand_GET] ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getBrand();
    }, []);

    useEffect(() => {
        const filtered = addedBrand.filter(brand =>
            brand.name.toLowerCase().includes(searchTerm.toLowerCase())             
        );
        setFilteredBrand(filtered);
        setCurrentPage(1); // Reset to the first page when search term changes
    }, [searchTerm, addedBrand]);

    const indexOfLastBrand = currentPage * BrandesPerPage;
    const indexOfFirstBrand = indexOfLastBrand - BrandesPerPage;
    const currentBrands = filteredBrand.slice(indexOfFirstBrand, indexOfLastBrand);
    const totalPages = Math.ceil(filteredBrand.length / BrandesPerPage);

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
                <p className='text-3xl font-bold'>ALL Brand</p>
                <a href="/BrandList/AddBrand" className="w-[15%]">
                    <button className='bg-primary font-bold hover:bg-[#15335D] text-white rounded-lg w-full h-10'>
                        Add a new Brand
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
                        <th className=" py-2 text-start">                        
                            Place                                                                                                                   
                        </th>
                        <th className=" py-2 text-center">                        
                            Action                                                                                                                  
                        </th>
                        
                    </tr>
                </thead>
                <tbody>
                    {currentBrands.map((item, index) => (
                        <tr key={index} className='bg-[#15335D] text-white'>
                            <td className="border px-4 py-2 "><Image src={item.logoUrl} width={30} height={30} alt="icon"/></td>
                            <td className="border px-4 py-2">{item.imageUrl}</td>
                            <td className="border px-4 py-2">{item.name}</td>
                            <td className="border-b px-4 py-2  ">{item.place}</td>
                            <td className="border-b flex items-center justify-center gap-2 py-2  ">                                
                                    <Link href={`/BrandList/${item._id}`}>
                                        <button className="bg-primary w-28 h-10 rounded-md">
                                            Modify
                                        </button>
                                    </Link>
                                    <button onClick={() => Deletebrand(item._id)} className="bg-primary w-28 h-10 rounded-md">
                                        Delete
                                    </button>                                
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

export default AddedBrands;
