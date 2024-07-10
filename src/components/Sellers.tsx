import React from 'react';
import Image from 'next/image';
import { chair2, chair3, star, heart, Vector, chair4, chair5, table2, table3, table1, sofa2, sofa3, sofa4 } from "../../public/image";

const Sellers = () => {
    return (
        <div className='centred flex flex-col justify-center items-center gap-10 py-8'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full '>
                <h3 className='font-bold text-2xl text-gray-800'>
                    Weekly bestsellers
                </h3>
                <div className='text-sm flex gap-2 text-gray-400'>
                    <a href="#" className='underline decoration-2 underline-offset-4 decoration-orange-500'>All</a>
                    <a href="#">Chairs</a>
                    <a href="#">Sofas</a>
                    <a href="#">Armchairs</a>
                    <a href="#">Tables</a>
                </div>
            </div>
            <div className='grid grid-cols-5 max-md:grid-cols-2  gap-6 w-full'>
                <div className='relative'>
                    <Image className='shadow-lg rounded-md w-full' src={chair2} alt="chair" />
                    <div className='absolute top-2 right-2'>
                        <Image className='w-6' src={heart} alt="heart" />
                    </div>
                    <div className='absolute space-y-1 bottom-4 left-5'>
                        <p className='text-sm font-semibold'>Curve</p>
                        <p className='text-sm text-gray-400'>Chairs</p>
                        <p className='text-sm text-orange-900'>320.00 TND</p>
                    </div>
                    <div className='absolute flex items-center gap-1 bottom-14 right-2'>
                        <p className='text-sm font-semibold'>4.5</p>
                        <Image className='w-5' src={star} alt="star" />
                    </div>
                </div>
                <div className='relative'>
                    <Image className='shadow-lg rounded-md w-full' src={sofa2} alt="sofa" />
                    <div className='absolute top-2 right-2'>
                        <Image className='w-6' src={heart} alt="heart" />
                    </div>
                    <div className='absolute space-y-1 bottom-4 left-5'>
                        <p className='text-sm font-bold'>Can</p>
                        <p className='text-sm text-gray-400'>Sofas</p>
                        <p className='text-sm text-orange-900'>2,100.00 TND</p>
                    </div>
                </div>
                <div className='relative'>
                    <Image className='shadow-lg rounded-md w-full' src={chair3} alt="chair" />
                    <div className='absolute top-2 right-2'>
                        <Image className='w-6' src={heart} alt="heart" />
                    </div>
                    <div className='absolute space-y-1 bottom-4 left-5'>
                        <p className='text-sm font-bold'>Belt</p>
                        <p className='text-sm text-gray-400'>Armchairs</p>
                        <p className='text-sm text-orange-900'>680.00 TND</p>
                    </div>
                </div>
                <div className='relative'>
                    <Image className='shadow-lg rounded-md w-full' src={table1} alt="table" />
                    <div className='absolute top-2 right-2'>
                        <Image className='w-6' src={heart} alt="heart" />
                    </div>
                    <div className='absolute space-y-1 bottom-4 left-5'>
                        <p className='text-sm font-bold'>Giro LR</p>
                        <p className='text-sm text-gray-400'>Tables</p>
                        <p className='text-sm text-orange-900'>449.00 TND</p>
                    </div>
                    <div className='absolute flex items-center gap-1 bottom-14 right-2'>
                        <p className='text-sm font-semibold'>5</p>
                        <Image className='w-5' src={star} alt="star" />
                    </div>
                </div>
                <div className='relative'>
                    <Image className='shadow-lg rounded-md w-full' src={chair4} alt="chair" />
                    <div className='absolute top-2 right-2'>
                        <Image className='w-6' src={heart} alt="heart" />
                    </div>
                    <div className='absolute space-y-1 bottom-4 left-5'>
                        <p className='text-sm font-bold'>Soft Edge</p>
                        <p className='text-sm text-gray-400'>Chairs</p>
                        <p className='text-sm text-orange-900'>440.00 TND</p>
                    </div>
                </div>
                <div className='relative'>
                    <Image className='shadow-lg rounded-md w-full' src={sofa3} alt="sofa" />
                    <div className='absolute top-2 right-2'>
                        <Image className='w-6' src={heart} alt="heart" />
                    </div>
                    <div className='absolute space-y-1 bottom-4 left-5'>
                        <p className='text-sm font-bold'>Palissade</p>
                        <p className='text-sm text-gray-400'>Sofas</p>
                        <p className='text-sm text-orange-900'>1,890.00 TND</p>
                    </div>
                    <div className='absolute flex items-center gap-1 bottom-14 right-2'>
                        <p className='text-sm font-semibold'>4.5</p>
                        <Image className='w-5' src={star} alt="star" />
                    </div>
                </div>
                <div className='relative'>
                    <Image className='shadow-lg rounded-md w-full' src={table2} alt="table" />
                    <div className='absolute top-2 right-2'>
                        <Image className='w-6' src={heart} alt="heart" />
                    </div>
                    <div className='absolute top-2 left-2'>
                        <p className='bg-orange-400 rounded-lg text-white text-xs px-2'>-10%</p>
                    </div>
                    <div className='absolute space-y-1 bottom-4 left-5'>
                        <p className='text-sm font-bold'>Bitta</p>
                        <p className='text-sm text-gray-400'>Tables</p>
                        <div className='flex gap-1'>
                            <p className='text-sm line-through opacity-50'>1,519.00 TND</p>
                            <p className='text-sm text-orange-900'>1,367.10 TND</p>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <Image className='shadow-lg rounded-md w-full' src={chair5} alt="chair" />
                    <div className='absolute top-2 right-2'>
                        <Image className='w-6' src={heart} alt="heart" />
                    </div>
                    <div className='absolute space-y-1 bottom-4 left-5'>
                        <p className='text-sm font-bold'>Albert</p>
                        <p className='text-sm text-gray-400'>Armchairs</p>
                        <p className='text-sm text-orange-900'>1,600.00 TND</p>
                    </div>
                </div>
                <div className='relative'>
                    <Image className='shadow-lg rounded-md w-full' src={sofa4} alt="sofa" />
                    <div className='absolute top-2 right-2'>
                        <Image className='w-6' src={heart} alt="heart" />
                    </div>
                    <div className='absolute top-2 left-2'>
                        <p className='bg-orange-400 rounded-lg text-white text-xs px-2'>-10%</p>
                    </div>
                    <div className='absolute space-y-1 bottom-4 left-5'>
                        <p className='text-sm font-bold'>Navana</p>
                        <p className='text-sm text-gray-400'>Sofas</p>
                        <div className='flex gap-1'>
                            <p className='text-sm line-through opacity-50'>1,850.00 TND</p>
                            <p className='text-sm text-orange-900'>1,669.00 TND</p>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <Image className='shadow-lg rounded-md w-full' src={table3} alt="table" />
                    <div className='absolute top-2 right-2'>
                        <Image className='w-6' src={heart} alt="heart" />
                    </div>
                    <div className='absolute space-y-1 bottom-4 left-5'>
                        <p className='text-sm font-bold'>Aruda</p>
                        <p className='text-sm text-gray-400'>Tables</p>
                        <p className='text-sm text-orange-900'>699.00 TND</p>
                    </div>
                    <div className='absolute flex items-center gap-1 bottom-14 right-2'>
                        <p className='text-sm font-semibold'>4.5</p>
                        <Image className='w-5' src={star} alt="star" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sellers;
