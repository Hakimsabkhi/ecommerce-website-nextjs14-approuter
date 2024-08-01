import React from 'react';
import Image from 'next/image';
import { chairsbanner } from 'public/image';
import { FaArrowLeftLong } from "react-icons/fa6";

const Chairsbanner = () => {
    return (
        <div className='max-lg:pt-16'>
            <div className='relative w-full'>
                {/* <FaArrowLeftLong className=' max-md:text-3xl text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-[12%] absolute font-bold' /> */}
                <a href="/" className='text-8xl max-md:text-3xl text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/4 absolute font-bold'>Chairs</a>
                <div className='w-full h-full'>
                    <Image className='w-full ' src={chairsbanner} alt='chairs' />
                </div>                
            </div>
        </div>
    );
}

export default Chairsbanner;
