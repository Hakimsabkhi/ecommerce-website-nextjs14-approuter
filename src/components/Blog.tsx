"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { mackay, share, comment,left, right } from "../../public/image";
import { itemsblog } from "../../public/data";

const Blog: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 4; // Adjust the number of items per page as needed

    // Calculate the total number of pages
    const totalPages = Math.ceil(itemsblog.length / itemsPerPage);

    // Get the items to display on the current page
    const currentItems = itemsblog.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 800 , behavior: 'smooth' });
    };

    return (
        <div className='py-8 w-full items-center flex flex-col gap-5 justify-center'>
            <div className='grid grid-cols-4 gap-8 group max-md:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3'>
                {currentItems.map((item, index) => (
                    <div key={index} className='flex flex-col cursor-pointer duration-500 lg:group-hover:scale-[0.95] lg:hover:!scale-100 justify-center items-center w-[322px]'>
                        <div className="relative justify-center w-[322px] flex">
                            <div className="absolute flex items-center justify-between w-[95%] bottom-1">
                                <div className='flex gap-2 items-center'>
                                    <Image className='w-5 h-5' src={mackay} alt="person" />
                                    <p className='text-white'>Mr.mackay</p>
                                </div>
                                <div className='flex gap-2'>
                                    <Image src={share} alt="share" />
                                    <Image src={comment} alt="comment" />
                                </div>
                            </div>
                            <Image className='rounded-t-lg w-[322px]' src={item.src} alt="steak" />
                        </div>
                        <div className='flex flex-col rounded-b-lg gap-2 bg-white w-[322px] h-[214px] pl-2'>
                            <p className="text-gray-400">{item.date}</p>
                            <div className="flex flex-col gap-10">
                                <div className="flex flex-col gap-2">
                                    <p className="text-gray-700 text-xl font-bold">{item.titlexl}</p>
                                    <p className="text-gray-700 text-2xl font-bold">{item.title}</p>
                                    <p className="text-gray-400">{item.text}</p>
                                </div>
                                <p className="text-orange-800">Continue reading</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex justify-center items-center gap-x-4'>
                {currentPage > 1 && (
                    <Image
                        className='cursor-pointer'
                        src={left}
                        alt="arrow"
                        onClick={() => handlePageChange(currentPage - 1)}
                    />
                )}
                {Array.from({ length: totalPages }, (_, i) => (
                    <p
                        key={i + 1}
                        onClick={() => handlePageChange(i + 1)}
                        className={`cursor-pointer text-3xl rounded-lg py-3 px-5 ${currentPage === i + 1 ? 'bg-orange-400' : ''}`}
                    >
                        {i + 1}
                    </p>
                ))}
                {currentPage < totalPages && (
                    <Image
                        className='cursor-pointer'
                        src={right}
                        alt="arrow"
                        onClick={() => handlePageChange(currentPage + 1)}
                    />
                )}
            </div>
        </div>
    );
}

export default Blog;
