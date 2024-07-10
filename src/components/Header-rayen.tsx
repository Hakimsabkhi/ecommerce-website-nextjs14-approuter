"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import { Vector, refresh, cart, icon, pic1, logo, flag, phone, expert, person, chair, bed, textile, sofa, toy, armchair, table, storage, lighting, decor } from "../../public/image";

const Header: React.FC = () => {
  const { data: session } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header>
      <nav className='w-full flex py-6 flex-col bg-gray-200'>
        {/* Middle Layer */}
        <div className='flex ps-44 w-full justify-between items-center px-4 py-2'>
          <Link href="/">
            <Image className="w-52 h-14" src={logo} alt="Logo"  />
          </Link>
          <div className="flex-1 mx-4">
            <input className="w-full h-12 px-4 py-2 rounded-full border border-gray-300" type="text" placeholder='Search for products' />
          </div>
          <div className='flex items-center space-x-4'>
            <button className="w-10 h-10 bg-gray-300 flex justify-center items-center rounded-full">
              <Image className='w-5.5 h-5.5 hover:stroke-cyan-500' src={refresh} alt='refresh' />
            </button>
            <button className="w-10 h-10 bg-gray-300 flex justify-center items-center rounded-full">
              <Image className='w-5.5 h-5.5 hover:stroke-cyan-500' src={Vector} alt='Vector' />
            </button>
            <div>
              {session ? (
                <div className="relative inline-block" ref={dropdownRef}>
                  <button onClick={handleToggleDropdown} className='text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5'>
                    <span className="cursor-pointer hover:text-gray-300 transition-colors duration-300">
                      {session.user?.name || session.user?.email}
                    </span>
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg py-2 z-20">
                      <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300">Profile</Link>
                      {session.user?.role === 'Admin' && (
                        <Link href="/admin/dashboard" className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300">Dashboard</Link>
                      )}
                      <button onClick={() => signOut()} className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors duration-300">Log Out</button>
                    </div>
                  )}
                </div>
              ) : (
                <div className='flex items-center space-x-4'>
                  <button onClick={() => signIn()} className="flex items-center space-x-2 text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-4 py-2">
                    <Image src={person} alt="person" />
                    <span>Login / Register</span>
                  </button>
                  <button className="flex items-center space-x-2 text-white bg-black hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-3 py-3">
                    <Image src={cart} alt="cart" />
                    <span>$0.00</span>
                    <span className="relative top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-white rounded-full transform translate-x-1/2 -translate-y-1/2">0</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

