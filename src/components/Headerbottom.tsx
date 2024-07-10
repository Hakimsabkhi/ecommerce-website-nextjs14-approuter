"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { chair, table, sofa, armchair, bed, storage, textile, lighting, toy, decor } from "../../public/image";

const Headerbottom: React.FC = () => {
    return (
        <header>
            <nav className='w-full py-4 flex justify-center bg-gray-200 max-md:hidden'>
                <div className="flex flex-wrap justify-center md:justify-between w-11/12 font-bold bg-gray-200 items-center">
                    <div className="flex flex-wrap justify-center items-center text-xl gap-x-6 gap-y-4 ">
                        <Link href="/chairs" className="flex items-center gap-x-1 hover:text-orange-400">
                            <Image className='w-5 h-5' src={chair} alt="chair" />
                            <p>Chairs</p>
                        </Link>
                        <Link href="#" className="flex items-center gap-x-1 hover:text-orange-400">
                            <Image className='w-5 h-5' src={table} alt="table" />
                            <span>Tables</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-x-1 hover:text-orange-400">
                            <Image className='w-5 h-5' src={sofa} alt="sofa" />
                            <span>Sofas</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-x-1 hover:text-orange-400">
                            <Image className='w-5 h-5' src={armchair} alt="armchair" />
                            <span>Armchairs</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-x-1 hover:text-orange-400">
                            <Image className='w-5 h-5' src={bed} alt="bed" />
                            <span>Beds</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-x-1 hover:text-orange-400">
                            <Image className='w-5 h-5' src={storage} alt="storage" />
                            <span>Storage</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-x-1 hover:text-orange-400">
                            <Image className='w-5 h-5' src={textile} alt="textile" />
                            <span>Textiles</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-x-1 hover:text-orange-400">
                            <Image className='w-5 h-5' src={lighting} alt="lighting" />
                            <span>Lighting</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-x-1 hover:text-orange-400">
                            <Image className='w-5 h-5' src={toy} alt="toy" />
                            <span>Toys</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-x-1 hover:text-orange-400">
                            <Image className='w-5 h-5' src={decor} alt="decor" />
                            <span>Decor</span>
                        </Link>
                    </div>
                    <div className='flex justify-center md:justify-end items-center w-full md:w-auto'>
                        <h1 className='bg-blue-100 px-4 py-2 rounded-full text-xs text-center'>Free shipping for all orders of $1,300</h1>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Headerbottom;
