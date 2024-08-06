import React from 'react';
import { chair20 } from 'public/image';
import Image from 'next/image';
const OrderHistory = () => {
    return (
        <div className='w-full py-20 flex justify-center'>
            <div className='w-[80%] rounded-lg p-8 border-2 flex flex-col gap-2 '>
                <div>
                    <p className="text-2xl font-bold">Order HISTORY</p>
                    <p className="text-gray-400 text-sm">Check the status of recent orders, manage returns, and download invoices</p>                    
                </div>
                <div className='flex flex-col gap-4'>
                    <div className="flex flex-col gap-4">
                        <div className="bg-[#EFEFEF] rounded-lg p-6 justify-between flex">
                            <div>
                                <p>Date placed</p>
                                <p>January 22,2021</p>
                            </div>
                            <div>
                                <p>Order number</p>
                                <p>WU88191111</p>
                            </div>
                            <div>
                                <p>Total amount</p>
                                <p>$238.00</p>
                            </div>
                            <button className='bg-[#F7F7F7] border-2 h-10 w-[15%] rounded-lg '>View Invoice</button>
                        </div>
                        <table className="table-auto w-full ">
                            <thead>
                                <tr className=" text-gray-400 border-b-2 ">
                                    <th className='text-start py-6'>Product</th>
                                    <th className='text-start py-6'>Price</th>
                                    <th className='text-start py-6'>Status</th>
                                    <th className='text-start py-6'>Info</th>
                                </tr>
                            </thead>
                            <tbody className='divide-y-2'>
                                <tr>
                                    <td className="flex items-center gap-4">
                                        <Image src={chair20} alt="chair"/>
                                        <p>Machined Pen and Pencil Set</p>
                                    </td>
                                    <td className='text-gray-400'>$70.00</td>
                                    <td className='text-gray-400'>Delivered Jan 25,2021</td>
                                    <td className='text-blue-400 '>View Product</td>
                                </tr>
                                <tr>
                                    <td className="flex items-center gap-4">
                                        <Image src={chair20} alt="chair"/>
                                        <p>Machined Pen and Pencil Set</p>
                                    </td>
                                    <td className='text-gray-400'>$70.00</td>
                                    <td className='text-gray-400'>Delivered Jan 25,2021</td>
                                    <td className='text-blue-400 '>View Product</td>
                                </tr>
                                <tr>
                                    <td className="flex items-center gap-4">
                                        <Image src={chair20} alt="chair"/>
                                        <p>Machined Pen and Pencil Set</p>
                                    </td>
                                    <td className='text-gray-400'>$70.00</td>
                                    <td className='text-gray-400'>Delivered Jan 25,2021</td>
                                    <td className='text-blue-400 '>View Product</td>
                                </tr>                                
                            </tbody>
                        </table>                        
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="bg-[#EFEFEF] rounded-lg p-6 justify-between flex">
                            <div>
                                <p>Date placed</p>
                                <p>January 22,2021</p>
                            </div>
                            <div>
                                <p>Order number</p>
                                <p>WU88191111</p>
                            </div>
                            <div>
                                <p>Total amount</p>
                                <p>$238.00</p>
                            </div>
                            <button className='bg-[#F7F7F7] border-2 h-10 w-[15%] rounded-lg '>View Invoice</button>
                        </div>
                        <table className="table-auto w-full ">
                            <thead>
                                <tr className=" text-gray-400 border-b-2 ">
                                    <th className='text-start py-6'>Product</th>
                                    <th className='text-start py-6'>Price</th>
                                    <th className='text-start py-6'>Status</th>
                                    <th className='text-start py-6'>Info</th>
                                </tr>
                            </thead>
                            <tbody className='divide-y-2'>
                                <tr>
                                    <td className="flex items-center gap-4">
                                        <Image src={chair20} alt="chair"/>
                                        <p>Machined Pen and Pencil Set</p>
                                    </td>
                                    <td className='text-gray-400'>$70.00</td>
                                    <td className='text-gray-400'>Delivered Jan 25,2021</td>
                                    <td className='text-blue-400 '>View Product</td>
                                </tr>
                                <tr>
                                    <td className="flex items-center gap-4">
                                        <Image src={chair20} alt="chair"/>
                                        <p>Machined Pen and Pencil Set</p>
                                    </td>
                                    <td className='text-gray-400'>$70.00</td>
                                    <td className='text-gray-400'>Delivered Jan 25,2021</td>
                                    <td className='text-blue-400 '>View Product</td>
                                </tr>
                                <tr>
                                    <td className="flex items-center gap-4">
                                        <Image src={chair20} alt="chair"/>
                                        <p>Machined Pen and Pencil Set</p>
                                    </td>
                                    <td className='text-gray-400'>$70.00</td>
                                    <td className='text-gray-400'>Delivered Jan 25,2021</td>
                                    <td className='text-blue-400 '>View Product</td>
                                </tr>                                
                            </tbody>
                        </table>                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderHistory;
