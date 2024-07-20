"use client";

import React from 'react';
import Image from 'next/image';
import { flag, phone, expert } from "../../public/image";
import { TransitionLink } from './utils/TransitionLink';
import Link from 'next/link';
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
const Headertop: React.FC = () => {
    return (
        <header>
            <nav className='w-full py-4 justify-center flex bg-orange-400 max-lg:hidden'>
                <div className="flex text-white w-[90%] justify-between items-center  text-xl">                                            
                    <p className='flex gap-2 items-center'><CiLocationOn /> RUSTIKA HOUSE, 5080 Teboulba , Monastir, Tunisie</p>                    
                    <div className="flex     gap-3 items-center ">                                                    
                        <p className='flex gap-2 items-center'><CiPhone size={25} /> +1 206-214-2298</p>                                                                        
                        <p className='flex gap-2 items-center'><CiMail size={25}/> support@rezilla.com</p>                                                
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Headertop;
