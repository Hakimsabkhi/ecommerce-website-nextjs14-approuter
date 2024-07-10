"use client";

import React from 'react';
import Image from 'next/image';
import { flag, phone, expert } from "../../public/image";

const Headertop: React.FC = () => {
    return (
        <header>
            <nav className='w-full py-2 justify-center flex bg-gray-300 max-md:hidden'>
                <div className="flex  max-md:flex-col w-11/12 justify-between items-center bg-gray-300 text-xs">
                    <div className="flex  max-md:flex items-center gap-2 md:gap-4 text-xs">
                        <Image src={flag} alt="flag" />
                        <select className="bg-gray-300">
                            <option value="eur">EUR</option>
                            <option value="usd">USD</option>
                        </select>
                        <div className='flex gap-2 flex-wrap'>
                            <a href="/giftcards" className="hover:underline">Gift cards</a>
                            <a href="/showrooms" className="hover:underline">Showrooms</a>
                            <a href="/about" className="hover:underline">About us</a>
                            <a href="/contactus" className="hover:underline">Contact us</a>
                        </div>
                    </div>
                    <div className="flex  max-md:flex gap-2 md:gap-3 items-center mt-2 md:mt-0">
                        <div className='flex items-center'>
                            <Image className="w-3 h-3" src={phone} alt="phone" />
                            <a href="#" className='hover:underline ml-1'> (686) 492-1044</a>
                        </div>
                        <div className='flex items-center'>
                            <Image src={expert} alt="expert" />
                            <a href="#" className="hover:underline ml-1">Contact with an expert</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Headertop;
