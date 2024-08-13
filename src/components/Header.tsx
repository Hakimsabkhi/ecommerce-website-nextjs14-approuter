"use client";

import { useEffect, useState,useRef } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineMenu } from 'react-icons/ai';
import { table, sofa, armchair, bed, luxehome, storage, textile, lighting, toy, decor, logo, chair } from "@/assets/image";
import { TransitionLink } from './utils/TransitionLink';
import { FiHeart } from "react-icons/fi";
import { SlBag } from "react-icons/sl";
import { FaCartShopping } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import Dropdown from '../components/Dropdown';
import CartModal from './CartModal';
interface Category {
  id: string;
  name: string;
  logoUrl: string;
}

interface HeaderProps {
  categories?: Category[]; // Make categories optional
}

const Header: React.FC <HeaderProps> = ({ categories = [] }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('categories');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isCartOpen,setIsCartOpen] = useState(false);
  const cartmodalRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const handleClick = (index: number) => {
    setSelectedCategory(index);
  };
  //get session
  const { data: session } = useSession();
  const toggleLogin = () => {
    setIsAdmin(!isAdmin);
  };
  

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  const toggleCartModal = () => {
    setIsCartOpen(!isCartOpen);
  };
  //session get for activation menu
  useEffect(() => {
    if (session) {
      // Assuming the session object has an isAdmin property
      setIsAdmin(true);
    }
  }, [session]
  )
  const handleClickOutside = (event: MouseEvent) => {
    if (cartmodalRef.current && !cartmodalRef.current.contains(event.target as Node)) {
      setIsCartOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='w-full max-lg:fixed max-lg:z-10 max-lg:bg-white max-lg:py-2 py-6 bg-[#15335E] justify-center flex'>
      <div className='flex w-[90%] max-xl:w-[95%] max-lg:hidden justify-between  gap-14  items-center  max-lg:bg-white '>
        <TransitionLink href="/" aria-label="home">
          <div className="mb-1">
            <Image
              width={250}
              height={250}
              className=' h-auto  lg:w-[400px] xl:w-[300px] rounded-[5px] max-lg:hidden'
              src={luxehome}
              alt=""
              style={{ objectFit: 'contain' }}
            />
          </div>
        </TransitionLink>
        <div className="relative w-[800px]">
          <input
            className="w-full  h-12 px-4 py-2 rounded-full max-lg:hidden border border-gray-300"
            type="text"
            placeholder='Search for products'
          />
          <button className=" absolute h-full py-2 px-4 right-0 top-1/2 -translate-y-1/2 rounded-r-full text-white bg-orange-400 hover:bg-orange-600 "
                  aria-label="Search"
          >
          
            <CiSearch className='w-8 h-8 ' />
          </button>
        </div>
        {!isAdmin && <div className='flex items-center gap-2 w-[269px]'>
          <Link href="/signin" aria-label="signin page">
            <button aria-label="signin" className="flex items-center space-x-2 text-white bg-primary hover:bg-white hover:text-primary   font-bold rounded-md px-8  py-2"
              onClick={toggleLogin}
            >
              <span>LOGIN</span>
            </button>
          </Link>
          <Link href="/signup" arai-label="signup page">
            <button aria-label="register" className="flex items-center space-x-2 text-primary bg-white hover:text-white hover:bg-primary   font-bold rounded-md  px-8  py-2">
              <span>REGISTER</span>
            </button>
          </Link>
        </div>}
        <div className='flex items-center gap-4 w-[133px] text-white'>
          <FiHeart size={25} />
          <div className='relative' ref={cartmodalRef}>
            <div className="relative cursor-pointer" onClick={toggleCartModal}>
              <SlBag size={25} />
              <span className=" w-4 flex justify-center h-4 items-center text-xs rounded-full absolute -top-1 -right-1 text-white bg-primary">
                <p>0</p>
              </span>
            </div>
            {isCartOpen && <CartModal />}
          </div>  
          <span className='text-xl'>$0.00</span>
        </div>
        {isAdmin &&
          <Dropdown />
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
        <div className="relative" ref={cartmodalRef}>
          <div className="relative cursor-pointer" onClick={toggleCartModal}>
            <SlBag size={25} />
            <span className=" w-4 flex justify-center h-4 items-center text-xs rounded-full absolute -top-1 -right-1 text-white bg-orange-400">
              <p>0</p>
            </span>
          </div>
          {isCartOpen && <CartModal />}
        </div>
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
          {activeTab === 'categories' && categories.map((category, index) => (
            <div key={index} className="text-sm">
              <Link key={category.id}
              href={`/${category.name}`} className='cursor-pointer h-10 items-center gap-2 flex pl-5 hover:bg-gray-200 border'>
                <Image src={category.logoUrl}
                  alt="" width={30} height={30}/>
                <p
                  onClick={() => setMenuOpen(false)}
                  className=''
                >
                  {category.name}
                </p>
              </Link>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;



