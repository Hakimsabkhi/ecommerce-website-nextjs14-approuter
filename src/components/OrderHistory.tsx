import React from 'react';
import { historyproducts1 } from '@/assets/data';
import Image from 'next/image';
const OrderHistory = () => {
    return (
        <div className='w-full py-20 flex justify-center'>
            <div className='w-[80%] max-lg:w-[95%] rounded-lg p-8 border-2 flex flex-col gap-2 '>
                <div className='max-md:flex-col max-md:flex max-md:items-center '>
                    <p className="text-2xl font-bold">Order HISTORY</p>
                    <p className="text-gray-400 text-sm max-md:text-center">Check the status of recent orders, manage returns, and download invoices</p>                    
                </div>
                <div className='flex flex-col gap-4'>
                    <div className="flex flex-col gap-4">
                        <div className="bg-[#EFEFEF] rounded-lg p-6 justify-between flex max-md:flex-col max-md:items-center max-md:gap-4">
                            <div className="max-md:flex max-md:justify-between max-md:w-full">
                                <p>Date placed</p>
                                <p>January 22,2021</p>
                            </div>
                            <div className="max-md:flex max-md:justify-between max-md:w-full">
                                <p>Order number</p>
                                <p>WU88191111</p>
                            </div>
                            <div className="max-md:flex max-md:justify-between max-md:w-full">
                                <p>Total amount</p>
                                <p>$238.00</p>
                            </div>
                            <button className='bg-[#F7F7F7] border-2 h-10 w-[15%] max-md:w-full rounded-lg '>View Invoice</button>
                        </div>
                        <table className="table-auto w-full max-md:hidden">
                            <thead>
                                <tr className=" text-gray-400 border-b-2 ">
                                    <th className='text-start py-6'>Product</th>
                                    <th className='text-start py-6'>Price</th>
                                    <th className='text-start py-6'>Status</th>
                                    <th className='text-start py-6'>Info</th>
                                </tr>
                            </thead>
                            <tbody className='divide-y-2'>
                                {historyproducts1.map((item,index) => (
                                    <tr key={index}>
                                        <td className="flex items-center gap-4">
                                            <Image src={item.src} alt="chair"/>
                                            <p>{item.name}</p>
                                        </td>
                                        <td className='text-gray-400'>{item.price}</td>
                                        <td className='text-gray-400'>{item.status}</td>
                                        <td className='text-blue-400 '>View Product</td>
                                    </tr>                              
                                ))}      
                            </tbody>
                        </table>                        
                        <table className="table-auto w-full md:hidden">
                        <thead>
                                <tr className=" text-gray-400 border-b-2 ">
                                    
                                </tr>
                            </thead>
                            <tbody className='divide-y-2'>
                                {historyproducts1.map((item,index) => (
                                    <tr key={index}>
                                        <td className="flex items-center gap-4">
                                            <Image src={item.src} alt="chair"/>
                                            <div className="flex flex-col gap-6">
                                                <p>{item.name}</p>
                                                <p className="text-gray-400">{item.price}</p>
                                            </div>                                            
                                        </td>                                                                                
                                        <td className='text-blue-400 '>View </td>
                                    </tr>                              
                                ))}      
                            </tbody>
                        </table>                        
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="bg-[#EFEFEF] rounded-lg p-6 justify-between flex max-md:flex-col max-md:items-center max-md:gap-4">
                            <div className="max-md:flex max-md:justify-between max-md:w-full">
                                <p>Date placed</p>
                                <p>January 22,2021</p>
                            </div>
                            <div className="max-md:flex max-md:justify-between max-md:w-full">
                                <p>Order number</p>
                                <p>WU88191111</p>
                            </div>
                            <div className="max-md:flex max-md:justify-between max-md:w-full">
                                <p>Total amount</p>
                                <p>$238.00</p>
                            </div>
                            <button className='bg-[#F7F7F7] border-2 h-10 w-[15%] max-md:w-full rounded-lg '>View Invoice</button>
                        </div>
                        <table className="table-auto w-full max-md:hidden">
                            <thead>
                                <tr className=" text-gray-400 border-b-2 ">
                                    <th className='text-start py-6'>Product</th>
                                    <th className='text-start py-6'>Price</th>
                                    <th className='text-start py-6'>Status</th>
                                    <th className='text-start py-6'>Info</th>
                                </tr>
                            </thead>
                            <tbody className='divide-y-2'>
                                {historyproducts1.map((item,index) => (
                                    <tr key={index}>
                                        <td className="flex items-center gap-4">
                                            <Image src={item.src} alt="chair"/>
                                            <p>{item.name}</p>
                                        </td>
                                        <td className='text-gray-400'>{item.price}</td>
                                        <td className='text-gray-400'>{item.status}</td>
                                        <td className='text-blue-400 '>View Product</td>
                                    </tr>                              
                                ))}      
                            </tbody>
                        </table>                        
                        <table className="table-auto w-full md:hidden">
                            <thead>
                                <tr className=" text-gray-400 border-b-2 ">
                                    
                                </tr>
                            </thead>
                            <tbody className='divide-y-2'>
                                {historyproducts1.map((item,index) => (
                                    <tr key={index}>
                                        <td className="flex items-center gap-4">
                                            <Image src={item.src} alt="chair"/>
                                            <div className="flex flex-col gap-6">
                                                <p>{item.name}</p>
                                                <p className="text-gray-400">{item.price}</p>
                                            </div>                                            
                                        </td>                                                                                
                                        <td className='text-blue-400 '>View </td>
                                    </tr>                              
                                ))}      
                            </tbody>
                        </table>                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderHistory;
