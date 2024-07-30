"use client";

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineMenu } from 'react-icons/ai';
import {  table, sofa, armchair, bed,luxehome, storage, textile, lighting, toy, decor,logo, chair } from "../../public/image";
import { TransitionLink } from './utils/TransitionLink';
import { FiHeart } from "react-icons/fi";
import { SlBag } from "react-icons/sl";
import { FaCartShopping } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import Dropdown from '../components/Dropdown';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('categories');
  const [isAdmin, setIsAdmin] = useState(false);
  //get session
  const { data: session } = useSession();
  const toggleLogin = () => {
    setIsAdmin(!isAdmin);
  };
  console.log("session",session);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  //session get for activation menu
  useEffect(()=>{
    if (session) {
      // Assuming the session object has an isAdmin property
      setIsAdmin(true);
    }
  }, [session]
  )

  return (
    <div className='w-full max-lg:fixed max-lg:z-50 max-lg:bg-white max-lg:py-2 py-6 bg-[#15335E] justify-center flex'>
        <div className='flex w-[90%] max-xl:w-[95%] max-lg:hidden justify-between  gap-14  items-center  max-lg:bg-white '>
          <TransitionLink href="/" >
            <div className="mb-1">
              <Image className='xl:w-[300px] xl:h-[60px] max-xl:w-[800px] max-xl:h-[60px]  max-lg:hidden' src={luxehome} alt="luxehome" />
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
          {!isAdmin &&<div className='flex items-center gap-2'>                        
            <Link href="/signin">
              <button className="flex items-center space-x-2 text-white bg-orange-400   font-bold rounded-md px-8  py-2"
                      onClick={toggleLogin}
              >              
                <span>Login</span>
              </button>
            </Link>
            <Link href="/signup">
              <button className="flex items-center space-x-2 text-orange-400 bg-white   font-bold rounded-md  px-8  py-2">              
                <span>Register</span>
              </button>
            </Link>                        
          </div>}
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
          {isAdmin && 
            <Dropdown  />            
          }                                
      </div>
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
                  <li
                    onClick={() => setMenuOpen(false)}
                    className='cursor-pointer h-10 items-center flex pl-5 hover:bg-gray-200 border'
                  >
                    Home
                  </li>                                 
              </TransitionLink>
              <TransitionLink href="/blog">                
                  <li
                    onClick={() => setMenuOpen(false)}
                    className='cursor-pointer h-10 items-center flex pl-5 hover:bg-gray-200 border'
                  >
                    Blog
                  </li>                
              </TransitionLink>
              <TransitionLink href="/about">                
                  <li
                    onClick={() => setMenuOpen(false)}
                    className='cursor-pointer h-10 items-center flex pl-5 hover:bg-gray-200 border'
                  >
                    About Us
                  </li>                
              </TransitionLink>
              <TransitionLink href="/contactus">                
                  <li
                    onClick={() => setMenuOpen(false)}
                    className='cursor-pointer h-10 items-center flex pl-5 hover:bg-gray-200 border'
                  >
                    Contact Us
                  </li>                
              </TransitionLink>
              <TransitionLink href="/showrooms">                
                  <li
                    onClick={() => setMenuOpen(false)}
                    className='cursor-pointer h-10 items-center flex pl-5 hover:bg-gray-200 border'
                  >
                    Showrooms
                  </li>                
              </TransitionLink>
              <TransitionLink href="/giftcards">                
                  <li
                    onClick={() => setMenuOpen(false)}
                    className='cursor-pointer h-10 items-center flex pl-5 hover:bg-gray-200 border'
                  >
                    Gift Cards
                  </li>                
              </TransitionLink>
            </ul>
          )}
          {activeTab === 'categories' && (
            <ul className="text-sm">              
                <Link href="/products/chairs" className='cursor-pointer h-10 items-center gap-2 flex pl-5 hover:bg-gray-200 border'>
                  <Image src={chair} alt="table" />
                  <li
                    onClick={() => setMenuOpen(false)}
                    className=''
                  >
                    Chairs
                  </li>
                </Link>            
              <Link href="/products/tables" className='cursor-pointer h-10 items-center gap-2 flex pl-5 hover:bg-gray-200 border'>
                <Image src={table} alt="table" />
                <li
                  onClick={() => setMenuOpen(false)}
                  className=''
                >
                  Tables
                </li>
              </Link>
              <Link href="/products/sofas" className='cursor-pointer h-10 items-center gap-2 flex pl-5 hover:bg-gray-200 border'>
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



