"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { chair, table, sofa, armchair, bed, storage, textile, lighting, toy, decor } from "../../public/image";
import { TransitionLink } from './utils/TransitionLink';

const Headerbottom: React.FC = () => {
    return (
        <header>
            <nav className='w-full py-4 flex justify-center bg-white max-lg:hidden'>
                <div className="flex flex-wrap justify-center lg:justify-between w-[85%] font-bold  items-center text-xl">                    
                        <TransitionLink href="/chairs" > 
                            <div  className="flex items-center gap-3  duration-300 hover:text-orange-400">
                                <Image className='w-10 h-10' src={chair} alt="chair" />
                                <span>Chairs</span>
                            </div> 
                        </TransitionLink>
                        <TransitionLink href="/chairs" > 
                            <div  className="flex items-center gap-3 duration-300 hover:text-orange-400">
                                <Image className='w-10 h-10' src={table} alt="table" />
                                <span>Tables</span>
                            </div> 
                        </TransitionLink>
                        <Link href="#" className="flex items-center gap-3 duration-300 hover:text-orange-400">
                            <Image className='w-10 h-10' src={sofa} alt="sofa" />
                            <span>Sofas</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-3 duration-300 hover:text-orange-400">
                            <Image className='w-10 h-10' src={armchair} alt="armchair" />
                            <span>Armchairs</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-3 duration-300 hover:text-orange-400">
                            <Image className='w-10 h-10' src={bed} alt="bed" />
                            <span>Beds</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-3 duration-300 hover:text-orange-400">
                            <Image className='w-10 h-10' src={storage} alt="storage" />
                            <span>Storage</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-3 duration-300 hover:text-orange-400">
                            <Image className='w-10 h-10' src={textile} alt="textile" />
                            <span>Textiles</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-3 duration-300 hover:text-orange-400">
                            <Image className='w-10 h-10' src={lighting} alt="lighting" />
                            <span>Lighting</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-3 duration-300 hover:text-orange-400">
                            <Image className='w-10 h-10' src={toy} alt="toy" />
                            <span>Toys</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-3 duration-300 hover:text-orange-400">
                            <Image className='w-10 h-10' src={decor} alt="decor" />
                            <span>Decor</span>
                        </Link>                                        
                </div>
            </nav>
        </header>
    );
};

export default Headerbottom;
