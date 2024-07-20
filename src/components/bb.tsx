import Image from 'next/image';
import React from 'react';
import {
    facebook,
    linkedin,
    X,
    pinterest,
    payment,
    googleplay,
    appstore,
    luxehome
} from '../../public/image';
import { CiShop, CiShoppingCart,CiUser } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TransitionLink } from './utils/TransitionLink';
import { FaArrowRight } from "react-icons/fa6";
export default function Bb() {
    return (
        <div>
            <div className='bg-blue-900 text-white items-center justify-center  flex py-12 max-md:pb-28 max-md:pt-8   w-[full]'>
                <div className='flex items-start justify-between  w-[80%]'>
                    <div className='flex flex-col gap-8  max-sm:flex-col max-sm:flex max-sm:items-center max-sm:justify-centeritems-center'>                    
                        <Image src={luxehome} alt="luxehome" />
                        <div className="gap-5 flex flex-col "> 
                            <p>5080 Teboulba Monastir, Tunisie</p>
                            <p className="flex items-center gap-2 "><CiPhone size={25} /> +216 12 345 778</p>
                            <p className='flex gap-2 items-center'><CiMail className='fill-cyan-400 ' size={25}/> support@Nproject.com</p>                                           
                        </div>
                    </div>
                    <div className=" flex max-md:gap-10 max-md:flex-wrap w-1/3 justify-between items-center  ">
                        <ul className='flex-col flex gap-4'>
                            <p className="text-white font-bold text-xl md:text-2xl ">Quick links</p>
                            <div className='flex-col gap-2 flex'>
                                <TransitionLink href="/">
                                    <li className=" text-xs  hover:text-white cursor-pointer">
                                        Home
                                    </li>
                                </TransitionLink>
                                <TransitionLink href="/about">
                                    <li className=" text-xs  hover:text-white cursor-pointer">
                                        About
                                    </li>
                                </TransitionLink>
                                <TransitionLink href="#">
                                    <li className=" text-xs  hover:text-white cursor-pointer">
                                        Annonce
                                    </li>
                                </TransitionLink>
                                <TransitionLink href="#">
                                    <li className=" text-xs  hover:text-white cursor-pointer">
                                        Services
                                    </li>
                                </TransitionLink>
                                <TransitionLink href="/blog">
                                    <li className=" text-xs  hover:text-white cursor-pointer">
                                        Blogs
                                    </li>
                                </TransitionLink>
                                <TransitionLink href="/">
                                    <li className=" text-xs  hover:text-white cursor-pointer">
                                        devenez vendeur
                                    </li>
                                </TransitionLink>                                
                            </div>
                        </ul>
                        <ul className='flex flex-col mb-7 gap-4'>
                            <p className="text-white font-bold text-xl md:text-2xl ">Decouverte</p>
                            <div className='flex max-sm:flex max-sm:gap-8 justify-between'>
                                <div className='flex flex-col gap-2'>
                                    <li className=" text-xs  hover:text-white cursor-pointer">
                                        Monastir
                                    </li>
                                    <li className=" text-xs  hover:text-white cursor-pointer">
                                        Sousse
                                    </li>
                                    <li className=" text-xs  hover:text-white cursor-pointer">
                                        Mahdia
                                    </li>
                                    <li className=" text-xs  hover:text-white cursor-pointer">
                                        Nabeul
                                    </li>
                                    <li className=" text-xs  hover:text-white cursor-pointer">
                                        Sfax
                                    </li>
                                </div>                            
                            </div>
                        </ul>                    
                    </div>
                    <div className='flex flex-col gap-4 items-start'>
                        <p>Abonnez-vous a notre newsletter!</p>
                        <div className="relative w-full">
                            <input
                                className="w-full h-12 px-4 py-2 rounded-full border text-black border-gray-300 pr-16"
                                type="text"
                                placeholder="Email address"
                            />
                            <div className=" absolute right-2 top-1/2 group overflow-hidden  -translate-y-1/2">
                                <button className="relative  py-2 w-[40px] h-[40px]     px-2   rounded-full text-white bg-orange-500 hover:bg-orange-600 ">                                        
                                </button>
                                <FaArrowRight className="absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 duration-500 group-hover:translate-x-[250%]" />
                                <FaArrowRight className="absolute  top-1/2 right-[150%] -translate-y-1/2 translate-x-1/2 duration-500 group-hover:translate-x-[300%]" />
                            </div>
                        </div>
                        <p>Suivez-nous sur</p>
                        <div className='flex ms-8 items-center gap-2'>
                            <FaLinkedinIn className="hover:text-blue-500"  size={25} />
                            <FaFacebookF className="hover:text-blue-500" size={25} />
                            <FaInstagram className='hover:bg-gradient-to-r from-orange-500 overflow-hidden rounded-lg via-pink-500 to-indigo-500 ' fill="currentcolor" size={25} />                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white flex items-center justify-center w-full py-3">
                <div className="w-[60%] flex items-center justify-between text-cyan-500 font-bold">
                    <p>© Nproject - All rights reserved</p>
                    <div className=" flex items-center gap-8">
                        <p>Terms and conditions</p>
                        <p>Privacy Policy</p>
                        <p>Disclaimer</p>
                    </div>
                </div>
            </div>            
            <div className="fixed lg:hidden bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                <div className="flex justify-between px-2 h-full max-w-lg grid-cols-4 mx-auto font-medium">
                    <button className="inline-flex flex-col items-center justify-center   dark:hover:bg-gray-800 group">
                        <CiShop size={25} className="   dark:text-gray-400 group-hover:text-orange-600 dark:group-hover:text-orange-500" aria-hidden="true" fill="currentColor" />
                        <span className="text-sm  dark:text-gray-400 group-hover:text-orange-600 dark:group-hover:text-blue-500">shop</span>
                    </button>
                    <button type="button" className="inline-flex flex-col items-center justify-center   dark:hover:bg-gray-800 group">
                        <CiFilter size={25} className="   dark:text-gray-400 group-hover:text-orange-600 dark:group-hover:text-blue-500" aria-hidden="true" fill="currentColor" />
                        <span className="text-sm  dark:text-gray-400 group-hover:text-orange-600 dark:group-hover:text-blue-500">Filters</span>
                    </button>
                    <button type="button" className="inline-flex flex-col items-center justify-center   dark:hover:bg-gray-800 group">
                        <GoHeart size={25} className="   dark:text-gray-400 group-hover:text-orange-600 dark:group-hover:text-blue-500" aria-hidden="true" fill="currentColor" />
                        <span className="text-sm  dark:text-gray-400 group-hover:text-orange-600 dark:group-hover:text-blue-500">Whishlist</span>
                    </button>
                    <button type="button" className="inline-flex flex-col items-center justify-center   dark:hover:bg-gray-800 group">
                        <CiShoppingCart size={25} className="   dark:text-gray-400 group-hover:text-orange-600 dark:group-hover:text-blue-500" aria-hidden="true" fill="currentColor" />
                        <span className="text-sm  dark:text-gray-400 group-hover:text-orange-600 dark:group-hover:text-blue-500">Cart</span>
                    </button>
                    <button type="button" className="inline-flex flex-col items-center justify-center   dark:hover:bg-gray-800 group">
                        <CiUser size={25} className="   dark:text-gray-400 group-hover:text-orange-600 dark:group-hover:text-blue-500" aria-hidden="true" fill="currentColor" />
                        <span className="text-sm  dark:text-gray-400 group-hover:text-orange-600 dark:group-hover:text-blue-500  ">Account</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
