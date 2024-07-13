import React from 'react';
import Image from 'next/image';
import { milanopic, torinopic } from "../../public/image";

const Milanotorino = () => {
    return (
        <div className='centred flex flex-col justify-center items-center gap-8 py-8'>
            <div className='flex justify-between items-center w-full max-md:flex-col max-md:items-center max-md:justify-center max-md:flex max-md:gap-8 '>
                <div className='flex items-center justify-center gap-8 '>
                    <Image className='w-[350px] max-md:w-[100px]' src={milanopic} alt='brand' />
                    <div className='flex flex-col gap-8 max-md:flexx-col max-md:gap-1'>
                        <p className='text-5xl max-md:text-3xl  '>Milano</p>
                        <div className='flex-col  flex gap-2'>
                            <div className='text-xl max-md:text-sm'>
                                <p>Milano Piazzale</p>
                                <p>ferrara</p>
                                <p>Via Minicio,4,20139</p>
                            </div>
                            <div className='flex gap-1 text-xl max-md:text-sm max-md:flex-wrap'>
                                <p>Monday-Friday</p>
                                <p className='text-gray-400'>09:00-17:00</p>
                            </div>
                            <div className='text-xl max-md:text-sm'>
                                <p>xtemos@gmail.com</p>
                                <p>(686) 492-1044</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center  gap-8'>
                    <Image className='w-[350px] max-md:w-[100px]' src={torinopic} alt='brand' />
                    <div className='flex flex-col gap-8 max-md:flexx-col max-md:gap-1'>
                        <p className='text-5xl max-md:text-3xl '>Torino</p>
                        <div className='flex-col flex gap-2'>
                            <div className='text-xl max-md:text-sm'>
                                <p>Torino</p>
                                <p>Shopville le gru</p>
                                <p>Via Minico,5,10126</p>
                            </div>
                            <div className='flex gap-1 text-xl max-md:text-sm max-md:flex-wrap'>
                                <p>Monday-Friday</p>
                                <p className='text-gray-400'>09:00-17:00</p>
                            </div>
                            <div className='text-xl max-md:text-sm'>
                                <p>xtemos@gmail.com</p>
                                <p>(686) 492-1044</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between w-full  gap-10 max-md:flex-col '>
                <div className='flex flex-col w-2/4  gap-4 max-md:w-full max-md:flex-col '>
                    <p className='text-3xl'>Contact with an expert</p>
                    <div className='flex-col flex gap-3'>
                        <input type="text" className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-20 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your message..." required />
                    </div>
                    <div className='w-fit'>
                        <p className='bg-orange-400 rounded-full px-8 py-3 text-white'>Send Message</p>
                    </div>
                </div>
                <div  className='flex flex-col w-2/4 gap-8 max-md:w-full'>
                    <p className='text-3xl l  max-md:text-center text-gray-800'>Frequently asked questions</p>
                    <div className=' flex text-xl flex-col gap-2 max-md:text-sm '>
                        <p className='border-b border-gray-800 h-10'>My order hasn't arrived yet. Where is it ?</p>
                        <p className='border-b border-gray-800 h-10'>Do you deliver on public holidays ?</p>
                        <p className='border-b border-gray-800 h-10'>Do you deliver to my postcode ?</p>
                        <p className='border-b border-gray-800 h-10'>Do you deliver to my postcode ?</p>
                        <p className='border-b border-gray-800 h-10'>Is next-day delivery available on all orders ?</p>
                        <p className=' h-10'>Do i need to be there to sign for delivery ?</p>
                    </div>
                </div>
            </div>



        </div>
    );
}

export default Milanotorino;
