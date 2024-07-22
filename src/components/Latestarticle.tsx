import React from 'react';
import Image from 'next/image';
import { mackay, steak1, bathroom, office, resto, share, comment } from "../../public/image";
import {itemsarticle} from "../../public/data"
import Link from 'next/link';
import { TransitionLink } from './utils/TransitionLink';
import { FaArrowRight } from "react-icons/fa6";

const Latestarticle = () => {
    return (
        <div className='py-8 h-fit w-full flex flex-col justify-center items-center gap-10 '>
            <div className='  max-md:text-center flex justify-between items-center max-md:4/5 w-4/5 max-md:flex-col max-md:gap-4  '>
                <h3 className=' font-bold max-md:text-2xl text-2xl text-gray-800'>
                    Latest articles
                </h3>
                <TransitionLink href="/blog">
                    <Link href='#' className='relative flex items-center justify-center p-4 px-12 py-4 overflow-hidden  transition duration-300 ease-out  rounded-full group'>
                        <span className="absolute flex items-center  justify-center w-full h-full text-white duration-300 -translate-x-full bg-black lg:group-hover:translate-x-0 ease">
                            <FaArrowRight  className='w-5 h-5 ' />
                        </span>
                        <span className="absolute flex items-center text-xl font-bold justify-center w-full h-full bg-white text-black transition-all duration-300 transform lg:group-hover:translate-x-full ease ">
                            Visit the Blog
                        </span>
                        <span className="relative invisible">Visit the Blog</span>                          
                    </Link>
                </TransitionLink>
            </div>
            <div className='grid grid-cols-4 group max-xl:grid-cols-2 max-md:grid-cols-1 max-xl:gap-8  gap-16   '>
                {itemsarticle.map((item, index) => (<div className='flex cursor-pointer duration-500 lg:group-hover:scale-[0.95] lg:hover:!scale-100 flex-col justify-center items-center w-[322px]  '>
                    <div key={index} className="relative justify-center w-[322px] flex ">
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
                                <p className="text-gray-700 text-2xl font-bold">{item.title}</p>
                                <p className="text-gray-400">{item.text} </p>
                            </div>
                            <p className="text-orange-800">Continue reading</p>
                        </div>
                    </div>
                </div>))}

            </div>
        </div>
    );
}

export default Latestarticle;
