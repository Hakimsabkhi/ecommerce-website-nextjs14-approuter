import React from 'react';
import Image from 'next/image';
import { mackay, steak1, bathroom, office, resto, share, comment, resto1, office1, livingroom4, livingroom5, right } from "../../public/image";
import { itemsblog } from "../../public/data"
const Blog = () => {
    return (
        <div className=' py-8 w-full items-center flex flex-col gap-5 justify-center '>
            <div className='grid grid-cols-4 gap-8  max-md:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 '>
                {itemsblog.map((item, index) => (
                    <div key={index} className='flex flex-col cursor-pointer justify-center items-center w-[322px]  '>
                        <div className="relative justify-center w-[322px] flex ">
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
                            <Image className='rounded-t-lg w-[322px] ' src={item.src} alt="steak" />
                        </div>
                        <div className='flex flex-col rounded-b-lg gap-2  bg-white w-[322px]  h-[214px] pl-2  '>
                            <p className="text-gray-400">{item.date}</p>
                            <div className="flex flex-col gap-10">
                                <div className="flex flex-col gap-2">
                                    <p className="text-gray-700  text-xl font-bold">{item.titlexl}</p>
                                    <p className="text-gray-700  text-2xl font-bold">{item.title}</p>
                                    <p className="text-gray-400">{item.text} </p>
                                </div>
                                <p className="text-orange-800">Continue reading</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex justify-center items-center gap-x-4 '>
                <p className='cursor-pointer text-3xl rounded-lg py-3 px-5 bg-orange-400'>1</p>
                <p className='px-5 cursor-pointer py-3 text-3xl rounded-lg '>2</p>
                <Image className='cursor-pointer' src={right} alt="arrow" />
            </div>
        </div>
    );
}

export default Blog;