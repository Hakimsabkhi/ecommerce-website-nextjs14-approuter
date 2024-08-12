import React from 'react';
import Image from 'next/image';
import { aboutbanner } from "@/assets/image";
const Contactusbanner = () => {
    return (
        <div className="max-lg:pt-16">
            <div className='relative  w-full'>
                <div className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/4 text-white'>
                    <h1 className='text-8xl font-bold max-lg:text-6xl max-md:text-xl'>Contact us</h1>
                    <p className='max-md:text-xs'>HOME / CONTACT US</p>
                </div>
                <Image className="w-full" src={aboutbanner} alt="banner" />
            </div>
        </div>
    );
}

export default Contactusbanner;