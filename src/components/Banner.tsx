"use client"
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import classNames from 'classnames';
import { left, right, person1, person2, person3, pic1, pic2, pic3 } from '@/assets/image';

type SlideData = {
    title: string;
    author: string;
    personImg: StaticImageData;
};

const slideData: SlideData[] = [
    {
        title: "Sectional fabric sofa",
        author: "Romon Esteve",
        personImg: person1
    },
    {
        title: "Luxury leather chair",
        author: "Esther Howard",
        personImg: person2
    },
    {
        title: "Elegant wooden table",
        author: "Courtney Henry",
        personImg: person3
    }
];

export default function Banner() {
    const [page, setPage] = useState<number>(1);
    const [direction, setDirection] = useState<'left' | 'right'>('right');
    const totalImages = slideData.length;

    const handlePrevPage = () => {
        setDirection('left');
        setPage(prev => (prev - 1 < 1 ? totalImages : prev - 1));
    };

    const handleNextPage = () => {
        setDirection('right');
        setPage(prev => (prev + 1 > totalImages ? 1 : prev + 1));
    };

    const currentSlide = slideData[page - 1];
    return (
        <div className="relative md:h-64 bg-white rounded shadow-lg mb-6"> {/* Maintain aspect ratio */}
            <Image
                className="w-full md:h-full rounded shadow-lg bg-white"
                layout="fill"
                objectFit="cover"
                alt={currentSlide.title}
                src={pic3}                
                sizes="(max-width: 900px) 400px, 900px"
                loading="eager"
                decoding="async"
            />
        </div>
    );
}