import React from 'react';
import Image from 'next/image';
import { twibble1, twibble2, twibble3, twibble4,star } from '@/assets/image';
// Ensure the path is correct
import { IoCheckboxOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Head from 'next/head';
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
    place:string;
    name: string;
    imageUrl:string;
  }
 interface FirstBlockProps{
    product: Product | null;
 }
const FirstBlock: React.FC<FirstBlockProps> = ({ product }) => {
   

   
    return (
        <>
            <Head>
                <link rel="preload" as="image" href={product?.imageUrl || noimage} />
            </Head>
            <main className=' w-full bg-white pb-10 pt-20 flex justify-center '>
                {product ?(  
                    <div className="flex gap-10 max-2xl:flex-col w-[80%] max-lg:w-[95%] max-lg:h-[1062px] items-center">
                        <div className="flex gap-2 items-center  max-2xl:flex-col ">
                            <Image src={product.imageUrl|| noimage} height={500} width={500} alt='twibble' loading='eager' />
                            <div className="flex 2xl:flex-col gap-8 max-sm:justify-around ">
                                <Image className="max-md:w-[30%] max-sm:w-[20%]" src={twibble2} alt='twibble' property='true' />
                                <Image className="max-md:w-[30%] max-sm:w-[20%]" src={twibble3} alt='twibble' property='true' />
                                <Image className="max-md:w-[30%] max-sm:w-[20%]" src={twibble4} alt='twibble' property='true'/>
                            </div>                    
                        </div>
                        <div className="flex flex-col gap-5">
                            <p className="text-3xl font-bold">{product.name}</p>
                            <div className="flex gap-4 items-center">
                                <p className="flex items-center font-bold">SKU <p className="text-[#525566]"> : SO-450</p></p>
                                <p className="text-[#525566] font-bold flex items-center gap-2"><IoCheckboxOutline size={25} /> {product.status}</p>
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
                            <p>the slender oragnic forms are fluid and graceful. Noguchi emphasises the lightness of the elements with thin yet comfortable</p>
                            <p className="text-primary text-3xl font-bold max-lg:justify-center flex">{product.price} TND</p>
                            <div className=" flex items-center max-lg:flex-col gap-3 max-lg:justify-center">
                                <p>Quantity</p>
                                <div className="flex items-center">
                                    <p className="p-3 border-2 text-xl"></p>
                                                 
                                </div>
                                <button className="text-white bg-primary hover:bg-[#15335D] h-10 w-[20%] font-bold  rounded-md">
                                    <p>Add to cart</p>
                                </button>
                                <button className="text-white bg-black  h-10 w-[20%] font-bold  rounded-md">
                                    <p>Buy now</p>
                                </button>                        
                            </div>
                        </div>
                    </div>
                )
                    :
                (
                    <div className='h-[465.59px] max-lg:h-[1062px]'></div> 
                )}
            </main>
        </>
    );
}

export default FirstBlock;