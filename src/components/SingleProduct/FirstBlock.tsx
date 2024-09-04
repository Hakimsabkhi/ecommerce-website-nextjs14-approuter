import React from 'react';
import Image from 'next/image';
import { twibble2, twibble3, twibble4,star } from '@/assets/image';
import { IoCheckboxOutline } from "react-icons/io5";
import Head from 'next/head';
import ProductQ from './ProductQ';

const noimage ='https://res.cloudinary.com/dx499gc6x/image/upload/v1723623372/na_mma1mw.webp';

interface Product {
    _id: string;
    name: string;
    description: string;
    ref: string;
    price: number;
    imageUrl?: string;
    brand?: Brand; // Make brand optional
    stock: number;
    discount?: number;
    color?: string;
    material?: string;
    status?: string;
}

interface Brand {
    _id: string;
    place: string;
    name: string;
    imageUrl: string;
}

interface FirstBlockProps {
    product: Product | null;
}

const FirstBlock: React.FC<FirstBlockProps> = ({ product }) => {
    return (
        <>
            <Head>
                <link rel="preload" as="image" href={product?.imageUrl || noimage} />
            </Head>
            <main className='w-full bg-white pb-10 pt-20 flex justify-center'>
                {product ? (
                    <div className="flex gap-10 max-2xl:flex-col w-[80%] max-lg:w-[95%] max-lg:h-[1062px] items-center">
                        <div className="flex gap-2 items-center max-2xl:flex-col">
                            <Image 
                                src={product.imageUrl || noimage} 
                                height={500} 
                                width={500} 
                                alt={product.name || 'Product image'} 
                                loading='eager' 
                            />
                            <div className="flex 2xl:flex-col gap-8 max-sm:justify-around">
                                <Image className="max-md:w-[30%] max-sm:w-[20%]" src={twibble2} alt='twibble2' />
                                <Image className="max-md:w-[30%] max-sm:w-[20%]" src={twibble3} alt='twibble3' />
                                <Image className="max-md:w-[30%] max-sm:w-[20%]" src={twibble4} alt='twibble4'/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <p className="text-3xl font-bold">{product.name}</p>
                            <div className="flex gap-4 items-center">
                                <p className="flex items-center font-bold">SKU <span className="text-[#525566]">: {product.ref}</span></p>
                                <p className="text-[#525566] font-bold flex items-center gap-2"><IoCheckboxOutline size={25} /></p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div className="flex gap-1">
                                    <Image className="size-4 max-md:size-4" src={star} alt="star" />
                                    <Image className="size-4 max-md:size-4" src={star} alt="star" />
                                    <Image className="size-4 max-md:size-4" src={star} alt="star" />
                                    <Image className="size-4 max-md:size-4" src={star} alt="star" />
                                    <Image className="size-4 max-md:size-4" src={star} alt="star" />
                                </div>
                                <p>(2 customer reviews)</p>
                            </div>
                            <p>The slender organic forms are fluid and graceful. Noguchi emphasizes the lightness of the elements with thin yet comfortable design.</p>
                          <ProductQ product={product}/>
                        </div>
                    </div>
                ) : (
                    <div className='h-[465.59px] max-lg:h-[1062px]'></div>
                )}
            </main>
        </>
    );
}

export default FirstBlock;
