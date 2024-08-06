import React from 'react';
import {chair19,chair18} from "../../public/image";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";

const Order = () => {
    return (
        <div className="w-full flex justify-center py-40">
            <div className="rounded-xl w-[80%] max-lg:w-[95%] border-2 flex flex-col justify-center itesm-center">
                <div className="flex max-xl:flex-col justify-between items-center p-8 border-b-2 ">
                    <div className='flex flex-col gap-4'>
                        <p className="flex items-center gap-1">
                            Order ID:
                            <span className='text-blue-500'>
                                #10234987
                            </span>
                        </p>
                        <p className="flex items-center gap-1">
                            Order Payment:
                            <span className='text-gray-400'>18th march 2021</span>
                        </p>
                    </div>
                    <button className='bg-orange-400 text-white h-10 w-[15%] max-xl:w-[50%] rounded-lg font-bold'>Track Your order</button>
                </div>
                <div className='flex flex-col  w-[80%] max-lg:w-[95%] divide-y-2  mx-auto'>
                    <div className='flex max-xl:flex-col items-center justify-between py-4 max-xl:gap-10 '>
                        <div className="flex max-lg:justify-between max-lg:w-full gap-4 max-md:flex-col max-md:items-center">
                            <Image src={chair18} alt="chair" />
                            <div className='flex flex-col justify-between max-md:items-center'>
                                <p className='text-2xl font-bold'>Premuim Quality Dust Watch</p>
                                <p className='text-gray-400 text-xl'>By:Dust Studio</p>
                                <div className='flex items-center text-xl'>
                                    <p className='pr-6 py-2 border-r-2'>size:<span className='text-gray-400'>100ml</span></p>
                                    <p className='px-6 py-2'>QTY:<span className='text-gray-400'>2</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-start gap-8 max-lg:w-full max-lg:justify-between max-md:flex-col max-md:items-center'>
                            <div className='flex lg:flex-col gap-2 text-xl'>
                                <p>price</p>
                                <p className='text-blue-500'>$100</p>
                            </div>
                            <div className='flex lg:flex-col gap-2 text-xl'>
                                <p>status</p>
                                <p className='text-[#959595] bg-[#D9D9D9] h-8 px-2 py-1 rounded-full'>Ready for Delivery</p>
                            </div>
                            <div className='flex flex-col gap-2 text-xl '>
                                <p>Expected Delivery Time</p>
                                <p className="text-gray-400">23rd March 2021</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex max-xl:flex-col items-center justify-between max-xl:gap-10 py-4'>
                        <div className="flex max-lg:justify-between max-lg:w-full gap-4 max-md:flex-col max-md:items-center">
                            <Image src={chair19} alt="chair" />
                            <div className='flex flex-col justify-between max-md:items-center'>
                                <p className='text-2xl font-bold'>Premuim Quality Dust Watch</p>
                                <p className='text-gray-400 text-xl'>Domond Dials</p>
                                <div className='flex items-center text-xl'>
                                    <p className='pr-6 py-2 border-r-2'>size:<span className='text-gray-400'>Regular</span></p>
                                    <p className='px-6 py-2'>QTY:<span className='text-gray-400'>1</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-start gap-8 max-lg:w-full max-lg:justify-between max-md:flex-col max-md:items-center'>
                            <div className='flex lg:flex-col gap-2 text-xl'>
                                <p>price</p>
                                <p className='text-blue-500'>$100</p>
                            </div>
                            <div className='flex lg:flex-col gap-2 text-xl'>
                                <p>status</p>
                                <p className='text-[#959595] bg-[#D9D9D9] h-8 px-2 py-1 rounded-full'>Ready for Delivery</p>
                            </div>
                            <div className='flex flex-col gap-2 text-xl'>
                                <p>Expected Delivery Time</p>
                                <p className="text-gray-400">23rd March 2021</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex max-md:flex-col border-t-2">
                    <div className="flex items-center justify-center gap-4 p-8 w-[20%] max-md:w-full lg:border-r-2">
                        <RxCross1 size={35}/>
                        <p className='text-xl font-bold'>Cancel Order</p>
                    </div>
                    <div className="flex items-center justify-between p-8 w-[80%] max-md:w-full max-md:border-t-2 text-xl font-bold font-poppins  ">
                        <p>Paid Using Credit Card <span className='text-gray-400'>ending with 8822</span></p>
                        <p>Total Price <span className='text-blue-500'>$200.00</span></p>
                    </div>

                </div>
            </div>            
        </div>
    );
}

export default Order;
