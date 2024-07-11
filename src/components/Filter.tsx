"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Hay1, poliform1, vitra1, diag1, diag2, diag3, right, heart, star, decor2, chair6, chair7, chair8, chair9, chair10, chair11, chair12, chair13, chair14, chair15, chair16, chair17, } from "../../public/image";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { sortby } from "../../public/image";

const Filter = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleNav = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div className='flex py-8 w-full justify-center gap-8  max-md:flex-col '>
            <div className='flex-col flex gap-4 max-md:flex-col max-md:justify-center max-md:hidden max-md:items-center'>
                <div className=' flex-col gap-4 flex bg-white container w-full rounded-lg px-10 py-8 '>
                    <p className='font-bold'>Filter By Price</p>
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <p className='text-xs text-gray-400'>Price:</p>
                            <p className='text-xs'>270 TND-630 TND</p>
                        </div>
                        <p className='bg-orange-400  rounded-full text-white text-xs px-4 py-1'>filter</p>
                    </div>
                    <div>
                        <p className='font-bold'>Filter By Brand</p>
                    </div>
                    <div className='w-full'>
                        <input className="  px-2 py-1 rounded-full border border-gray-300" type="text" placeholder='Find a Brand' />
                    </div>
                    <div className='flex w-full justify-between items-center'>
                        <div className='flex gap-4  items-center '>
                            <Image src={Hay1} alt="hay" />
                            <p className='text-gray-500'>Hay</p>
                        </div>
                        <div>
                            <p className='ring-1 ring-gray-400 rounded-full px-4 py-1 '>6</p>
                        </div>
                    </div>
                    <div className='flex w-full justify-between items-center'>
                        <div className='flex items-center gap-4'>
                            <Image src={poliform1} alt="hay" />
                            <p className='text-gray-500'>poliform</p>
                        </div>
                        <div>
                            <p className='ring-1 ring-gray-400 rounded-full px-4 py-1 '>6</p>
                        </div>
                    </div>
                    <div className='flex w-full justify-between items-center'>
                        <div className='flex items-center gap-4'>
                            <Image src={vitra1} alt="hay" />
                            <p className='text-gray-500'>vitra</p>
                        </div>
                        <div>
                            <p className='ring-1 ring-gray-400 rounded-full px-4 py-1 '>4</p>
                        </div>
                    </div>
                    <div>
                        <p className='font-bold'>Color</p>
                    </div>
                    <div className=''>
                        <input className="  px-2 py-1 rounded-full border border-gray-300" type="text" placeholder='Find a Color' />
                    </div>
                    <div className='flex  justify-between items-center'>
                        <div className='flex items-center gap-3'>
                            <p className='px-2 ring-2 ring-offset-2 ring-gray-300 py-2 rounded-full bg-gray-400'></p>
                            <p className='text-gray-500'>Amercian Silver</p>
                        </div>
                        <div>
                            <p className='ring-1 ring-gray-400 rounded-full px-4 py-1 '>3</p>
                        </div>
                    </div>
                    <div className='flex  justify-between items-center'>
                        <div className='flex items-center gap-3'>
                            <p className='px-2 ring-2 ring-offset-2 ring-gray-300 py-2 rounded-full bg-orange-200'></p>
                            <p className='text-gray-500'>Bone</p>
                        </div>
                        <div>
                            <p className='ring-1 ring-gray-400 rounded-full px-4 py-1 '>4</p>
                        </div>
                    </div>
                    <div className='flex  justify-between items-center'>
                        <div className='flex items-center gap-3'>
                            <p className='px-2 ring-2 ring-offset-2 ring-gray-300 py-2 rounded-full bg-gray-600'></p>
                            <p className='text-gray-500'>Dark Gray</p>
                        </div>
                        <div>
                            <p className='ring-1 ring-gray-400 rounded-full px-4 py-1 '>2</p>
                        </div>
                    </div>
                    <div className='flex  justify-between items-center'>
                        <div className='flex items-center gap-3'>
                            <p className='px-2 ring-2 ring-offset-2 ring-gray-300 py-2 rounded-full bg-gray-500'></p>
                            <p className='text-gray-500'>Gray</p>
                        </div>
                        <div>
                            <p className='ring-1 ring-gray-400 rounded-full px-4 py-1 '>2</p>
                        </div>
                    </div>
                    <div className='flex  justify-between items-center'>
                        <div className='flex items-center gap-3'>
                            <p className='px-2 ring-2 ring-offset-2 ring-gray-300 py-2 rounded-full bg-green-900'></p>
                            <p className='text-gray-500'>Green</p>
                        </div>
                        <div>
                            <p className='ring-1 ring-gray-400 rounded-full px-4 py-1 '>1</p>
                        </div>
                    </div>
                    <div className='flex  justify-between items-center'>
                        <div className='flex items-center gap-3'>
                            <p className='px-2 ring-2 ring-offset-2 ring-gray-300 py-2 rounded-full bg-green-950'></p>
                            <p className='text-gray-500'>Jet</p>
                        </div>
                        <div>
                            <p className='ring-1 ring-gray-400 rounded-full px-4 py-1 '>4</p>
                        </div>
                    </div>
                    <div>
                        <p className='font-bold'>Materials</p>
                    </div>
                    <div className='flex  justify-between items-center'>
                        <div className='flex items-center gap-x-2'>
                            <input id="default-checkbox" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded " />
                            <p className='text-gray-500'>Fabric</p>
                        </div>
                        <div>
                            <p className='ring-1 ring-gray-400 rounded-full px-4 py-1 '>7</p>
                        </div>
                    </div>
                    <div className='flex  justify-between items-center'>
                        <div className='flex items-center gap-x-2'>
                            <input id="default-checkbox" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <p className='text-gray-500'>Leather</p>
                        </div>
                        <div>
                            <p className='ring-1 ring-gray-400 rounded-full px-4 py-1 '>1</p>
                        </div>
                    </div>
                    <div className='flex  justify-between items-center'>
                        <div className='flex items-center gap-x-2'>
                            <input id="default-checkbox" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <p className='text-gray-500'>Metal</p>
                        </div>
                        <div>
                            <p className='ring-1 ring-gray-400 rounded-full px-4 py-1 '>6</p>
                        </div>
                    </div>
                    <div className='flex  justify-between items-center'>
                        <div className='flex items-center gap-x-2'>
                            <input id="default-checkbox" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <p className='text-gray-500'>Plastic</p>
                        </div>
                        <div>
                            <p className='ring-1 ring-gray-400 rounded-full px-4 py-1 '>4</p>
                        </div>
                    </div>
                    <div className='flex  justify-between items-center'>
                        <div className='flex items-center gap-x-2'>
                            <input id="default-checkbox" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <p className='text-gray-500'>Rattan</p>
                        </div>
                        <div>
                            <p className='ring-1 ring-gray-400 rounded-full px-4 py-1 '>1</p>
                        </div>
                    </div>
                    <div className='flex  justify-between items-center'>
                        <div className='flex items-center gap-x-2'>
                            <input id="default-checkbox" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <p className='text-gray-500'>Wood</p>
                        </div>
                        <div>
                            <p className='ring-1 ring-gray-400 rounded-full px-4 py-1 '>10</p>
                        </div>
                    </div>
                    <div>
                        <p className='font-bold'>Product status</p>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 ">
                            <input id="default-checkbox" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label className="   text-gray-500 dark:text-gray-300">On sale</label>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 ">
                            <input id="default-checkbox" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label className="   text-gray-500 dark:text-gray-300">On sale</label>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 ">
                            <input id="default-checkbox" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label className="   text-gray-500 dark:text-gray-300">On sale</label>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <div className='absolute flex-col  flex gap-3  text-white bottom-28 left-6'>
                        <p className="font-bold">Upholstered chair</p>
                        <p className='text-sm text-gray-200'>Discount 10 %</p>
                    </div>
                    <div className='absolute flex-col  flex gap-3  text-white bottom-16 left-6'>
                        <p className='items-center  bg-white px-2 py-2 rounded-full text-black text-xs  '>Shop now</p>
                    </div>
                    <Image src={decor2} alt="decor" />
                </div>
            </div>
            {menuOpen && (
                <div onClick={handleNav} className='fixed inset-0 bg-black opacity-50 z-40'>

                </div>
            )}
            <div className={
                menuOpen
                    ? "fixed z-50 left-0 top-0 w-[80%] md:hidden h-screen bg-[#ecf0f3] ease-in duration-300"
                    : "fixed z-50 left-[-100%] top-0 h-screen ease-in duration-300"
            }>
                <div onClick={handleNav} className='fixed flex pr-4 justify-end bg-white h-20 border-b-2 w-[80%] items-center z-40'>
                    <div className="flex items-center">
                        <AiOutlineClose size={20} />
                        <p>Close</p>
                    </div>
                </div>
                <div className='flex overflow-y-auto flex-col w-full gap-4 h-full pb-10 pt-16'>
                    <div className='flex-col gap-4 flex bg-white container w-full rounded-lg px-10 py-8 '>
                        <p className='font-bold'>Filter By Price</p>
                        <div className='flex justify-between'>
                            <div className='flex items-center'>
                                <p className='text-xs text-gray-400'>Price:</p>
                                <p className='text-xs'>270 TND-630 TND</p>
                            </div>
                            <p className='bg-orange-400 rounded-full text-white text-xs px-4 py-1'>filter</p>
                        </div>
                        <div>
                            <p className='font-bold'>Filter By Brand</p>
                        </div>
                        <div className='w-full'>
                            <input className="px-2 py-1 rounded-full border border-gray-300" type="text" placeholder='Find a Brand' />
                        </div>
                        <div className='flex w-full justify-between items-center'>
                            <div className='flex gap-4 items-center'>
                                <Image src={Hay1} alt="hay" />
                                <p className='text-gray-500'>Hay</p>
                            </div>
                            <div>
                                <p className='ring-1 ring-gray-400 rounded-full px-4 py-1'>6</p>
                            </div>
                        </div>
                        <div className='flex w-full justify-between items-center'>
                            <div className='flex items-center gap-4'>
                                <Image src={poliform1} alt="poliform" />
                                <p className='text-gray-500'>poliform</p>
                            </div>
                            <div>
                                <p className='ring-1 ring-gray-400 rounded-full px-4 py-1'>6</p>
                            </div>
                        </div>
                        <div className='flex w-full justify-between items-center'>
                            <div className='flex items-center gap-4'>
                                <Image src={vitra1} alt="vitra" />
                                <p className='text-gray-500'>vitra</p>
                            </div>
                            <div>
                                <p className='ring-1 ring-gray-400 rounded-full px-4 py-1'>4</p>
                            </div>
                        </div>
                        <div>
                            <p className='font-bold'>Color</p>
                        </div>
                        <div>
                            <input className="px-2 py-1 rounded-full border border-gray-300" type="text" placeholder='Find a Color' />
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-3'>
                                <p className='px-2 ring-2 ring-offset-2 ring-gray-300 py-2 rounded-full bg-gray-400'></p>
                                <p className='text-gray-500'>American Silver</p>
                            </div>
                            <div>
                                <p className='ring-1 ring-gray-400 rounded-full px-4 py-1'>3</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-3'>
                                <p className='px-2 ring-2 ring-offset-2 ring-gray-300 py-2 rounded-full bg-orange-200'></p>
                                <p className='text-gray-500'>Bone</p>
                            </div>
                            <div>
                                <p className='ring-1 ring-gray-400 rounded-full px-4 py-1'>4</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-3'>
                                <p className='px-2 ring-2 ring-offset-2 ring-gray-300 py-2 rounded-full bg-gray-600'></p>
                                <p className='text-gray-500'>Dark Gray</p>
                            </div>
                            <div>
                                <p className='ring-1 ring-gray-400 rounded-full px-4 py-1'>2</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-3'>
                                <p className='px-2 ring-2 ring-offset-2 ring-gray-300 py-2 rounded-full bg-gray-500'></p>
                                <p className='text-gray-500'>Gray</p>
                            </div>
                            <div>
                                <p className='ring-1 ring-gray-400 rounded-full px-4 py-1'>2</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-3'>
                                <p className='px-2 ring-2 ring-offset-2 ring-gray-300 py-2 rounded-full bg-green-900'></p>
                                <p className='text-gray-500'>Green</p>
                            </div>
                            <div>
                                <p className='ring-1 ring-gray-400 rounded-full px-4 py-1'>1</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-3'>
                                <p className='px-2 ring-2 ring-offset-2 ring-gray-300 py-2 rounded-full bg-green-950'></p>
                                <p className='text-gray-500'>Jet</p>
                            </div>
                            <div>
                                <p className='ring-1 ring-gray-400 rounded-full px-4 py-1'>4</p>
                            </div>
                        </div>
                        <div>
                            <p className='font-bold'>Materials</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-x-2'>
                                <input id="default-checkbox" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                                <p className='text-gray-500'>Fabric</p>
                            </div>
                            <div>
                                <p className='ring-1 ring-gray-400 rounded-full px-4 py-1'>7</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-x-2'>
                                <input id="default-checkbox" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <p className='text-gray-500'>Leather</p>
                            </div>
                            <div>
                                <p className='ring-1 ring-gray-400 rounded-full px-4 py-1'>1</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-x-2'>
                                <input id="default-checkbox" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <p className='text-gray-500'>Metal</p>
                            </div>
                            <div>
                                <p className='ring-1 ring-gray-400 rounded-full px-4 py-1'>6</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-x-2'>
                                <input id="default-checkbox" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <p className='text-gray-500'>Plastic</p>
                            </div>
                            <div>
                                <p className='ring-1 ring-gray-400 rounded-full px-4 py-1'>4</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-x-2'>
                                <input id="default-checkbox" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <p className='text-gray-500'>Rattan</p>
                            </div>
                            <div>
                                <p className='ring-1 ring-gray-400 rounded-full px-4 py-1'>1</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-x-2'>
                                <input id="default-checkbox" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <p className='text-gray-500'>Wood</p>
                            </div>
                            <div>
                                <p className='ring-1 ring-gray-400 rounded-full px-4 py-1'>10</p>
                            </div>
                        </div>
                        <div>
                            <p className='font-bold'>Product status</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <input id="default-checkbox" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label className="text-gray-500 dark:text-gray-300">On sale</label>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <input id="default-checkbox" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label className="text-gray-500 dark:text-gray-300">On sale</label>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <input id="default-checkbox" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label className="text-gray-500 dark:text-gray-300">On sale</label>
                            </div>
                        </div>
                    </div>
                    <div className='relative '>
                        <div className='absolute flex-col flex gap-3 text-white bottom-28 left-6'>
                            <p className="font-bold">Upholstered chair</p>
                            <p className='text-sm text-gray-200'>Discount 10 %</p>
                        </div>
                        <div className='absolute flex-col flex gap-3 text-white bottom-16 left-6'>
                            <p className='items-center bg-white px-2 py-2 rounded-full text-black text-xs'>Shop now</p>
                        </div>
                        <Image src={decor2} alt="decor" />
                    </div>
                </div>
            </div>

            <div className='flex-col flex   gap-5'>
                <div className='flex items-center max-md:hidden justify-between max-md:flex-col'>
                    <p className='text-gray-400'>Showing 1-12 of 16 results</p>
                    <div className='flex items-center  gap-x-8 max-md:flex-col'>
                        <div className='flex gap-x-4'>
                            <div>
                                <p className='font-semibold '>Show:</p>
                            </div>
                            <div className='flex'>
                                <p className='text-gray-400'>9 /</p>
                                <p>12</p>
                                <p className='text-gray-400'>/ 18 / 24</p>
                            </div>
                        </div>
                        <div className='flex gap-x-2 items-center '>
                            <button><Image src={diag3} alt="diag" /></button>
                            <button><Image src={diag2} alt="diag" /></button>
                            <button><Image src={diag1} alt="diag" /></button>
                            <form className="max-w-sm mx-auto">
                                <select className="bg-gray-200 border border-gray-300 text-gray-400  rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option >Sort by average rating</option>
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex items-center px-3 justify-between md:hidden'>
                    <div onClick={handleNav} className="flex items-center gap-2 cursor-pointer">
                        <AiOutlineMenu size={25} />
                        <p>Showsidebar</p>
                    </div>
                    <Image src={sortby} alt="sortby" />
                </div>
                <div className=' grid grid-cols-3 max-md:gap-2  gap-5 max-md:grid max-md:grid-cols-2 max-md:px-3 '>
                    <div className='relative w-fit'>
                        <Image className='shadow-lg rounded-md max-md:h-[350px] ' src={chair6} alt="chair" />
                        <div className='absolute top-2 right-2'>
                            <Image className='w-6 ' src={heart} alt="heart" />
                        </div >
                        <div className='absolute top-1 left-1'>
                            <p className='bg-green-600 rounded-full px-2 text-white'>NEW</p>
                        </div>                        
                        <div className='absolute  flex justify-between w-[90%] max-md:w-4/5 bottom-4 max-md:bottom-12 left-5'>
                            <div>
                                <p className='text-sm font-semibold'>Revolt</p>
                                <p className='text-sm text-gray-400'>Chairs</p>
                                <p className='text-sm text-orange-900'>275.00 TND</p>
                            </div>
                            <div className="flex h-fit gap-2">
                                <p className='text-sm text-bold font-semibold'>5</p>
                                <Image className='w-5' src={star} alt="star" />
                            </div>
                        </div>                                                    
                    </div>
                    <div className='relative w-fit'>
                        <Image className='shadow-lg rounded-md max-md:h-[350px]' src={chair7} alt="sofa" />
                        <div className='absolute top-2 right-2'>
                            <Image className='w-6 ' src={heart} alt="heart" />
                        </div>
                        <div className='absolute top-1 left-1'>
                            <p className='bg-orange-400 rounded-full px-2 text-white'>-15%</p>
                        </div>
                        <div className='absolute top-8 left-1'>
                            <p className='bg-red-600 rounded-full px-2 text-white'>HOT</p>
                        </div>
                        <div className='absolute flex w-[90%] max-md:w-4/5 justify-between   bottom-4 max-md:bottom-8  left-5'>
                            <div>
                                <p className='text-sm font-bold'>Avana</p>
                                <p className='text-sm text-gray-400'>Chairs</p>
                                <div className='max-md:flex-row md:flex gap-1'>
                                    <p className='text-sm line-through opacity-50'>538.00 TND</p>
                                    <p className='text-sm text-orange-900'>399.00 TND</p>
                                </div>
                            </div>
                            <div className="flex h-fit gap-2">
                                <p className='text-sm text-bold font-semibold'>5</p>
                                <Image className='w-5' src={star} alt="star" />
                            </div>
                        </div>
                    </div>
                    <div className='relative w-fit'>
                        <Image className='shadow-lg rounded-md max-md:h-[350px]' src={chair8} alt="chair" />
                        <div className='absolute top-2 right-2'>
                            <Image className='w-6 ' src={heart} alt="heart" />
                        </div>
                        <div className='absolute flex justify-between w-[90%] max-md:w-4/5 bottom-4 left-5'>
                            <div className="">
                                <p className='text-sm  font-bold'>Frames Upholstered</p>
                                <p className='text-sm text-gray-400'>Chairs</p>
                                <p className='text-sm text-orange-900'>399.00 TND</p>
                            </div>
                            <div className="flex h-fit gap-2 ">
                                <p className='text-sm text-bold font-semibold'>5</p>
                                <Image className='w-5 max-md:w-8' src={star} alt="star" />
                            </div>
                        </div>
                    </div>
                    <div className='relative w-fit'>
                        <Image className='shadow-lg rounded-md max-md:h-[350px]' src={chair9} alt="chair" />
                        <div className='absolute top-2 right-2'>
                            <Image className='w-6 ' src={heart} alt="heart" />
                        </div>
                        <div className='absolute w-[90%] max-md:w-4/5 flex justify-between max-md:bottom-10 bottom-4 left-5'>
                            <div>
                                <p className='text-sm font-semibold'>Petit</p>
                                <p className='text-sm text-gray-400'>Chairs</p>
                                <p className='text-sm text-orange-900'>327.00 TND</p>
                            </div>
                            <div className="flex h-fit gap-2">
                                <p className='text-sm text-bold font-semibold'>4.5</p>
                                <Image className='w-5' src={star} alt="star" />
                            </div>
                        </div>
                    </div>
                    <div className='relative w-fit'>
                        <Image className='shadow-lg rounded-md max-md:h-[350px]' src={chair10} alt="sofa" />
                        <div className='absolute top-2 right-2'>
                            <Image className='w-6 ' src={heart} alt="heart" />
                        </div>
                        <div className='absolute  flex justify-between w-[90%] max-md:w-4/5 max-md:bottom-14 bottom-4  left-5'>
                            <div>
                                <p className='text-sm font-bold'>Curve</p>
                                <p className='text-sm text-gray-400'>Chairs</p>
                                <p className='text-sm text-orange-900'>320.00 TND</p>
                            </div>
                            <div className='flex h-fit gap-2'>
                                <p className='text-sm text-bold font-semibold'>4.5</p>
                                <Image className='w-5' src={star} alt="star" />
                            </div>
                        </div>
                    </div>
                    <div className='relative w-fit'>
                        <Image className='shadow-lg rounded-md max-md:h-[350px]' src={chair11} alt="chair" />
                        <div className='absolute top-2 right-2'>
                            <Image className='w-6 ' src={heart} alt="heart" />
                        </div>
                        <div className='absolute  flex justify-between w-[90%] max-md:w-4/5 max-md:bottom-14 bottom-4 left-5'>
                            <div>
                                <p className='text-sm font-bold'>16 side</p>
                                <p className='text-sm text-gray-400'>Chairs</p>
                                <p className='text-sm text-orange-900'>295.00 TND</p>
                            </div>
                            <div className="flex h-fit gap-2">
                                <p className='text-sm text-bold font-semibold'>4.5</p>
                                <Image className='w-5' src={star} alt="star" />
                            </div>
                        </div>
                    </div>
                    <div className='relative w-fit'>
                        <Image className='shadow-lg rounded-md max-md:h-[350px]' src={chair12} alt="chair" />
                        <div className='absolute top-2 right-2'>
                            <Image className='w-6 ' src={heart} alt="heart" />
                        </div>
                        <div className='absolute top-1 left-1'>
                            <p className='bg-orange-400 rounded-full px-2 text-white'>-10%</p>
                        </div>
                        <div className='absolute  flex justify-between w-[90%] max-md:w-4/5 bottom-4 left-5'>
                            <div>
                                <p className='text-sm font-semibold'>12 side</p>
                                <p className='text-sm text-gray-400'>Chairs</p>
                                <div className='md:flex gap-1 max-md:flex-wrap'>
                                    <p className='text-sm line-through opacity-50'>375.00 TND</p>
                                    <p className='text-sm text-orange-900'>399.00 TND</p>
                                </div>
                            </div>
                            <div className='flex h-fit gap-2'>
                                <p className='text-sm text-bold font-semibold'>4.5</p>
                                <Image className='w-5' src={star} alt="star" />
                            </div>
                        </div>
                    </div>
                    <div className='relative w-fit'>
                        <Image className='shadow-lg rounded-md max-md:h-[350px]' src={chair13} alt="sofa" />
                        <div className='absolute top-2 right-2'>
                            <Image className='w-6 ' src={heart} alt="heart" />
                        </div>
                        <div className='absolute flex justify-between w-[90%] max-md:w-4/5 max-md:bottom-14 bottom-4  left-5'>
                            <div>
                                <p className='text-sm font-bold'>Soft Edge</p>
                                <p className='text-sm text-gray-400'>Chairs</p>
                                <p className='text-sm text-orange-900'>440.00 TND</p>
                            </div>
                            <div className='h-fit flex gap-2'>
                                <p className='text-sm text-bold font-semibold'>4.5</p>
                                <Image className='w-5' src={star} alt="star" />
                            </div>
                        </div>
                    </div>
                    <div className='relative w-fit'>
                        <Image className='shadow-lg rounded-md max-md:h-[350px]' src={chair14} alt="chair" />
                        <div className='absolute top-2 right-2'>
                            <Image className='w-6 ' src={heart} alt="heart" />
                        </div>
                        <div className='absolute top-1 left-1'>
                            <p className='bg-orange-400 rounded-full px-2 text-white'>-10%</p>
                        </div>
                        <div className='absolute  flex justify-between w-[90%] max-md:w-4/5 max-md:bottom-10 bottom-4 left-5'>
                            <div>
                                <p className='text-sm font-bold'>Result</p>
                                <p className='text-sm text-gray-400'>Chairs</p>
                                <div className='md:flex max-md:flex-row gap-1'>
                                    <p className='text-sm line-through opacity-50'>310.00 TND</p>
                                    <p className='text-sm text-orange-900'>279.00 TND</p>
                                </div>
                            </div>
                            <div className="flex h-fit gap-2">
                                <p className='text-sm text-bold font-semibold'>4.5</p>
                                <Image className='w-5' src={star} alt="star" />
                            </div>
                        </div>
                    </div>
                    <div className='relative w-fit'>
                        <Image className='shadow-lg rounded-md max-md:h-[350px]' src={chair15} alt="chair" />
                        <div className='absolute top-2 right-2'>
                            <Image className='w-6 ' src={heart} alt="heart" />
                        </div>
                        <div className='absolute flex justify-between w-[90%] max-md:w-4/5 max-md:bottom-8 bottom-4 left-5'>
                            <div>
                                <p className='text-sm font-semibold'>Frames Upholstered</p>
                                <p className='text-sm text-gray-400'>Chairs</p>
                                <p className='text-sm text-orange-900'>399.00 TND</p>
                            </div>
                            <div className='flex h-fit gap-2'>
                                <p className='text-sm text-bold font-semibold'>5</p>
                                <Image className='w-5 max-md:w-8' src={star} alt="star" />
                            </div>
                        </div>
                    </div>
                    <div className='relative w-fit'>
                        <Image className='shadow-lg rounded-md max-md:h-[350px]' src={chair16} alt="sofa" />
                        <div className='absolute top-2 right-2'>
                            <Image className='w-6 ' src={heart} alt="heart" />
                        </div>
                        <div className='absolute  flex justify-between w-[90%] max-md:w-4/5 bottom-4 max-md:bottom-14 left-5'>
                            <div>
                                <p className='text-sm font-bold'>Hal Wood</p>
                                <p className='text-sm text-gray-400'>Chairs</p>
                                <p className='text-sm text-orange-900'>625.00 TND</p>
                            </div>                            
                            <div className='flex h-fit gap-2'>
                                <p className='text-sm text-bold font-semibold'>4.5</p>
                                <Image className='w-5' src={star} alt="star" />
                            </div>
                        </div>                        
                    </div>
                    <div className='relative w-fit'>
                        <Image className='shadow-lg rounded-md max-md:h-[350px]' src={chair17} alt="chair" />
                        <div className='absolute top-2 right-2'>
                            <Image className='w-6 ' src={heart} alt="heart" />
                        </div>
                        <div className='absolute flex justify-between w-[90%] max-md:w-4/5 max-md:bottom-8  bottom-4 left-5'>
                            <div className='max-md:w-18 max-md:flex-col max-md:flex '>
                                <p className='text-sm font-bold'>Fauteuil Direction</p>
                                <p className='text-sm text-gray-400'>Chairs</p>
                                <p className='text-sm text-orange-900'>372.00 TND</p>
                            </div>
                            <div className='flex gap-2 h-fit'>
                                <p className='text-sm text-bold font-semibold'>4.5</p>
                                <Image className='w-5 max-md:w-8' src={star} alt="star" />
                            </div>
                        </div>                        
                    </div>
                </div>
                <div className='flex justify-center items-center gap-x-4 '>
                    <p className='px-5  py-3 text-3xl rounded-lg bg-orange-400'>1</p>
                    <p className='px-5  py-3 text-3xl rounded-lg '>2</p>
                    <Image src={right} alt="arrow" />
                </div>
            </div>
        </div>
    );
}

export default Filter;
