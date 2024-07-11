import React from 'react';
import Image from 'next/image';
import { chair2, chair3, star, heart, Vector, chair4, chair5, table2, table3, table1, sofa2, sofa3, sofa4 } from "../../public/image";

const Sellers = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center gap-10 py-8'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-4/5 '>
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
            <div className='grid grid-cols-5 max-md:grid-cols-2 max-xl:grid-cols-3  gap-6  rounded-lg relative'>
                <div className='bg-white rounded-lg w-[258px] h-[397px] max-md:w-[168px] max-md:h-[332px] relative '>
                    <Image className='absolute right-1 top-1 w-4' src={heart} alt="heart" />
                    <Image className='absolute right-2 top-5 max-md:w-[150px] max-md:h-[150px]' src={chair2} alt="chair" />
                    <div className='flex-col flex bottom-0 absolute w-full px-2 '>
                        <div className='flex justify-between'>
                            <p className='text-gray-700 font-bold'>curve</p>
                            <p className='flex gap-2 items-center'>4.5 <Image src={star} alt="star" /> </p>
                        </div>
                        <p className='text-gray-400'>chairs</p>
                        <p className='text-orange-800'>320.00 TND</p>
                        <div className='flex xl:hidden justify-center'> 
                            <p className='bg-orange-400 rounded-full text-center w-4/5 text-white py-2 mb-1'>add to cart</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-lg w-[258px] h-[397px] max-md:w-[168px] max-md:h-[332px] relative '>
                    <Image className='absolute right-1 top-1 w-4' src={heart} alt="heart" />
                    <Image className='absolute right-2 top-5 max-md:w-[150px] max-md:h-[150px]' src={sofa2} alt="chair" />
                    <div className='flex-col flex bottom-0 absolute w-full px-2 '>
                        <div className='flex justify-between'>
                            <p className='text-gray-700 font-bold'>Can</p>
                        </div>
                        <p className='text-gray-400'>Sofas</p>
                        <p className='text-orange-800'>2,100.00 TND</p>
                        <div className='flex xl:hidden justify-center'> 
                            <p className='bg-orange-400 rounded-full text-center w-4/5 text-white py-2 mb-1'>add to cart</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-lg w-[258px] h-[397px] max-md:w-[168px] max-md:h-[332px] relative '>
                    <Image className='absolute right-1 top-1 w-4' src={heart} alt="heart" />
                    <Image className='absolute right-2 top-5 max-md:w-[150px] max-md:h-[150px]' src={chair3} alt="chair" />
                    <div className='flex-col flex bottom-0 absolute w-full px-2 '>
                        <div className='flex justify-between'>
                            <p className='text-gray-700 font-bold '>Belt</p>
                        </div>
                        <p className='text-gray-400'>Armchairs</p>                    
                        <p className='text-orange-800'>680.00 TND</p>                                                    
                        <div className='flex xl:hidden justify-center'> 
                            <p className='bg-orange-400 rounded-full text-center w-4/5 text-white py-2 mb-1'>add to cart</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-lg w-[258px] h-[397px] max-md:w-[168px] max-md:h-[332px] relative '>
                    <Image className='absolute right-1 top-1 w-4' src={heart} alt="heart" />
                    <Image className='absolute right-2 top-5 max-md:w-[150px] max-md:h-[150px]' src={table1} alt="chair" />
                    <div className='flex-col flex bottom-0 absolute w-full px-2 '>
                        <div className='flex justify-between'>
                            <p className='text-gray-700 font-bold '>Giro LR</p>
                            <p className='flex gap-2 items-center'>4.5 <Image src={star} alt="star" /> </p>
                        </div>
                        <p className='text-gray-400'>Tables</p>
                        <p className='text-orange-800'>449.00 TND</p>
                        <div className='flex xl:hidden justify-center'> 
                            <p className='bg-orange-400 rounded-full text-center w-4/5 text-white py-2 mb-1'>add to cart</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-lg w-[258px] h-[397px] max-md:w-[168px] max-md:h-[332px] relative '>
                    <Image className='absolute right-1 top-1 w-4' src={heart} alt="heart" />
                    <Image className='absolute right-2 top-5 max-md:w-[150px] max-md:h-[150px]' src={chair4} alt="chair" />
                    <div className='flex-col flex bottom-0 absolute w-full px-2 '>
                        <div className='flex justify-between'>
                            <p className='text-gray-700 font-bold '>Soft Edge</p>
                        </div>
                        <p className='text-gray-400'>Chairs</p>
                        <p className='text-orange-800'>440.00 TND</p>
                        <div className='flex xl:hidden justify-center'> 
                            <p className='bg-orange-400 rounded-full text-center w-4/5 text-white py-2 mb-1'>add to cart</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-lg w-[258px] h-[397px] max-md:w-[168px] max-md:h-[332px] relative '>
                    <Image className='absolute right-1 top-1 w-4' src={heart} alt="heart" />
                    <Image className='absolute right-2 top-5 max-md:w-[150px] max-md:h-[150px]' src={sofa3} alt="chair" />
                    <div className='flex-col flex bottom-0 absolute w-full px-2 '>
                        <div className='flex justify-between'>
                            <p className='text-gray-700 font-bold'>Palissade</p>
                            <p className='flex gap-2 items-center'>4.5 <Image src={star} alt="star" /> </p>
                        </div>
                        <p className='text-gray-400'>Sofas</p>
                        <p className='text-orange-800'>1,890.00 TND</p>
                        <div className='flex xl:hidden justify-center'> 
                            <p className='bg-orange-400 rounded-full text-center w-4/5 text-white py-2 mb-1'>add to cart</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-lg w-[258px] h-[397px] max-md:w-[168px] max-md:h-[332px] relative '>
                    <Image className='absolute right-1 top-1 w-4' src={heart} alt="heart" />
                    <Image className='absolute right-2 top-5 max-md:w-[150px] max-md:h-[150px]' src={table2} alt="chair" />
                    <div className='flex-col flex bottom-0 absolute w-full px-2 '>
                        <div className='flex justify-between'>
                            <p className='text-gray-700 font-bold'>Bitta</p>
                        </div>
                        <p className='text-gray-400'>Tables</p>
                        <div className='flex gap-1'>
                            <p className=' line-through opacity-50'>1,519.00 TND</p>
                            <p className=' text-orange-800'>1,367.10 TND</p>
                        </div>
                        <div className='flex xl:hidden justify-center'> 
                            <p className='bg-orange-400 rounded-full text-center w-4/5 text-white py-2 mb-1'>add to cart</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-lg w-[258px] h-[397px] max-md:w-[168px] max-md:h-[332px] relative '>
                    <Image className='absolute right-1 top-1 w-4' src={heart} alt="heart" />
                    <Image className='absolute right-2 top-5 max-md:w-[150px] max-md:h-[150px]' src={chair5} alt="chair" />
                    <div className='flex-col flex bottom-0 absolute w-full px-2 '>
                        <div className='flex justify-between'>
                            <p className='text-gray-700 font-bold'>Albert</p>
                        </div>
                        <p className='text-gray-400'>Armchairs</p>
                        <p className=' text-orange-800'>1,600.00 TND</p>
                        <div className='flex xl:hidden justify-center'> 
                            <p className='bg-orange-400 rounded-full text-center w-4/5 text-white py-2 mb-1'>add to cart</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-lg w-[258px] h-[397px] max-md:w-[168px] max-md:h-[332px] relative '>
                    <Image className='absolute right-1 top-1 w-4' src={heart} alt="heart" />
                    <Image className='absolute right-2 top-5 max-md:w-[150px] max-md:h-[150px]' src={sofa4} alt="chair" />
                    <div className='flex-col flex bottom-0 absolute w-full px-2 '>
                        <div className='flex justify-between'>
                            <p className='text-gray-700 font-bold'>Navana</p>
                        </div>
                        <p className='text-gray-400'>Sofas</p>
                        <div className='flex gap-1'>
                            <p className=' line-through opacity-50'>1,850.00 TND</p>
                            <p className=' text-orange-800'>1,669.00 TND</p>
                        </div>
                        <div className='flex xl:hidden justify-center'> 
                            <p className='bg-orange-400 rounded-full text-center w-4/5 text-white py-2 mb-1'>add to cart</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-lg w-[258px] h-[397px] max-md:w-[168px] max-md:h-[332px] relative '>
                    <Image className='absolute right-1 top-1 w-4' src={heart} alt="heart" />
                    <Image className='absolute right-2 top-5 max-md:w-[150px] max-md:h-[150px]' src={table3} alt="chair" />
                    <div className='flex-col flex bottom-0 absolute w-full px-2 '>
                        <div className='flex justify-between'>
                            <p className='text-gray-700 font-bold'>Aruda</p>
                            <p className='flex gap-2 items-center'>4.5 <Image src={star} alt="star" /> </p>
                        </div>
                        <p className='text-gray-400'>Tables</p>
                        <p className=' text-orange-800'>699.00 TND</p>
                        <div className='flex xl:hidden justify-center'> 
                            <p className='bg-orange-400 rounded-full text-center w-4/5 text-white py-2 mb-1'>add to cart</p>
                        </div>
                    </div>
                </div>


                {/* <div className='relative'>
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
                </div> */}
            </div>
        </div>
    );
}

export default Sellers;
