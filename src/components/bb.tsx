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

export default function Bb() {
    return (
        <div>
            <div className='bg-black items-center justify-center  flex pt-8 max-md:pb-28 max-md:pt-8 gap-10 flex-col w-full'>
                <div className='flex w-4/5 max-sm:flex-col max-sm:flex max-sm:items-center max-sm:justify-center justify-between items-center'>
                    <div className="  flex justify-center md:justify-start">
                        <Image src={luxehome} alt="luxehome" />
                    </div>
                    <div className=" flex gap-4 items-center">
                        <h3 className="font-bold text-white text-lg ">Subscribe us:</h3>
                        <div className="flex ">
                            <a href="#"><Image src={facebook} alt="Facebook" width={40} height={40} /></a>
                            <a href="#"><Image src={X} alt="X" width={40} height={40} /></a>
                            <a href="#"><Image src={pinterest} alt="Pinterest" width={40} height={40} /></a>
                            <a href="#"><Image src={linkedin} alt="LinkedIn" width={40} height={40} /></a>
                        </div>
                    </div>
                </div>
                <div className=" flex max-sm:gap-10 max-sm:flex-wrap w-4/5 justify-between items-center  ">
                    <ul className='flex-col flex gap-4'>
                        <p className="text-white font-bold text-xl md:text-2xl ">Useful links</p>
                        <div className='flex-col gap-8 flex'>
                            <li className="text-gray-500 text-xs  hover:text-white cursor-pointer">
                                About Us
                            </li>
                            <li className="text-gray-500 text-xs  hover:text-white cursor-pointer">
                                Contact Us
                            </li>
                            <li className="text-gray-500 text-xs  hover:text-white cursor-pointer">
                                Showrooms
                            </li>
                            <li className="text-gray-500 text-xs  hover:text-white cursor-pointer">
                                Blog
                            </li>
                            <li className="text-gray-500 text-xs  hover:text-white cursor-pointer">
                                Gift Cards
                            </li>
                        </div>
                    </ul>
                    <ul className='flex flex-col w-1/3 gap-4'>
                        <p className="text-white font-bold text-xl md:text-2xl ">Categories</p>
                        <div className='flex max-sm:flex max-sm:gap-8 justify-between'>
                            <div className='flex flex-col gap-8'>
                                <li className="text-gray-500 text-xs  hover:text-white cursor-pointer">
                                    Chair
                                </li>
                                <li className="text-gray-500 text-xs  hover:text-white cursor-pointer">
                                    Tables
                                </li>
                                <li className="text-gray-500 text-xs  hover:text-white cursor-pointer">
                                    Sofas
                                </li>
                                <li className="text-gray-500 text-xs  hover:text-white cursor-pointer">
                                    Armchairs
                                </li>
                                <li className="text-gray-500 text-xs  hover:text-white cursor-pointer">
                                    Beds
                                </li>
                            </div>
                            <ul className='flex-col flex gap-8'>
                                <li className="text-gray-500 text-xs  hover:text-white cursor-pointer">
                                    Storage
                                </li>
                                <li className="text-gray-500 text-xs  hover:text-white cursor-pointer">
                                    Textiles
                                </li>
                                <li className="text-gray-500 text-xs  hover:text-white cursor-pointer">
                                    Lighting
                                </li>
                                <li className="text-gray-500 text-xs  hover:text-white cursor-pointer">
                                    Toys
                                </li>
                                <li className="text-gray-500 text-xs  hover:text-white cursor-pointer">
                                    Decor
                                </li>
                            </ul>
                        </div>
                    </ul>
                    <div className=' w-full max-sm:flex-col max-sm:flex max-sm:items-center md:w-auto'>
                        <div className="">
                            <h3 className="font-bold text-white text-lg ">Download App on Mobile</h3>
                            <p className=" text-xs text-gray-500">15% discount on your first purchase</p>
                            <div className="flex ">
                                <a href="#"><Image src={googleplay} alt="Google Play" width={120} height={40} /></a>
                                <a href="#"><Image src={appstore} alt="App Store" width={120} height={40} /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full max-sm:flex-col max-sm:flex-  max-sm:w-4/5 text-white flex flex-col  justify-around items-center '>
                    <div className="border-t w-full max-sm:flex-col max-sm:items-center  border-gray-700 h-10 max-sm:gap-2 flex  justify-around items-center">
                        <div className='flex max-sm:flex-wrap max-sm:items-center   gap-1 text-center'>
                            <p className="text-xs font-bold">LuxeHome</p>
                            <p className='text-xs'>© 2024 CREATED BY</p>
                            <p className='font-bold text-xs'>XTEMOS STUDIO.</p>
                            <p className='text-xs'>PREMIUM E-COMMERCE SOLUTIONS.</p>
                        </div>
                        <div className=" ">
                            <Image className='' src={payment} alt="Payment Methods" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed md:hidden bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                <div className="flex justify-between px-2 h-full max-w-lg grid-cols-4 mx-auto font-medium">
                    <button className="inline-flex flex-col items-center justify-center   dark:hover:bg-gray-800 group">
                        <CiShop size={25} className="  text-gray-500 dark:text-gray-400 group-hover:text-orange-600 dark:group-hover:text-orange-500" aria-hidden="true" fill="currentColor" />
                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-orange-600 dark:group-hover:text-blue-500">shop</span>
                    </button>
                    <button type="button" className="inline-flex flex-col items-center justify-center   dark:hover:bg-gray-800 group">
                        <CiFilter size={25} className="  text-gray-500 dark:text-gray-400 group-hover:text-orange-600 dark:group-hover:text-blue-500" aria-hidden="true" fill="currentColor" />
                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-orange-600 dark:group-hover:text-blue-500">Filters</span>
                    </button>
                    <button type="button" className="inline-flex flex-col items-center justify-center   dark:hover:bg-gray-800 group">
                        <GoHeart size={25} className="  text-gray-500 dark:text-gray-400 group-hover:text-orange-600 dark:group-hover:text-blue-500" aria-hidden="true" fill="currentColor" />
                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-orange-600 dark:group-hover:text-blue-500">Whishlist</span>
                    </button>
                    <button type="button" className="inline-flex flex-col items-center justify-center   dark:hover:bg-gray-800 group">
                        <CiShoppingCart size={25} className="  text-gray-500 dark:text-gray-400 group-hover:text-orange-600 dark:group-hover:text-blue-500" aria-hidden="true" fill="currentColor" />
                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-orange-600 dark:group-hover:text-blue-500">Cart</span>
                    </button>
                    <button type="button" className="inline-flex flex-col items-center justify-center   dark:hover:bg-gray-800 group">
                        <CiUser size={25} className="  text-gray-500 dark:text-gray-400 group-hover:text-orange-600 dark:group-hover:text-blue-500" aria-hidden="true" fill="currentColor" />
                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-orange-600 dark:group-hover:text-blue-500  ">Account</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
