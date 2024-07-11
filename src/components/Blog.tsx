import React from 'react';
import Image from 'next/image';
import { mackay, steak1, bathroom, office, resto, share, comment, resto1, office1, livingroom4, livingroom5 } from "../../public/image";

const Blog = () => {
    return (
        <div className=' py-8 w-full items-center flex justify-center '>
            <div className='grid grid-cols-4 gap-8  max-md:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 '>
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
                        <Image className='rounded-t-lg w-[322px] ' src={resto1} alt="steak" />
                    </div>
                    <div className='flex flex-col rounded-b-lg gap-2  bg-white w-[322px]  h-[214px] pl-2 '>
                        <p className="text-gray-400">Design trends / 18 Apr 2023</p>
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-2">
                                <p className="text-gray-700 text-2xl font-bold">The clean series</p>
                                <p className="text-gray-400">So when is it okey to use lorem ipsum?
                                    First, lorem ipsum works well for staging. It's like the prop... </p>
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
                        <Image className='rounded-t-lg w-[322px] ' src={office1} alt="steak" />
                    </div>
                    <div className='flex flex-col rounded-b-lg gap-2  bg-white w-[322px]  h-[214px] pl-2 '>
                        <p className="text-gray-400">Inspiration / 26 May 2023</p>
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-2">
                                <p className="text-gray-700 text-2xl font-bold">Here comes autumn</p>
                                <p className="text-gray-400">HThe passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-tr... </p>
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
                        <Image className='rounded-t-lg w-[322px] ' src={livingroom4} alt="steak" />
                    </div>
                    <div className='flex flex-col rounded-b-lg gap-2  bg-white w-[322px]  h-[214px] pl-2 '>
                        <p className="text-gray-400">Decoration / 03 Apr 2023</p>
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-2">
                                <p className="text-gray-700 text-2xl font-bold">luxury bed now available</p>
                                <p className="text-gray-400">As an alternative theory,(and because latin scholars do this sory of thing) someone tracked down a ... </p>
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
                        <Image className='rounded-t-lg w-[322px] ' src={livingroom5} alt="steak" />
                    </div>
                    <div className='flex flex-col rounded-b-lg gap-2  bg-white w-[322px]  h-[214px] pl-2 '>
                        <p className="text-gray-400">Furniture / 28 Mar 2023</p>
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-2">
                                <p className="text-gray-700 text-xl font-bold">Expands furniture resources</p>
                                <p className="text-gray-400">So how did the classical latin become so incoherent? According to McClintock, a 15th century typeset... </p>
                            </div>
                            <p className="text-orange-800">Continue reading</p>
                        </div>
                    </div>
                </div>                                
            </div>
        </div>
    );
}

export default Blog;