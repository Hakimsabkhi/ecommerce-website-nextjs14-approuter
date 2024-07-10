import React from 'react';
import Image from 'next/image';
import { aboutbanner } from "../../public/image";
const Giftcardbanner = () => {
    return (
        <div className='relative  w-full'>
            <div className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/4 text-white'>
                <h1 className='text-8xl max-md:text-xl'>Gift Cards</h1>
                <p className='max-md:text-xs'>HOME / GIFT CARDS</p>
            </div>
            <Image className="w-full" src={aboutbanner} alt="banner" />

        </div>
    );
}

export default Giftcardbanner;