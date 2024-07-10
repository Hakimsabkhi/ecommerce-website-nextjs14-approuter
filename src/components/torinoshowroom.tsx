import React from 'react';
import Image from 'next/image';
import { lladrologo, poliformlogo, minottilogo, kettallogo, tacchinilogo, milanoroom1, milanoroom2, milanoroom3, torinoroom1, torinoroom2 } from "../../public/image";
const Torinoshowroom = () => {
    return (
        <div className='flex flex-col py-8  gap-4 items-center justify-center'>
            <div className='flex w-4/5 items-center justify-between max-md:flex-col max-md:gap-8 '>
                <div className='w-1/3 flex flex-col gap-4 max-md:w-full max-md:text-start'>
                    <p className='text-4xl font-semibold'>Torino showroom</p>
                    <p className='text-gray-400'>Furniture is an invariable attribute of any room. it is they who give it the right atmosphere, making the spcae cozy and comfortbale. More and more often, customers want to place an order in an onli e store, when you can sit down at the computer in your free time, arrange the furniture in the photo and calmly buy the furniture you like.</p>
                    <div className='flex gap-4'>
                        <Image src={lladrologo} alt="brand" />
                        <Image src={poliformlogo} alt="brand" />
                        <Image src={tacchinilogo} alt="brand" />
                        <Image src={kettallogo} alt="brand" />
                        <Image src={minottilogo} alt="brand" />
                    </div>
                </div>
                <div className='w-1/3 flex-col  flex gap-4 max-md:w-full max-md:justify-center max-md:flex max-md:flex-colr max-md:items-center max-md:gap-1 max-md:text-center'>
                    <div className='flex-col flex '>
                        <p>Torino</p>
                        <p>Shopville Le Gru</p>
                        <p>Via Mincio,5,10126</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <p>Monday-Friday</p>
                        <p className='text-sm text-gray-400'>09:00-17:00</p>
                    </div>
                    <div>
                        <p>xtemos@gmail.com</p>
                        <p>(686) 492-1044</p>
                    </div>
                    <div className='w-24 bg-orange-400 items-center justify-center rounded-full text-white text-sm px-1  py-1 '>
                        <p >make a route</p>
                    </div>
                </div>
            </div>
            <div className='flex max-md:flex-col gap-5  justify-center'>
                <Image src={torinoroom1} alt="milano" />
                <Image src={torinoroom2} alt="milano" />
                <Image src={milanoroom3} alt="milano" />
            </div>



        </div>
    );
}

export default Torinoshowroom;