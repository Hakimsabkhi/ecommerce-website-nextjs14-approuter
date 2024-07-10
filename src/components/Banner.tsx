"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { left, right } from "../../public/image";

const slideData = [
    {
        title: "Sectional fabric sofa",
        author: "Romon Esteve",
        personImg: "/images/person1.png"
    },
    {
        title: "Luxury leather chair",
        author: "Esther Howard",
        personImg: "/images/person2.png"
    },
    {
        title: "Elegant wooden table",
        author: "Courtney Henry",
        personImg: "/images/person3.png"
    }
];

export default function Banner() {
    const [page, setPage] = useState<number>(1);
    const [direction, setDirection] = useState<'left' | 'right'>('right');
    const totalImages = 3; // Total number of images

    const handlePrevPage = () => {
        setDirection('left');
        setPage(prev => ((prev - 1) < 1 ? totalImages : prev - 1));
    };

    const handleNextPage = () => {
        setDirection('right');
        setPage(prev => ((prev + 1) > totalImages ? 1 : prev + 1));
    };

    const currentSlide = slideData[page - 1];

    return (
        <main className='relative flex h-[calc(80vh-70px)] w-full flex-col justify-center items-center overflow-hidden'>
            <div className='relative w-full h-full'>
                {[...Array(totalImages)].map((_, index) => (
                    <div
                        key={index}
                        className={classNames(
                            'absolute inset-0 w-full h-full transition-opacity duration-500',
                            {
                                'opacity-0': page !== index + 1,
                                'opacity-100': page === index + 1,
                            }
                        )}
                    >
                        <Image
                            className='object-cover object-center'
                            layout="fill"
                            alt={`image ${index + 1}`}
                            src={`/images/pic${index + 1}.png`}
                        />
                        <div className='absolute bottom-1/4 left-10 md:left-20 lg:left-40 xl:left-80 py-10 px-5 md:py-24 md:px-10'>
                            <div className='py-4 gap-y-4'>
                                <h3 className='text-xl md:text-2xl lg:text-3xl font-bold'>{currentSlide.title}</h3>
                                <div className='flex gap-x-2 items-center'>
                                    <h3 className='text-xl md:text-2xl lg:text-3xl font-bold'>by</h3>
                                    <Image src={currentSlide.personImg} alt="person" width={50} height={50} />
                                    <h3 className='text-xl md:text-2xl lg:text-3xl font-bold'>{currentSlide.author}</h3>
                                </div>
                            </div>
                            <button
                                type="button"
                                className="text-dark-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-full text-xs md:text-sm px-3 py-2 md:px-5 md:py-3.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            >
                                Shop Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Left arrow */}
            <div
                onClick={handlePrevPage}
                className='absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 cursor-pointer z-10'
            >
                <button className='w-8 h-8 md:w-12 md:h-12 bg-white flex justify-center items-center rounded-full'>
                    <Image
                        className='w-4 h-4 md:w-5.5 md:h-5.5'
                        src={left}
                        alt="Previous"                     
                    />
                </button>
            </div>
            {/* Right arrow */}
            <div
                onClick={handleNextPage}
                className='absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 cursor-pointer z-10'
            >
                <button className='w-8 h-8 md:w-12 md:h-12 bg-white flex justify-center items-center rounded-full'>
                    <Image
                        className='w-4 h-4 md:w-5.5 md:h-5.5'
                        src={right}
                        alt="Previous"    
                    />
                </button>
            </div>
        </main>
    );
}



