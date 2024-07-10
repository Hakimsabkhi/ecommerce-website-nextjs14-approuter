import React from 'react';
import Image from 'next/image';
import { mags, frames, skygarden, heart, kitchen2 } from "../../public/image";

const Furniture = () => {
    return (
        <div className='w-full flex max-md:flex-col max-md:justify-center max-md:items-center  justify-center items-end gap-6 py-8'>
            <div className='flex max-md:flex-col gap-10 flex-col'>
                <div className='text-left max-md:text-center'>
                    <h3 className='font-bold text-2xl text-gray-800'>
                        Furniture collection of the week
                    </h3>
                    <p className='text-sm text-gray-400'>The most popular products from the collection</p>
                </div>
                <div className='flex max-md:flex-col gap-6 max-md:justify-center max-md:items-center  justify-center'>
                    <div className='relative'>
                        <Image className='shadow-lg rounded-md w-[300px]' src={frames} alt="chair" />
                        <div className='absolute top-2 right-2'>
                            <Image className='w-6' src={heart} alt="heart" />
                        </div>
                        <div className='absolute bottom-4 left-5 space-y-1'>
                            <p className='text-sm font-semibold'>Frames Upholstered</p>
                            <p className='text-sm text-gray-400'>Chairs</p>
                            <p className='text-sm text-orange-900'>399.00 TND</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <Image className='shadow-lg rounded-md w-[300px]' src={skygarden} alt="lighting" />
                        <div className='absolute top-2 right-2'>
                            <Image className='w-6' src={heart} alt="heart" />
                        </div>
                        <div className='absolute bottom-4 left-5 space-y-1'>
                            <p className='text-sm font-semibold'>Skygarden</p>
                            <p className='text-sm text-gray-400'>lighting</p>
                            <p className='text-sm text-orange-900'>780.00 TND</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <Image className='shadow-lg rounded-md w-[300px]' src={mags} alt="sofa" />
                        <div className='absolute top-2 right-2'>
                            <Image className='w-6' src={heart} alt="heart" />
                        </div>
                        <div className='absolute bottom-4 left-5 space-y-1'>
                            <p className='text-sm font-semibold'>Mags</p>
                            <p className='text-sm text-gray-400'>Sofas</p>
                            <p className='text-sm text-orange-900'>3,620.00 TND</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center  '>
                <Image className='rounded-lg shadow-lg max-md:w-[300px] max-md:h-[200px] w-[560px] h-[600px] object-cover' src={kitchen2} alt="kitchen" />
            </div>
        </div>
    );
}

export default Furniture;




