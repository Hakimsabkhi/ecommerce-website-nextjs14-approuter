import React from 'react';
import Image from 'next/image';
import { mackay, steak1, bathroom, office, resto, share, comment } from "../../public/image";

const Latestarticle = () => {
    return (
        <div className='py-8 h-fit w-full flex flex-col justify-center items-center gap-10 '>
            <div className='  max-md:text-center flex justify-between items-center max-md:4/5 w-4/5 max-md:flex-col max-md:gap-4  '>
                <h3 className=' font-bold max-md:text-2xl text-2xl text-gray-800'>
                    Latest articles
                </h3>
                <a href='/blog' className='bg-white px-6 py-2 rounded-full font-bold '>Visit the Blog ---&gt; </a>
            </div>
            <div className='grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1 max-xl:gap-8  gap-16   '>
                <div className='flex flex-col justify-center items-center w-[322px]  '>
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
                        <Image className='rounded-t-lg w-[322px] ' src={steak1} alt="steak" />
                    </div>
                    <div className='flex flex-col rounded-b-lg gap-2  bg-white w-[322px]  h-[214px] pl-2  '>
                        <p className="text-gray-400">Decoration / 26 May 2023</p>
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-2">
                                <p className="text-gray-700 text-2xl font-bold">In the heart of valencia</p>
                                <p className="text-gray-400">As an alternative theory, (and because latin scholars do this sort of thing) someone tracked down a ... </p>
                            </div>
                            <p className="text-orange-800">Continue reading</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center w-[322px]  '>
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
                        <Image className='rounded-t-lg w-[322px] ' src={bathroom} alt="steak" />
                    </div>
                    <div className='flex flex-col rounded-b-lg gap-2  bg-white w-[322px]  h-[214px] pl-2 '>
                        <p className="text-gray-400">Furniture / 09 may 2023</p>
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-2">
                                <p className="text-gray-700 text-2xl font-bold">Ethimo mountain style</p>
                                <p className="text-gray-400">So how did the classical latin become so incohere,t? According to McClintock, a 15th century typeset.. </p>
                            </div>
                            <p className="text-orange-800">Continue reading</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center w-[322px]  '>
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
                        <Image className='rounded-t-lg w-[322px] ' src={office} alt="steak" />
                    </div>
                    <div className='flex flex-col rounded-b-lg gap-2  bg-white w-[322px]  h-[214px] pl-2 '>
                        <p className="text-gray-400">Wooden accessories / 30 Apr 2023</p>
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-2">
                                <p className="text-gray-700 text-2xl font-bold">For clear thinking</p>
                                <p className="text-gray-400">The passage experienced a surge in popularity during the 1960s when letraset used it on their dry-tr... </p>
                            </div>
                            <p className="text-orange-800">Continue reading</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center w-[322px]  '>
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
                        <Image className='rounded-t-lg w-[322px] ' src={resto} alt="steak" />
                    </div>
                    <div className='flex flex-col rounded-b-lg gap-2  bg-white w-[322px]  h-[214px] pl-2 '>
                        <p className="text-gray-400">Furniture / 28 Mar 2023</p>
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-2">
                                <p className="text-gray-700 text-xl font-bold">Expands furniture resources</p>
                                <p className="text-gray-400">As an alternative theory,(and because Latin scholars do this sort of thing) someone tracked down a ... </p>                                
                            </div>
                            <p className="text-orange-800">Continue reading</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Latestarticle;
