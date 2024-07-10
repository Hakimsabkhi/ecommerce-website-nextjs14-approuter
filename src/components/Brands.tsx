import React from 'react';
import Image from 'next/image';
import { elitispic, elitislogo, HAYpic, HAYlogo, kettallogo, kettalpic, lladropic, lladrologo, poliformpic, poliformlogo } from "../../public/image";
const Brands = () => {
    return (
        <div className='centred flex flex-col justify-center items-center gap-10 max-md:gap-4 py-8'>
            <div className='  flex-col max-md:text-left  flex gap-2 max-md:gap-1 text-left w-full '>
                <h3 className=' font-bold text-2xl text-gray-800'>
                    Shopping by brands
                </h3>
                <p className='text-sm text-gray-400'>Discover lots products from poplular brands</p>
            </div>
            <div className=' flex-col w-full justify-center items-center  flex'>
                <div className='flex items-center w-full justify-between gap-6  max-md:flex-col max-md:w-full '>
                    <div className='relative w-full '>
                        <Image className='w-[300px]' src={elitispic} alt="elitisbrand" />
                        <div className='absolute top-6 left-4'>
                            <Image src={elitislogo} alt="elitisbrand" />
                        </div>
                        <div className='absolute top-7 left-24 space-y-2 '>
                            <p className='text-xl  font-bold text-white '>Elitis</p>
                            <p className='text-white text-sm'>Talosa / France</p>
                        </div>
                    </div>
                    <div className='relative w-full '>
                        <Image className='w-[300px]' src={HAYpic} alt="HAYbrand" />
                        <div className='absolute top-6 left-4'>
                            <Image src={HAYlogo} alt="HAYbrand" />
                        </div>
                        <div className='absolute top-7 left-24 space-y-2'>
                            <p className='text-xl font-bold text-white '>Hay</p>
                            <p className='text-white text-sm'>Barcelona / Spain</p>
                        </div>
                    </div>
                    <div className='relative w-full  '>
                        <Image className='w-[300px]' src={kettalpic} alt="kettalbrand" />
                        <div className='absolute top-6 left-4'>
                            <Image src={kettallogo} alt="kettlabrand" />
                        </div>
                        <div className='absolute top-7 left-24 space-y-2'>
                            <p className='text-xl font-bold text-white '>Kettal</p>
                            <p className='text-white text-sm'>Barcelona / Spain</p>
                        </div>
                    </div>
                    <div className='relative w-full '>
                        <Image className='w-[300px]' src={lladropic} alt="lladrobrand" />
                        <div className='absolute top-6 left-4'>
                            <Image src={lladrologo} alt="lladrobrand" />
                        </div>
                        <div className='absolute top-7 left-24 space-y-2'>
                            <p className='text-xl font-bold text-white '>Llardo</p>
                            <p className='text-white text-sm'>Valencia / Spain</p>
                        </div>
                    </div>
                    <div className='relative w-full  '>
                        <Image className='w-[300px]' src={poliformpic} alt="poliformbrand" />
                        <div className='absolute top-6 left-4'>
                            <Image src={poliformlogo} alt="poliformbrand" />
                        </div>
                        <div className='absolute top-7 left-24 space-y-2'>
                            <p className='text-xl font-bold text-white '>Poliform</p>
                            <p className='text-white text-sm'>Como / Italy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Brands;
