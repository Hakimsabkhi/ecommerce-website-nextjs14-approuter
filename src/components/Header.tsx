"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Vector, refresh, cart, logo, person } from "../../public/image";
import { AiOutlineMenu } from 'react-icons/ai';
import {  table, sofa, armchair, bed,luxehome, storage, textile, lighting, toy, decor } from "../../public/image";
import { TransitionLink } from './utils/TransitionLink';
import { FiHeart } from "react-icons/fi";
import { SlBag } from "react-icons/sl";
import { FaCartShopping } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";


const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('categories');
  

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className='w-full max-lg:fixed max-lg:z-50 max-lg:bg-white max-lg:py-2 py-6 bg-blue-900 justify-center flex'>
      <div className='flex w-[85%] max-lg:hidden justify-between max-lg:justify-between  items-center  max-lg:bg-white '>
        <TransitionLink href="/" >
          <div className="mb-1">
            <Image className='w-[300px] h-[60px] max-lg:hidden' src={luxehome} alt="luxehome" />
          </div>
        </TransitionLink>
        <div className="relative w-[800px]">
          <input
            className="w-full  h-12 px-4 py-2 rounded-full max-lg:hidden border border-gray-300"
            type="text"
            placeholder='Search for products'
          />
          <button className=" absolute h-full py-2 px-4 right-0 top-1/2 -translate-y-1/2 rounded-r-full text-white bg-orange-400 hover:bg-orange-600 ">                                        
            <CiSearch  className='w-8 h-8 ' />
          </button>
        </div>
        <div className='max-lg:hidden '>
          <div className='flex  gap-14  items-center'>
            <div className='flex items-center gap-4'>                        
              <TransitionLink href="/signin">
                <button className="flex items-center space-x-2 text-white bg-orange-400   font-bold rounded-full px-8  py-2">              
                  <span>Login</span>
                </button>
              </TransitionLink>
              <TransitionLink href="/signin">
                <button className="flex items-center space-x-2 text-orange-400 bg-white   font-bold rounded-full  px-8  py-2">              
                  <span>Register</span>
                </button>
              </TransitionLink>
            </div>
            <div className='flex items-center gap-4 text-white'>                          
              <FiHeart size={25} />
              <div className="relative">
                <SlBag size={25} />
                <span className=" w-4 flex justify-center h-4 items-center text-xs rounded-full absolute -top-1 -right-1 text-white bg-orange-400">
                  <p>0</p>
                </span>
              </div>
              <span className='text-xl'>$0.00</span>
            </div>
          </div>
        </div>                
      </div >
      <div className=' lg:hidden flex w-[85%] justify-between max-lg:justify-between  items-center  max-lg:bg-white '>
          <div onClick={handleNav} className=' cursor-pointer'>
            <AiOutlineMenu size={25} />
          </div>
          <TransitionLink href="/" >
            <div className="mb-1 ">
              <Image src={logo} alt="logo" />
            </div>
          </TransitionLink>
          <FaCartShopping className=""  size={25} />
      </div>
      {menuOpen && (
        <div onClick={handleNav} className='fixed inset-0 bg-black opacity-50 z-40'>
          <AiOutlineMenu size={25} />
        </div>
      )}
      <div className={
        menuOpen
          ? "fixed z-50 left-0 top-0 w-[80%] lg:hidden h-screen bg-[#ecf0f3] ease-in duration-300"
          : "fixed z-50 left-[-100%] top-0 h-screen ease-in duration-300"
      }>
        <input
          className="w-full h-12 px-4 py-2 border border-gray-300"
          type="text"
          placeholder='Search for products'
        />
        <div className='flex'>
          <button
            className={`flex-1 text-center text-sm py-3 ${activeTab === 'categories' ? 'bg-gray-300 border-b-2 border-orange-400' : 'bg-gray-200 opacity-50'}`}
            onClick={() => handleTabClick('categories')}
          >
            Categories
          </button>
          <button
            className={`flex-1 text-center text-sm py-3 ${activeTab === 'menu' ? 'bg-gray-300 border-b-2 border-orange-400' : 'bg-gray-200 opacity-50'}`}
            onClick={() => handleTabClick('menu')}
          >
            Menu
          </button>
        </div>
        <div className='flex-col gap-4'>
          {activeTab === 'menu' && (
            <ul className='text-sm'>
              <TransitionLink href="/">
                <Link href="#">
                  <li
                    onClick={() => setMenuOpen(false)}
                    className='cursor-pointer h-10 items-center flex pl-5 hover:bg-gray-200 border'
                  >
                    Home
                  </li>
                </Link>
              </TransitionLink>
              <TransitionLink href="/blog">
                <Link href="#">
                  <li
                    onClick={() => setMenuOpen(false)}
                    className='cursor-pointer h-10 items-center flex pl-5 hover:bg-gray-200 border'
                  >
                    Blog
                  </li>
                </Link>
              </TransitionLink>
              <TransitionLink href="/about">
                <Link href="#">
                  <li
                    onClick={() => setMenuOpen(false)}
                    className='cursor-pointer h-10 items-center flex pl-5 hover:bg-gray-200 border'
                  >
                    About Us
                  </li>
                </Link>
              </TransitionLink>
              <TransitionLink href="/contactus">
                <Link href="#">
                  <li
                    onClick={() => setMenuOpen(false)}
                    className='cursor-pointer h-10 items-center flex pl-5 hover:bg-gray-200 border'
                  >
                    Contact Us
                  </li>
                </Link>
              </TransitionLink>
              <TransitionLink href="/showrooms">
                <Link href="#">
                  <li
                    onClick={() => setMenuOpen(false)}
                    className='cursor-pointer h-10 items-center flex pl-5 hover:bg-gray-200 border'
                  >
                    Showrooms
                  </li>
                </Link>
              </TransitionLink>
              <TransitionLink href="/giftcards">
                <Link href="#">
                  <li
                    onClick={() => setMenuOpen(false)}
                    className='cursor-pointer h-10 items-center flex pl-5 hover:bg-gray-200 border'
                  >
                    Gift Cards
                  </li>
                </Link>
              </TransitionLink>
            </ul>
          )}
          {activeTab === 'categories' && (
            <ul className="text-sm">
              <TransitionLink href="/chairs">
                <Link href="#" className='cursor-pointer h-10 items-center gap-2 flex pl-5 hover:bg-gray-200 border'>
                  <div className=''>
                    
                  </div>
                  <li
                    onClick={() => setMenuOpen(false)}
                    className=''
                  >
                    Chairs
                  </li>
                </Link>
              </TransitionLink>
              <Link href="/" className='cursor-pointer h-10 items-center gap-2 flex pl-5 hover:bg-gray-200 border'>
                <Image src={table} alt="table" />
                <li
                  onClick={() => setMenuOpen(false)}
                  className=''
                >
                  Tables
                </li>
              </Link>
              <Link href="/" className='cursor-pointer h-10 items-center gap-2 flex pl-5 hover:bg-gray-200 border'>
                <Image src={sofa} alt="sofa" />
                <li
                  onClick={() => setMenuOpen(false)}
                  className=''
                >
                  Sofas
                </li>
              </Link>
              <Link href="/" className='cursor-pointer h-10 items-center gap-2 flex pl-5 hover:bg-gray-200 border'>
                <Image src={armchair} alt="armchair" />
                <li
                  onClick={() => setMenuOpen(false)}
                  className=''
                >
                  Armchairs
                </li>
              </Link>
              <Link href="/" className='cursor-pointer h-10 items-center gap-2 flex pl-5 hover:bg-gray-200 border'>
                <Image src={bed} alt="bed" />
                <li
                  onClick={() => setMenuOpen(false)}
                  className=''
                >
                  Beds
                </li>
              </Link>
              <Link href="/" className='cursor-pointer h-10 items-center gap-2 flex pl-5 hover:bg-gray-200 border'>
                <Image src={storage} alt="storage" />
                <li
                  onClick={() => setMenuOpen(false)}
                  className=''
                >
                  Storage
                </li>
              </Link>
              <Link href="/" className='cursor-pointer h-10 items-center gap-2 flex pl-5 hover:bg-gray-200 border'>
                <Image src={textile} alt="textile" />
                <li
                  onClick={() => setMenuOpen(false)}
                  className=''
                >
                  Textiles
                </li>
              </Link>
              <Link href="/" className='cursor-pointer h-10 items-center gap-2 flex pl-5 hover:bg-gray-200 border'>
                <Image src={lighting} alt="lighting" />
                <li
                  onClick={() => setMenuOpen(false)}
                  className=''
                >
                  Lighting
                </li>
              </Link>
              <Link href="/" className='cursor-pointer h-10 items-center gap-2 flex pl-5 hover:bg-gray-200 border'>
                <Image src={toy} alt="toy" />
                <li
                  onClick={() => setMenuOpen(false)}
                  className=''
                >
                  Toys
                </li>
              </Link>
              <Link href="/" className='cursor-pointer h-10 items-center gap-2 flex pl-5 hover:bg-gray-200 border'>
                <Image src={decor} alt="decor" />
                <li
                  onClick={() => setMenuOpen(false)}
                  className=''
                >
                  Decor
                </li>
              </Link>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;



