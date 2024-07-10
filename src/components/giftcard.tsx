import React from 'react';
import { giftcard1, giftcard2 } from "../../public/image";
import Image from 'next/image';
const Giftcard = () => {
    return (
        <div className='py-8 w-full gap-16 justify-center items-center flex flex-col     '>
            <div className='flex gap-6  w-4/5 justify-between max-md:flex-col'>
                <div className='gap-8 flex flex-col'>
                    <div className='relative w-fit '>
                        <div className='absolute flex-col items-center flex top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white '>
                            <p className='text-xl max-md:text-sm opacity-50'>LUXEHOME</p>
                            <p className='text-4xl max-md:text-xl  '>e-Gift cards</p>
                        </div>
                        <Image className='w-[800px]' src={giftcard1} alt="giftcard" />
                    </div>
                    <div className='flex-col flex items-center justify-center gap-1'>
                        <p className='text-gray-400 max-md:text-center'>Purshase online and the e-Gift Card is sent straight to their inbox!</p>
                        <p className='text-xl max-md:text-center'>Purshase e-Gift cards up to 1 000 TND in value</p>
                        <p className='w-fit bg-orange-500 px-10 py-2 rounded-full text-white'>Buy now</p>
                    </div>
                </div>
                <div className='gap-8 flex flex-col'>
                    <div className='relative w-fit'>
                        <div className='absolute flex-col items-center flex top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white'>
                            <p className='text-xl max-md:text-sm opacity-50'>LUXEHOME</p>
                            <p className='text-4xl max-md:text-xl '>Gift cards</p>
                        </div>
                        <Image className='w-[800px]' src={giftcard2} alt="giftcard" />
                    </div>
                    <div className='flex-col flex items-center justify-center gap-1'>
                        <p className='text-gray-400 max-md:text-center'>Purshase in-store and it's ready for gifting! Just pick the value of the card.</p>
                        <p className='text-xl max-md:text-center'>Purshase e-Gift cards up to 500 TND in value</p>
                        <p className='w-fit bg-orange-500 px-10 py-2 rounded-full text-white'>Buy now</p>
                    </div>
                </div>
            </div>
            <div className='flex-col justify-center w-4/5 items-center  gap-2 flex '>
                <p className='text-xl max-md:text-center'>If you can't decide on the perfect gift, let them choose with the LUXEHOME gift card</p>
                <div className='text-gray-400 flex-col   '>
                    <p className='max-md:text-center'>The luxehome Gift Card is easy! just pick the value of the card and your friends or family are free to get exactly what they want it's perfect for.</p>
                    <p className='justify-center flex max-md:text-center'>graduations,holidays,back to college shopping, baby showers, weddings and house warming gifts. available in increments of €5-€1000.</p>
                </div>
            </div>
        </div>
    );
}

export default Giftcard;
