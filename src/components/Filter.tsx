"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Hay1, poliform1, vitra1, diag1, chair2, diag2, diag3, right, heart, star, decor2, chair6, chair7, chair8, chair9, chair10, chair11, chair12, chair13, chair14, chair15, chair16, chair17, } from "../../public/image";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { sortby } from "../../public/image";
const items = [
    { src: chair6, name: "Revolt", type: "chairs", price: "275.00 TND", rating: 5 },
    { src: chair7, name: "Avana", type: "Chairs", price: "458.00 TND", oldPrice: "538.00 TND" },
    { src: chair8, name: "Sophie", type: "chairs", price: "520.00 TND" },
    { src: chair9, name: "Curve", type: "chairs", price: "320.00 TND", rating: 4.5 },
    { src: chair10, name: "Curve", type: "Chairs", price: "320.00 TND" },
    { src: chair11, name: "16 side", type: "chairs", price: "295.00 TND" },
    { src: chair12, name: "12 side", type: "chairs", price: "339.00 TND", oldPrice: "375.00 TND" },
    { src: chair13, name: "Soft Edge", type: "chairs", price: "440.00 TND" },
    { src: chair14, name: "Result", type: "chairs", price: "279.00 TND", oldPrice: "310.00 TND" },
    { src: chair15, name: "Frames Upholstered", type: "chairs", price: "399.00 TND", },
    { src: chair16, name: "Hal Wood", type: "chairs", price: "625.00 TND", },
    { src: chair15, name: "Fauteuil Direction", type: "chairs", price: "372.00 TND", }
];

const Filter = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleNav = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div className='flex py-8 w-full justify-center gap-8 max-md:items-center max-md:flex-col '>
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
                    ? "fixed z-50 left-0 top-0 w-[80%] md:hidden h-screen bg-[#ecf3ec] ease-in duration-300"
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
                <div className=' grid justify-center items-center  grid-cols-3 max-md:grid-cols-2 max-xl:grid-cols-2  gap-8  '>
                    {items.map((item, index) => (
                        <div key={index} className='bg-white rounded-lg w-[329px] h-[481px] max-md:w-[168px] max-md:h-[332px] relative '>
                            <Image className='absolute right-1 top-1 w-4' src={heart} alt="heart" />
                            <Image className='absolute right-2 top-5 max-md:w-[150px] max-md:h-[150px]' src={item.src} alt="chair" />
                            <div className='flex-col flex bottom-0 absolute w-full px-2 '>
                                <div className='flex justify-between'>
                                    <p className='text-gray-700 font-bold'>{item.name}</p>
                                    {item.rating && (<p className='flex gap-2 items-center'>5 <Image src={star} alt="star" /> </p>)}
                                </div>
                                <p className='text-gray-400'>{item.type}</p>
                                <div className='flex gap-1'>
                                    {item.oldPrice &&(
                                        <p className='line-through opacity-50'>{item.oldPrice}</p>
                                    )}
                                    <p className='text-orange-800'>{item.price}</p>
                                </div>
                                <div className='flex xl:hidden justify-center'>
                                    <p className='bg-orange-400 rounded-full text-center w-4/5 text-white py-2 mb-1'>add to cart</p>
                                </div>
                            </div>
                        </div>
                    ))}                    
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
