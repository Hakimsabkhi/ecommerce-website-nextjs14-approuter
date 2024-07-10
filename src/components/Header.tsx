"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Vector, refresh, cart, logo, person } from "../../public/image";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { chair, table, sofa, armchair, bed, storage, textile, lighting, toy, decor } from "../../public/image";

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
    <div className='w-full max-md:fixed max-md:z-50 max-md:bg-white max-md:py-1 py-2 bg-gray-200 justify-center flex '>
      <div className='flex w-11/12 justify-between items-center max-md:bg-white bg-gray-200'>
        <Link href="/">
          <Image className="w-52 h-14" src={logo} alt="Logo" />
        </Link>
        <input
          className="w-full md:w-1/2 h-12 px-4 py-2 rounded-full max-md:hidden border border-gray-300"
          type="text"
          placeholder='Search for products'
        />
        <div className='max-md:hidden'>
          <div className='flex max-md:flex gap-4 md:gap-20 items-center'>
            <div className='flex gap-4 items-center max-md:hidden'>
              <button className="w-10 h-10 bg-gray-300 flex justify-center items-center rounded-full">
                <Image className='w-5.5 h-5.5' src={refresh} alt='refresh' />
              </button>
              <button className="w-10 h-10 bg-gray-300 flex justify-center items-center rounded-full">
                <Image className='w-5.5 h-5.5' src={Vector} alt='Vector' />
              </button>
            </div>
            <div className='flex gap-4 items-center max-md:hidden'>
              <button className="flex items-center space-x-2 text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-4 py-2">
                <Image src={person} alt="person" />
                <span>Login / Register</span>
              </button>
              <button className="flex items-center space-x-2 text-white bg-black hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-3 py-3">
                <Image src={cart} alt="cart" />
                <span>$0.00</span>
                <span className="relative top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-white rounded-full transform translate-x-1/2 -translate-y-1/2">0</span>
              </button>
            </div>
          </div>
        </div>
        <div onClick={handleNav} className='md:hidden cursor-pointer'>
          <AiOutlineMenu size={25} />
        </div>
      </div>
      {menuOpen && (
        <div onClick={handleNav} className='fixed inset-0 bg-black opacity-50 z-40'>
          <AiOutlineMenu size={25} />
        </div>
      )}
      <div className={
        menuOpen
          ? "fixed z-50 left-0 top-0 w-[80%] md:hidden  h-screen bg-[#ecf0f3] ease-in duration-300"
          : "fixed z-50 left-[-100%] top-0 h-screen  ease-in duration-300"
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
              <Link href="/">
                <li
                  onClick={() => setMenuOpen(false)}
                  className='cursor-pointer  h-10 items-center flex pl-5 hover:bg-gray-200 border'
                >
                  Home
                </li>
              </Link>
              <Link href="/blog">
                <li
                  onClick={() => setMenuOpen(false)}
                  className='cursor-pointer h-10 items-center flex pl-5 hover:bg-gray-200 border'
                >
                  Blog
                </li>
              </Link>
              <Link href="/about">
                <li
                  onClick={() => setMenuOpen(false)}
                  className='cursor-pointer h-10 items-center flex pl-5 hover:bg-gray-200 border'
                >
                  About Us
                </li>
              </Link>
              <Link href="/contactus">
                <li
                  onClick={() => setMenuOpen(false)}
                  className='cursor-pointer h-10 items-center flex pl-5 hover:bg-gray-200 border'
                >
                  Contact Us
                </li>
              </Link>
              <Link href="/showrooms">
                <li
                  onClick={() => setMenuOpen(false)}
                  className='cursor-pointer h-10 items-center flex pl-5 hover:bg-gray-200 border'
                >
                  Showrooms
                </li>
              </Link>
              <Link href="/giftcards">
                <li
                  onClick={() => setMenuOpen(false)}
                  className='cursor-pointer h-10 items-center flex pl-5 hover:bg-gray-200 border'
                >
                  Gift Cards
                </li>
              </Link>
            </ul>
          )}
          {activeTab === 'categories' && (
            <ul className="text-sm">
              <Link href="/chairs" className='cursor-pointer h-10 items-center gap-2 flex pl-5 hover:bg-gray-200 border'>
                <div className=''>
                  <Image src={chair} alt="chair" />
                </div>
                <li
                  onClick={() => setMenuOpen(false)}
                  className=''
                >
                  Chairs
                </li>
              </Link>
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


