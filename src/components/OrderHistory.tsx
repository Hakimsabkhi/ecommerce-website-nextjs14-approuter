"use client"
import React, { useEffect, useState } from 'react';
import { historyproducts1 } from '@/assets/data';
import Image from 'next/image';
interface Address {
    _id: string;
    governorate: string;
    city: string;
    zipcode: string;
    address: string;
  }
  
  interface OrderItem {
    _id: string;
    product: string;
    name: string;
    quantity: number;
    image: string;
    discount: number;
    price: number;
  }
  
  interface Order {
    _id: string;
    user: string;
    ref: string;
    address: Address;
    orderItems: OrderItem[];
    paymentMethod: string;
    total: number;
    orderStatus: string;
    createdAt:string;
  }
const OrderHistory = () => {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
      const fetchOrders = async () => {
        try {
          const response = await fetch("/api/order/getoderbyuser");
          if (!response.ok) {
            throw new Error("Failed to fetch orders");
          }
          const data: Order[] = await response.json();
          setOrders(data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchOrders();
    }, []);
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      };
    return (
        <div className='w-full py-20 flex justify-center'>
            <div className='w-[80%] max-lg:w-[95%] rounded-lg p-8 border-2 flex flex-col gap-2 '>
                <div className='max-md:flex-col max-md:flex max-md:items-center '>
                    <p className="text-2xl font-bold">Order HISTORY</p>
                    <p className="text-gray-400 text-sm max-md:text-center">Check the status of recent orders, manage returns, and download invoices</p>                    
                </div>
                {orders.map((order) => (  <div className='flex flex-col gap-4'>
                    <div className="flex flex-col gap-4">
                        <div className="bg-[#EFEFEF] rounded-lg p-6 justify-between flex max-md:flex-col max-md:items-center max-md:gap-4">
                            <div className="max-md:flex max-md:justify-between max-md:w-full">
                                <p>Date Order</p>
                                <p>{formatDate(order.createdAt)}</p>
                            </div>
                            <div className="max-md:flex max-md:justify-between max-md:w-full">
                                <p>Order number</p>
                                <p>{order.ref}</p>
                            </div>
                            <div className="max-md:flex max-md:justify-between max-md:w-full">
                                <p>Total amount</p>
                                <p>{order.total} TND</p>
                            </div>
                            <button className='bg-[#F7F7F7] border-2 h-10 w-[15%] max-md:w-full rounded-lg '>View Invoice</button>
                        </div>
                        <table className="table-auto w-full max-md:hidden">
                            <thead>
                                <tr className=" bg-slate-400 text-gray-400 border-b-2 ">
                                    <th className='text-start py-3'>Product</th>
                                    <th className='text-center py-3'>Price</th>
                                    <th className='text-center py-3'>quantity</th>
                                    <th className='text-center py-3'>Status</th>
                                   
                                </tr>
                            </thead>
                            <tbody className='divide-y-2'>
                                {order.orderItems.map((item,index) => (
                                    <tr key={index}>
                                        <td className="flex items-center gap-4">
                                            <Image alt={item.name}src={item.image} width={100} height={100}/>
                                            <p>{item.name}</p>
                                        </td>
                                        <td className='text-gray-400 text-center'>  {item.discount > 0 ? (
    <>
      {(item.price - (item.price * item.discount) / 100).toFixed(2)} TND
      <span className="text-red-500"> (Discounted)</span>
    </>
  ) : (
    `${item.price.toFixed(2)} TND`
  )}</td>
                                        <td className='text-gray-400 text-center'>{item.quantity}</td>
                                        <td className='text-gray-400 text-center'>{order.orderStatus}</td>
                                      
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
               
                </div> ))}
            </div>
        </div>
    );
}

export default OrderHistory;
