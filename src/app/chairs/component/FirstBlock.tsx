import React, { useState,  } from 'react';
import Image from 'next/image';
import { twibble1, twibble2, twibble3, twibble4,star } from '../../../../public/image';
import {Product} from '../../../../public/data'; // Ensure the path is correct
import { IoCheckboxOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
const FirstBlock: React.FC<{ product: Product }> = ({ product }) => {
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount(count + 1);
    const decrement = () => {
        if (count > 0) {
          setCount(count - 1);
        }
      };
    return (
        <main className=' w-full bg-white pb-10 pt-20 flex justify-center '>
            <div className="flex gap-10 max-2xl:flex-col w-[80%] max-lg:w-[95%] items-center">
                <div className="flex gap-2 items-center  max-2xl:flex-col ">
                    <Image src={twibble1} alt='twibble' />
                    <div className="flex 2xl:flex-col gap-8 max-sm:justify-around ">
                        <Image className="max-md:w-[30%] max-sm:w-[20%]" src={twibble2} alt='twibble' property='true' />
                        <Image className="max-md:w-[30%] max-sm:w-[20%]" src={twibble3} alt='twibble' property='true' />
                        <Image className="max-md:w-[30%] max-sm:w-[20%]" src={twibble4} alt='twibble' property='true'/>
                    </div>                    
                </div>
                <div className="flex flex-col gap-5">
                    <p className="text-3xl font-bold">{product.name}</p>
                    <div className="flex gap-4 items-center">
                        <p className="flex items-center font-bold">SKU <p className="text-gray-400"> : SO-450</p></p>
                        <p className="text-gray-400 font-bold flex items-center gap-2"><IoCheckboxOutline size={25} /> {product.status}</p>
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
                    <p className="text-orange-400 text-3xl font-bold max-lg:justify-center flex">{product.price} TND</p>
                    <div className=" flex items-center max-lg:flex-col gap-3 max-lg:justify-center">
                        <p>Quantity</p>
                        <div className="flex items-center">
                            <p className="p-5 border-2">{count}</p>
                            <div className="border-t-2 border-r-2 border-b-2 py-4 px-2">
                                <IoIosArrowUp className="cursor-pointer" onClick={increment} />
                                <IoIosArrowDown className="cursor-pointer" onClick={decrement} />
                            </div>                        
                        </div>
                        <p className="text-white bg-orange-400 px-10 py-2 rounded-md">Add to cart</p>
                        <p className="text-white bg-black px-10 py-2 rounded-md">Buy now</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default FirstBlock;
