"use client"
import { useState } from 'react';
import Link from 'next/link';

const NavAdmin= () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 w-[90%]  relative left-[99px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/admin/dashboard">
              <p className="text-white font-bold text-xl">dashboard</p>
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  className={`${isOpen ? 'hidden' : 'inline-flex'}`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
                <path
                  className={`${isOpen ? 'inline-flex' : 'hidden'}`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex md:items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/admin/brandlist">
                <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Brands</p>
              </Link>
              <Link href="/admin/categorylist">
                <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Categorys</p>
              </Link>
              <Link href="/admin/productlist">
                <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Products</p>
              </Link>
              <Link href="/admin/reviewlist">
                <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Reviews</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/admin/brandlist">
            <p className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Brands</p>
          </Link>
          <Link href="/admin/categorylist">
            <p className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Categorys</p>
          </Link>
          <Link href="/admin/productlist">
            <p className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Products</p>
          </Link>
          <Link href="/admin/reviewlist">
            <p className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Products</p>
          </Link>
     
        </div>
      </div>
    </nav>
  );
};

export default NavAdmin;
