import React from 'react';
import Image from 'next/image';
import { decor1 } from "../../public/image";
const Rules = () => {
    return (
        <div className=' py-8 h-fit w-full flex flex-col gap-10 justify-center items-center'>
            <div className='max-md:text-center text-left max-md:w-4/5 w-4/5  '>
                <h3 className='font-bold max-md:text-2xl text-2xl text-gray-800'>
                    Rules of choosing furniture
                </h3>
            </div>
            <div className='flex max-md:w-4/5 w-4/5 max-md:flex-col  gap-16'>
                <div className='w-fit'>
                    <Image className='w-[600px]  rounded-md shadow-lg' src={decor1} alt="decor" />
                </div>
                <div className='gap-8 w-fit flex-col justify-center flex'>
                    <p className=' text-gray-800 max-md:text-center text-2xl font-bold'>Whether living on your own or with a family , your livingroom is an important</p>
                    <p className='text-xl text-gray-400'>this room is where your family spends time together, and it is the room most of your guests will spend the majority of their time in. Choosing furniture that creates a pleasant, welcoming appearance while holding up against the wear and tear of everyday life is the key in getting this space to work for your needs </p>
                    <div>
                        <li className='text-xl text-gray-400'>Choose items in a single color scheme and style</li>
                        <li className='text-xl text-gray-400'>Consider the area of the room</li>
                        <li className='text-xl text-gray-400'>Do not buy unnecessary pieces of furniture</li>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Rules;
