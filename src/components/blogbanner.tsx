import React from 'react';
import Image from 'next/image';
import { aboutbanner } from "../../public/image";
const Blogbanner = () => {
    return (
        <div className='max-md:pt-16'>
            <div className='relative   w-full'>
                <div className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/4 text-white'>
                    <h1 className='text-8xl max-md:text-xl'>Blog</h1>
                    <p className='max-md:text-xs'>HOME / BLOG</p>
                </div>
                <Image className="w-full" src={aboutbanner} alt="banner" />
            </div>
        </div>
    );
}

export default Blogbanner;