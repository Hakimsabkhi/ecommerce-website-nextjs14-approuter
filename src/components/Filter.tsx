"use client";
import React, { useState,ChangeEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Hay1, poliform1, vitra1, diag1, diag2, diag3, right, heart,left, star, decor2,  } from "../../public/image";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { sortby } from "../../public/image";
import {products} from "../../public/data";
import { CiShoppingCart } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { FaRegHeart } from "react-icons/fa6";
import Slider from "react-slider";
import '../styles/globals.css';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
interface Product {
    id: number;
    src:  string;
    name: string;
    type: string;
    
}








const Filter: React.FC = () => {
    const minPrice = 270;
    const maxPrice = 630;
    /* const [maxPrice, setMaxPrice] = useState(630); */
    const [values, setValues] = useState<[number, number]>([minPrice, maxPrice]);    
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');
    const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
    const handlePriceChange = (newValues: [number, number]) => {
        setValues(newValues);
    };    

    /* const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValues(Number(e.target.value));
    }; */

    const handleBrandChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectedBrand(e.target.value);
    };

    const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(e.target.value);
    };
    const handleBrandClick = (brand: string) => {
        setSelectedBrand(brand);
    };

    const handleColorClick = (color: string) => {
        setSelectedColor(color);
    };
    const handleStatusClick = (status: string) => {
        setSelectedStatus(prevStatus => (prevStatus === status ? '' : status));
    };

    const handleMaterialClick = (material: string) => {
        setSelectedMaterials(prevMaterials =>
            prevMaterials.includes(material)
                ? prevMaterials.filter(m => m !== material)
                : [...prevMaterials, material]
        );
    };

    const filteredItems = products.filter(item => {
        const itemPrice = parseFloat(item.price.replace(' TND', ''));
        const matchesPrice = itemPrice >= values[0] && itemPrice <= values[1];
        const matchesBrand = selectedBrand ? item.brand?.toLowerCase() === selectedBrand.toLowerCase() : true;
        const matchesColor = selectedColor ? item.color.toLowerCase() === selectedColor.toLowerCase() : true;
        const matchesMaterial = selectedMaterials.length > 0 ? selectedMaterials.includes(item.material) : true;
        const matchesStatus = selectedStatus ? item.status.toLowerCase() === selectedStatus.toLowerCase() : true;
        return matchesPrice && matchesBrand && matchesColor && matchesMaterial && matchesStatus;
    });

    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 9; // Adjust the number of items per page as needed

    // Calculate the total number of pages
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    // Get the items to display on the current page
    const currentItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 800 , behavior: 'smooth' });
    };
    const [menuOpen, setMenuOpen] = useState(false);
    const handleNav = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div className='flex py-8 desktop  max-md:w-[95%]  justify-center gap-8 max-md:items-center max-md:flex-col '>
            <div className='flex-col flex gap-4 max-md:flex-col max-md:justify-center max-lg:hidden max-md:items-center'>
                {/* <div className=' flex-col gap-4 flex bg-white container w-full rounded-lg px-10 py-8 '>
                    <p className='font-bold'>Filter By Price</p>
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <p className='text-xs  text-gray-400'>Price:</p>
                            <p className='text-xs'>270 TND-630 TND</p>
                        </div>
                        <p className='bg-orange-400 cursor-pointer  rounded-full text-white text-xs px-4 py-1'>filter</p>
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
                            <p className='text-gray-500 cursor-pointer'>Hay</p>
                        </div>
                        <div>
                            <p className='ring-1 ring-gray-400 rounded-full px-4 py-1 cursor-pointer'>6</p>
                        </div>
                    </div>
                    <div className='flex w-full justify-between items-center'>
                        <div className='flex items-center gap-4'>
                            <Image src={poliform1} alt="hay" />
                            <p className='text-gray-500 cursor-pointer'>poliform</p>
                        </div>
                        <div>
                            <p className='ring-1 ring-gray-400 rounded-full px-4 py-1 cursor-pointer '>6</p>
                        </div>
                    </div>
                    <div className='flex w-full justify-between items-center'>
                        <div className='flex items-center gap-4'>
                            <Image src={vitra1} alt="hay" />
                            <p className='text-gray-500 cursor-pointer'>vitra</p>
                        </div>
                        <div>
                            <p className='ring-1 ring-gray-400 rounded-full px-4 py-1 cursor-pointer '>4</p>
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
                            <p className='px-2 ring-2 ring-offset-2 cursor-pointer ring-gray-300 py-2 rounded-full bg-gray-400'></p>
                            <p className='text-gray-500 cursor-pointer'>Amercian Silver</p>
                        </div>
                        <div>
                            <p className='ring-1 ring-gray-400 rounded-full px-4 py-1 cursor-pointer '>3</p>
                        </div>
                    </div>
                    <div className='flex  justify-between items-center'>
                        <div className='flex items-center gap-3'>
                            <p className='px-2 ring-2 ring-offset-2 ring-gray-300 py-2 cursor-pointer rounded-full bg-orange-200'></p>
                            <p className='text-gray-500 cursor-pointer'>Bone</p>
                        </div>
                        <div>
                            <p className='ring-1 ring-gray-400 rounded-full px-4 cursor-pointer py-1 '>4</p>
                        </div>
                    </div>
                    <div className='flex  justify-between items-center'>
                        <div className='flex items-center gap-3'>
                            <p className='px-2 ring-2 ring-offset-2 ring-gray-300 py-2 cursor-pointer rounded-full bg-gray-600'></p>
                            <p className='text-gray-500 cursor-pointer'>Dark Gray</p>
                        </div>
                        <div>
                            <p className='ring-1 ring-gray-400 rounded-full px-4 py-1 cursor-pointer '>2</p>
                        </div>
                    </div>
                    <div className='flex  justify-between items-center'>
                        <div className='flex items-center gap-3'>
                            <p className='px-2 ring-2 ring-offset-2 ring-gray-300 py-2 rounded-full cursor-pointer bg-gray-500'></p>
                            <p className='text-gray-500 cursor-pointer'>Gray</p>
                        </div>
                        <div>
                            <p className='ring-1 ring-gray-400 rounded-full px-4 py-1 cursor-pointer '>2</p>
                        </div>
                    </div>
                    <div className='flex  justify-between items-center'>
                        <div className='flex items-center gap-3'>
                            <p className='px-2 ring-2 ring-offset-2 ring-gray-300 py-2 cursor-pointer rounded-full bg-green-900'></p>
                            <p className='text-gray-500 cursor-pointer'>Green</p>
                        </div>
                        <div>
                            <p className='ring-1 ring-gray-400 rounded-full px-4 py-1 cursor-pointer'>1</p>
                        </div>
                    </div>
                    <div className='flex  justify-between items-center'>
                        <div className='flex items-center gap-3'>
                            <p className='px-2 ring-2 ring-offset-2 ring-gray-300 cursor-pointer py-2 rounded-full bg-green-950'></p>
                            <p className='text-gray-500 cursor-pointer'>Jet</p>
                        </div>
                        <div>
                            <p className='ring-1 ring-gray-400 rounded-full px-4 py-1 cursor-pointer '>4</p>
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
                </div> */}
                {/* <div >${values[0]} - ${values[1]} </div>
                    <small>
                        current range: ${values[1] - values[0]}
                    </small> */}
                    {/* <label htmlFor="price-slider">Max Price: {maxPrice} TND</label> */}            
                    {/* <input
                        type="range"
                        id="price-slider"
                        min="270"
                        max="630"
                        step="10"
                        value={maxPrice}
                        onChange={handlePriceChange}
                        className="mt-2 ]"
                    /> */}
                <div className='flex-col gap-4 flex bg-white container w-full rounded-lg px-10 py-8'>
                    <p className='font-bold'>Filter By Price</p>                    
                    <Slider
                        className={"slider"}
                        onChange={handlePriceChange}
                        value={values}
                        min={minPrice}
                        max={maxPrice} 
                    />                
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <p className='text-xs text-gray-400'>Price:</p>
                            <p className='text-xs'>{values[0]} TND - {values[1]} TND</p>
                        </div>
                        <p className='bg-orange-400 cursor-pointer rounded-full text-white text-xs px-4 py-1'>filter</p>
                    </div>
                    <div>
                        <p className='font-bold'>Filter By Brand</p>
                    </div>                
                    <div className='w-full'>
                        <input
                            className="px-2 py-1 rounded-full border border-gray-300"
                            type="text"
                            placeholder='Find a Brand'
                            value={selectedBrand}
                            onChange={handleBrandChange}
                        />
                    </div> 
                    <div className='flex flex-col gap-2'>
                        {['Hay', 'vitra', 'Poliform'].map(brand => (
                            <div key={brand} className='flex w-full justify-between items-center' onClick={() => handleBrandClick(brand)}>
                                <p className='text-gray-500 cursor-pointer'>{brand}</p>
                                <div>
                                    <p className='ring-1 ring-gray-400 rounded-full px-4 py-1 cursor-pointer'>{products.filter(item => item.brand?.toLowerCase() === brand.toLowerCase()).length}</p>
                                </div>
                            </div>
                        ))}
                    </div>                                     
                    <div>
                        <p className='font-bold'>Color</p>
                    </div>
                    <div className='w-full'>
                        <input
                            className="px-2 py-1 rounded-full border border-gray-300"
                            type="text"
                            placeholder='Find a Color'
                            value={selectedColor}
                            onChange={handleColorChange}
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        {['Bone', 'Dark Gray', 'Gray', 'Jet','White'].map(color => (
                            <div key={color} className='flex w-full justify-between items-center' onClick={() => handleColorClick(color)}>
                                <p className='text-gray-500 cursor-pointer'>{color}</p>
                                <div>
                                    <p className='ring-1 ring-gray-400 rounded-full px-4 py-1 cursor-pointer'>{products.filter(item => item.color.toLowerCase() === color.toLowerCase()).length}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <p className='font-bold'>Materials</p>
                    </div>
                    {['Fabric','Leather','Metal','Plastic','rattan','Wood'].map(material => (
                        <div key={material} className='flex  justify-between items-center'>
                            <div className='flex items-center gap-x-2'>
                                <input 
                                    id="default-checkbox" 
                                    type="checkbox" value="" 
                                    className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded "
                                    checked={selectedMaterials.includes(material)} 
                                    onChange={() => handleMaterialClick(material)} 
                                />
                                <p className='text-gray-500'>{material}</p>
                            </div>
                            <div>
                                <p className='ring-1 ring-gray-400 rounded-full px-4 py-1 '>{products.filter(item => item.material.toLowerCase() === material.toLowerCase()).length}</p>
                            </div>
                        </div>
                    ))}
                    <div>
                        <p className='font-bold'>Product status</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        {['On sale','In stock','On backorder'].map(status => (
                            <div className="flex items-center gap-2 ">
                                <input 
                                    id="default-checkbox" 
                                    type="checkbox" value="" 
                                    className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                    checked={selectedStatus === status} 
                                    onChange={() => handleStatusClick(status)}
                                />
                                <label className="   text-gray-500 dark:text-gray-300">{status}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='relative'>
                    <div className='absolute flex-col  flex gap-3  text-white bottom-28 left-6'>
                        <p className="font-bold">Upholstered chair</p>
                        <p className='text-sm text-gray-200'>Discount 10 %</p>
                    </div>
                    <div className='absolute flex-col  flex gap-3  text-white bottom-16 left-6'>
                        <p className='items-center  bg-white px-2 py-2 rounded-full text-black text-xs cursor-pointer '>Shop now</p>
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
                    ? "fixed z-50 left-0 top-0 w-[80%] lg:hidden h-screen bg-[#ecf3ec] ease-in duration-300"
                    : "fixed z-50 left-[-100%] top-0 h-screen ease-in duration-300"
            }>
                <div onClick={handleNav} className='fixed flex pr-4 justify-end bg-white h-20 border-b-2 w-[80%] items-center z-40'>
                    <div className="flex items-center">
                        <AiOutlineClose size={20} />
                        <p>Close</p>
                    </div>
                </div>
                <div className='flex overflow-y-auto flex-col w-full gap-4 h-full pb-10 pt-16'>
                    <div className='flex-col gap-4 flex bg-white container w-full rounded-lg px-10 py-8'>
                        <p className='font-bold'>Filter By Price</p>                    
                        <Slider
                            className={"slider"}
                            onChange={handlePriceChange}
                            value={values}
                            min={minPrice}
                            max={maxPrice} 
                        />                
                        <div className='flex justify-between'>
                            <div className='flex items-center'>
                                <p className='text-xs text-gray-400'>Price:</p>
                                <p className='text-xs'>{values[0]} TND - {values[1]} TND</p>
                            </div>
                            <p className='bg-orange-400 cursor-pointer rounded-full text-white text-xs px-4 py-1'>filter</p>
                        </div>
                        <div>
                            <p className='font-bold'>Filter By Brand</p>
                        </div>                
                        <div className='w-full'>
                            <input
                                className="px-2 py-1 rounded-full border border-gray-300"
                                type="text"
                                placeholder='Find a Brand'
                                value={selectedBrand}
                                onChange={handleBrandChange}
                            />
                        </div> 
                        <div className='flex flex-col gap-2'>
                            {['Hay', 'vitra', 'Poliform'].map(brand => (
                                <div key={brand} className='flex w-full justify-between items-center' onClick={() => handleBrandClick(brand)}>
                                    <p className='text-gray-500 cursor-pointer'>{brand}</p>
                                    <div>
                                        <p className='ring-1 ring-gray-400 rounded-full px-4 py-1 cursor-pointer'>{products.filter(item => item.brand?.toLowerCase() === brand.toLowerCase()).length}</p>
                                    </div>
                                </div>
                            ))}
                        </div>                                     
                        <div>
                            <p className='font-bold'>Color</p>
                        </div>
                        <div className='w-full'>
                            <input
                                className="px-2 py-1 rounded-full border border-gray-300"
                                type="text"
                                placeholder='Find a Color'
                                value={selectedColor}
                                onChange={handleColorChange}
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            {['Bone', 'Dark Gray', 'Gray', 'Jet','White'].map(color => (
                                <div key={color} className='flex w-full justify-between items-center' onClick={() => handleColorClick(color)}>
                                    <p className='text-gray-500 cursor-pointer'>{color}</p>
                                    <div>
                                        <p className='ring-1 ring-gray-400 rounded-full px-4 py-1 cursor-pointer'>{products.filter(item => item.color.toLowerCase() === color.toLowerCase()).length}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div>
                            <p className='font-bold'>Materials</p>
                        </div>
                        {['Fabric','Leather','Metal','Plastic','rattan','Wood'].map(material => (
                            <div key={material} className='flex  justify-between items-center'>
                                <div className='flex items-center gap-x-2'>
                                    <input 
                                        id="default-checkbox" 
                                        type="checkbox" value="" 
                                        className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded "
                                        checked={selectedMaterials.includes(material)} 
                                        onChange={() => handleMaterialClick(material)} 
                                    />
                                    <p className='text-gray-500'>{material}</p>
                                </div>
                                <div>
                                    <p className='ring-1 ring-gray-400 rounded-full px-4 py-1 '>{products.filter(item => item.material.toLowerCase() === material.toLowerCase()).length}</p>
                                </div>
                            </div>
                        ))}
                        <div>
                            <p className='font-bold'>Product status</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            {['On sale','In stock','On backorder'].map(status => (
                                <div className="flex items-center gap-2 ">
                                    <input 
                                        id="default-checkbox" 
                                        type="checkbox" value="" 
                                        className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                        checked={selectedStatus === status} 
                                        onChange={() => handleStatusClick(status)}
                                    />
                                    <label className="   text-gray-500 dark:text-gray-300">{status}</label>
                                </div>
                            ))}
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
            <div className='flex-col flex w-full  gap-5'>
                <div className='flex items-center max-lg:hidden justify-between max-md:flex-col'>
                    <p className='text-gray-400'>Showing 1-{itemsPerPage} of 16 results</p>
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
                <div className='flex items-center px-3 justify-between lg:hidden'>
                    <div onClick={handleNav} className="flex items-center gap-2 cursor-pointer">
                        <AiOutlineMenu size={25} />
                        <p>Showsidebar</p>
                    </div>
                    <Image src={sortby} alt="sortby" />
                </div>
                <div className=' grid   group  grid-cols-3 max-md:grid-cols-2 max-xl:grid-cols-2 max-md:gap-3 gap-8    '>                    
                    {currentItems.map((item) => (
                    <Link href={`/chairs/${item.id}`}><div
                        key={item.id}
                        className="bg-white rounded-lg duration-500  lg:group-hover:scale-[0.85] lg:hover:!scale-100 h-[481px]   max-md:h-[320px]  relative">                        
                        <Image
                            className="absolute inset-0 mx-auto top-5 "
                            src={item.src}
                            alt={item.name}
                        />
                        <div className="flex-col flex bottom-0 gap-2 absolute w-full px-2">
                            <div className="h-24 max-md:h-20">
                                <p className="text-gray-700 cursor-pointer text-3xl max-md:text-xl font-bold">
                                    {item.name}
                                </p>
                                <div className="flex-col gap-1">
                                    <p className="text-orange-400 text-2xl max-md:text-lg font-bold">
                                        {item.price}
                                    </p>
                                    {item.oldPrice && (
                                        <div className="flex gap-1">
                                            <p className="line-through opacity-50">{item.oldPrice}</p>
                                            <p className='text-white rounded-lg bg-orange-400 px-2'>20%</p>
                                        </div>
                                    )}                                
                                </div>
                            </div>                            
                            <div className="flex gap-2 items-center">
                                <Image className="size-5 max-md:size-4" src={star} alt="star" />
                                <Image className="size-5 max-md:size-4" src={star} alt="star" />
                                <Image className="size-5 max-md:size-4" src={star} alt="star" />
                                <Image className="size-5 max-md:size-4" src={star} alt="star" />
                                <Image className="size-5 max-md:size-4" src={star} alt="star" />
                                <p className="flex gap-2 text-xl max-md:text-sm font-bold items-center">{item.rating} </p>
                            </div>                                                        
                            <div className="flex mb-1 text-lg max-md:text-sm justify-between">
                                <button className="bg-orange-400 rounded-lg max-md:rounded-[3px] py-1 w-[50%] items-center flex relative justify-center overflow-hidden transition duration-300 ease-out group/box text-white  ">
                                    <p className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform lg:group-hover/box:translate-x-[10%] ease  ">Add to cart</p>
                                    <p className="  text-white absolute flex items-center justify-center w-full h-full duration-300 -translate-x-[100%] lg:group-hover/box:translate-x-[-30%] ease  ">
                                        <FaCartShopping   className="w-6 h-6" aria-hidden="true" fill="currentColor"/>                                                                                                                    
                                    </p>
                                </button>
                                <button className="bg-white rounded-lg max-md:rounded-[3px] py-5 w-[30%] items-center flex relative justify-center overflow-hidden transition duration-300 ease-out group/box text-orange-400 border border-orange-400  ">
                                    <p className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform lg:group-hover/box:translate-y-[-100%] ease   ">View</p>
                                    <p className="text-orange-400 absolute  w-full h-full flex items-center justify-center duration-300 -translate-y-[-100%] lg:group-hover/box:translate-y-0 ease  ">
                                        <FaEye   className=" w-5 h-5   " aria-hidden="true" fill="currentColor"/>                                                                                                                    
                                    </p>
                                </button>
                                <button className="bg-white rounded-lg max-md:rounded-[3px] py-5 w-[13%] items-center flex relative justify-center  text-orange-400 border border-orange-400  ">
                                    <p className="absolute flex items-center justify-center w-full h-full    ">
                                        <FaRegHeart   className="max-md:w-3 max-md:h-3 w-5 h-5   " aria-hidden="true" fill="currentColor"/>
                                    </p>                                        
                                </button>
                            </div>
                        </div>
                    </div>
                    </Link>
                ))}                    
                </div>
                <div className='flex justify-center items-center gap-x-4 '>                     
                    <div 
                        className="flex items-center gap-1 cursor-pointer  "
                        onClick={() => handlePageChange(currentPage - 1)}
                    >                      
                        <FaArrowLeft
                            className='cursor-pointer'                            
                                                            
                        />
                        <p className="text-sm font-semibold">
                            PREVIOUS
                        </p>
                    </div>                    
                    {Array.from({ length: totalPages }, (_, i) => (
                        <p
                            key={i + 1}
                            onClick={() => handlePageChange(i + 1)}
                            className={`cursor-pointer text-xl rounded-full py-3 px-5 ${currentPage === i + 1 ? 'bg-black text-white' : ''}`}
                        >
                            {i + 1}
                        </p>
                    ))}                                            
                    <div
                        className="flex items-center gap-1 cursor-pointer"
                        onClick={() => handlePageChange(currentPage + 1)}
                    >
                        <p className="text-sm font-semibold">
                            NEXT    
                        </p>                        
                        <FaArrowRight
                            className='cursor-pointer'                            
                             
                        />                            
                    </div>                                        
                </div>
            </div>
        </div>
    );
}

export default Filter;
