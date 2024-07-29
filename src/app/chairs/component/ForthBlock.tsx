import React from 'react';
import Image from 'next/image';
import { aboutbrand, facebook, linkedin, pinterest, aboutchair, abouttable, aboutarmchair, aboutstorage, } from '../../../../public/image';
import { Product } from '../../../../public/data'; // Ensure the path is correct
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";


const ForthBlock: React.FC<{ product: Product }> = ({ product }) => {
    return (
        <main className=' desktop max-lg:w-[95%] my-10 bg-white rounded-lg flex flex-col gap-20  '>
            {/* top */}
            <div className="flex max-lg:flex-col justify-between">
                <div className="w-[50%] max-lg:w-full flex flex-col  gap-8 p-4">
                    <div>
                        <p className="text-xl ">Customer Review</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <p className="text-4xl font-bold">{product.rating}</p>
                        <div className="text-orange-400 flex items-center gap-1">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />                                                    
                        </div>
                        <p className="text-gray-400 text-sm">2 reviews</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className=" flex items-center gap-2">
                            <div className="flex gap-1 items-center text-orange-400">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>                                                            
                            <div className="w-full bg-orange-400 rounded-full h-2.5 dark:bg-gray-700">                                    
                            </div>                            
                            <p className="text-gray-400">2</p>                                            
                        </div>
                        <div className=" flex items-center gap-2">
                            <div className="flex gap-1 items-center text-orange-400">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaRegStar />
                            </div>                                                            
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">                                    
                            </div>                            
                            <p className="text-gray-400">0</p>                                            
                        </div>
                        <div className=" flex items-center gap-2">
                            <div className="flex gap-1 items-center text-orange-400">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaRegStar />
                                <FaRegStar />
                            </div>                                                            
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">                                    
                            </div>                            
                            <p className="text-gray-400">0</p>                                            
                        </div>
                        <div className=" flex items-center gap-2">
                            <div className="flex gap-1 items-center text-orange-400">
                                <FaStar />
                                <FaStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                            </div>                                                            
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">                                    
                            </div>                            
                            <p className="text-gray-400">0</p>                                            
                        </div>
                        <div className=" flex items-center gap-2">
                            <div className="flex gap-1 items-center text-orange-400">
                                <FaStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                            </div>                                                            
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">                                    
                            </div>                            
                            <p className="text-gray-400">0</p>                                            
                        </div>                       
                    </div>
                </div>
                <div className='w-[50%] max-lg:w-full p-4 '>
                    <div className="flex flex-col  gap-5">
                        <p className="text-xl">ADD A REVIEW</p>
                        <p className="text-gray-400">Your email adress will not be published. Required fields are marked *</p>
                        <div className="flex items-center gap-3">
                            <p className="">your rating:</p>
                            <div className="text-orange-400 flex items-center gap-1">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p>your review :</p>
                            <textarea  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-40 px-2.5 py-3   " placeholder="" required />                        
                        </div>
                        <div className="flex flex-col gap-2">
                            <p>Name :</p>
                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p>Email :</p>
                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                        </div>
                        <div className="flex items-center gap-1">
                            <input id="remember" type="checkbox"  className="w-5 h-5   rounded bg-gray-400  "required  />
                            <p className="font-bold ">Save my name, email, and website in this browser for the next time I comment.</p>
                        </div>
                        <p className="px-8 py-2 w-fit text-white bg-orange-400 rounded-md">Submit</p>
                    </div>                
                </div>
            </div>
            {/* mid */}
            <div className="flex flex-col gap-4">
                <div className="px-4 flex items-center justify-between">
                    <p className="text-lg">2 reviews for twibble</p>
                    <select className="bg-gray-200 border border-gray-300 text-gray-400  rounded-full  block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option >default</option>
                    </select>
                </div>
                {/* bottom */}
                <div className="flex max-lg:flex-col justify-between">
                    {/* first half */}
                    <div className="w-[50%] max-lg:w-full flex flex-col   p-4">
                        <div className="flex flex-col gap-20 border-2 border-gray-400 rounded-t-lg px-4 py-8 ">
                            <div className="flex flex-col gap-8 ">
                                <div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-lg font-bold">Ema norton</p>
                                        <p className="text-gray-400">April 12,2023</p>
                                    </div>
                                    <div className="text-orange-400 flex items-center gap-1">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                </div>
                                <p className="text-gray-400">Usually, we prefer the real thing, wine without sulfur based preservatives, real butter, not margarine, and so we’d like our layouts and designs to be filled with real words, with thoughts that count, information that has value.</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <AiOutlineLike size={25} />
                                    <p className="text-2xl">0</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <AiOutlineDislike size={25} />
                                    <p className="text-2xl">0</p>
                                </div>                                
                            </div>
                        </div>
                        <div className="flex flex-col  border-2 bg-gray-200 border-gray-400 rounded-b-lg px-4 py-8">
                            <div className="flex flex-col gap-4 ">                                
                                <div className="flex justify-between items-center">
                                    <p className="text-lg font-bold">Mr. Mackay</p>
                                    <p className="text-gray-400">April 12,2023</p>
                                </div>                                                                    
                                <p className="text-gray-400">Rigid proponents of content strategy may shun the use of dummy copy but then designers might want to ask them to provide style sheets with the copy decks they supply that are in tune with the design direction they require.</p>
                            </div>                            
                        </div>
                    </div>
                    {/* second half */}
                    <div className="w-[50%] max-lg:w-full flex flex-col   p-4">
                        <div className="flex flex-col gap-20 border-2 border-gray-400 rounded-t-lg px-4 py-8 ">
                            <div className="flex flex-col gap-8 ">
                                <div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-lg font-bold">Ema norton</p>
                                        <p className="text-gray-400">April 12,2023</p>
                                    </div>
                                    <div className="text-orange-400 flex items-center gap-1">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                </div>
                                <p className="text-gray-400">Usually, we prefer the real thing, wine without sulfur based preservatives, real butter, not margarine, and so we’d like our layouts and designs to be filled with real words, with thoughts that count, information that has value.</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <AiOutlineLike size={25} />
                                    <p className="text-2xl">0</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <AiOutlineDislike size={25} />
                                    <p className="text-2xl">0</p>
                                </div>                                
                            </div>
                        </div>
                        <div className="flex flex-col  border-2 bg-gray-200 border-gray-400 rounded-b-lg px-4 py-8">
                            <div className="flex flex-col gap-4 ">                                
                                <div className="flex justify-between items-center">
                                    <p className="text-lg font-bold">Mr. Mackay</p>
                                    <p className="text-gray-400">April 12,2023</p>
                                </div>                                                                    
                                <p className="text-gray-400">Rigid proponents of content strategy may shun the use of dummy copy but then designers might want to ask them to provide style sheets with the copy decks they supply that are in tune with the design direction they require.</p>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ForthBlock;