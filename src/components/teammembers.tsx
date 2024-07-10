import React from 'react';
import Image from 'next/image';
import { marvin, facebook, X, linkedin, instagram, dianne, livingroom3, kristin } from "../../public/image";

const Teammembers = () => {
    return (
        <div className='flex flex-col w-full  justify-center items-center py-8 gap-20 max-md:flex-col'>
            <div className='justify-center flex w-4/5 flex-col items-center max-md:text-center'>
                <h1 className='text-2xl font-bold'>Teammembers</h1>
                <p className='text-gray-400'>Explore product collections from our vendors</p>
            </div>
            <div className='flex w-4/5 justify-between max-md:flex-col max-md:gap-10'>
                <div className='flex-col flex justify-center items-center gap-2'>
                    <Image src={marvin} alt='person' />
                    <p className='text-xl font-semibold'>Marvin McKinney</p>
                    <p className='text-gray-400'>CEO,co-founder</p>
                    <div className='flex gap-4'>
                        <Image className='w-8 h-8' src={facebook} alt="socials" />
                        <Image className='w-8 h-8' src={X} alt="socials" />
                        <Image className='w-8 h-8' src={linkedin} alt="socials" />
                    </div>
                </div>
                <div className='flex-col flex justify-center items-center gap-2'>
                    <Image src={dianne} alt='person' />
                    <p className='text-xl font-semibold'>Dianne Russel</p>
                    <p className='text-gray-400'>CEO,co-founder</p>
                    <div className='flex gap-4'>
                        <Image className='w-8 h-8' src={facebook} alt="socials" />
                        <Image className='w-8 h-8' src={X} alt="socials" />
                        <Image className='w-8 h-8' src={linkedin} alt="socials" />
                        <Image className='w-8 h-8' src={instagram} alt="socials" />
                    </div>
                </div>
                <div className='flex-col flex justify-center items-center gap-2'>
                    <Image src={kristin} alt='person' />
                    <p className='text-xl font-semibold'>Kristin Watsony</p>
                    <p className='text-gray-400'>CEO,co-founder</p>
                    <div className='flex gap-4'>
                        <Image className='w-8 h-8' src={facebook} alt="socials" />
                        <Image className='w-8 h-8' src={X} alt="socials" />
                        <Image className='w-8 h-8' src={linkedin} alt="socials" />
                    </div>
                </div>
            </div>
            <Image src={livingroom3} alt="livingroom" />
        </div>
    );
}

export default Teammembers;
