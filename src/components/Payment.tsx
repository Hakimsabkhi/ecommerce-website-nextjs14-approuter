"use client";
import React from 'react';

const Payment = () => {
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted');
    };

    return (
        <form onSubmit={handleSubmit} className='flex desktop max-lg:w-[90%] p-8 border-2 gap-20 max-lg:flex-col'>
            {/* first half */}
            <div className='w-[70%] max-lg:w-full flex flex-col gap-10'>
                {/* 1 */}
                <div className="flex flex-col gap-4">
                    <p className="text-3xl font-bold">Shipping Address</p>
                    <div className='p-4 border-2 flex flex-col gap-4 border-blue-500'>
                        <div className='flex items-center gap-2'>
                            <input
                                type="radio"
                                className="form-radio text-blue-600 h-4 w-4"
                            />
                            <p>Add new Address</p>
                        </div>
                        <div className="flex items-center w-full gap-2">
                            <div className='flex w-[50%] flex-col gap-2'>
                                <label htmlFor="firstName">First Name</label>
                                <input id="firstName" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full block p-2.5" required />
                            </div>
                            <div className='flex w-[50%] flex-col gap-2'>
                                <label htmlFor="lastName">Last Name</label>
                                <input id="lastName" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full block p-2.5" required />
                            </div>
                        </div>
                        <div className='flex flex-col w-full gap-2'>
                            <label htmlFor="streetAddress">Street Address</label>
                            <input id="streetAddress" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full block p-2.5" required />
                        </div>
                        <div className='flex w-full items-center gap-2'>
                            <div className='flex w-[33%] flex-col gap-2'>
                                <label htmlFor="aptNumber">Apt Number</label>
                                <input id="aptNumber" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full block p-2.5" required />
                            </div>
                            <div className='flex w-[33%] flex-col gap-2'>
                                <label htmlFor="state">State</label>
                                <input id="state" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full block p-2.5" required />
                            </div>
                            <div className='flex w-[33%] flex-col gap-2'>
                                <label htmlFor="zip">Zip</label>
                                <input id="zip" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full block p-2.5" required />
                            </div>
                        </div>
                        <div className='flex items-center gap-2 w-full'>
                            <button type="button" className='w-[30%] border-2 h-9 rounded-[3px]'>
                                Cancel
                            </button>
                            <button type="submit" className='w-[70%] bg-orange-400 h-10 rounded-[3px] text-white'>
                                Save this address
                            </button>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="flex flex-col gap-4">
                    <p className="text-3xl font-bold">Payment Method</p>
                    <div className='p-4 border-2 flex flex-col gap-4 border-blue-500'>
                        <div className='flex items-center gap-2'>
                            <input
                                type="radio"
                                className="form-radio text-blue-600 h-4 w-4"
                            />
                            <p>Credit or Debit card</p>
                        </div>
                        <div className="flex items-center w-full gap-2">
                            <div className='w-full relative'>
                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full block p-2.5" required />
                                <button className='rounded-md absolute w-10 h-9 text-white bg-blue-500 top-1/2 right-1 transform -translate-y-1/2'>
                                    Visa
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='flex gap-2 items-center'>
                                <input id="saveCard" type="checkbox" className="w-5 h-5 rounded bg-gray-400" />
                                <label htmlFor="saveCard">Save this credit card for later use</label>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <input id="billingSame" type="checkbox" className="w-5 h-5 rounded bg-gray-400" />
                                <label htmlFor="billingSame">Billing address same as shipping address</label>
                            </div>
                        </div>
                        <div className='flex w-full items-center gap-2'>
                            <div className='flex w-[33%] flex-col gap-2'>
                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full block p-2.5" required />
                            </div>
                            <div className='flex w-[33%] flex-col gap-2'>
                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full block p-2.5" required />
                            </div>
                            <div className='flex w-[33%] flex-col gap-2'>
                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full block p-2.5" required />
                            </div>
                        </div>
                        <div className='flex flex-col w-full gap-2'>
                            <label htmlFor="billingStreetAddress">Street Address</label>
                            <input id="billingStreetAddress" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full block p-2.5" required />
                        </div>
                        <div className='flex w-full items-center gap-2'>
                            <div className='flex w-[33%] flex-col gap-2'>
                                <label htmlFor="billingAptNumber">Apt number</label>
                                <input id="billingAptNumber" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full block p-2.5" required />
                            </div>
                            <div className='flex w-[33%] flex-col gap-2'>
                                <label htmlFor="billingState">State</label>
                                <input id="billingState" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full block p-2.5" required />
                            </div>
                            <div className='flex w-[33%] flex-col gap-2'>
                                <label htmlFor="billingZip">Zip</label>
                                <input id="billingZip" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full block p-2.5" required />
                            </div>
                        </div>
                        <div className='flex items-center gap-2 w-full'>
                            <button type="button" className='w-[30%] border-2 h-9 rounded-[3px]'>
                                Cancel
                            </button>
                            <button type="submit" className='w-[70%] bg-orange-400 h-10 rounded-[3px] text-white'>
                                Save this address
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* second half */}
            <div className='w-[30%] max-lg:w-full'>
                <div className='w-full bg-[#EFEFEF] rounded-lg flex flex-col items-center justify-center py-10 px-4 gap-4'>
                    <button type="submit" className="bg-orange-400 text-white w-full h-10 rounded-md text-xl">Place Order</button>
                    <p className="text-gray-400 flex flex-wrap gap-1">By placing your order, you agree to our company Privacy policy and Conditions of use</p>
                    <div className="flex flex-col gap-4 border-y-2 border-gray-500 py-4 w-full">
                        <p className="text-2xl">Shipping Address</p>
                        <div className="text-gray-400 flex justify-between">
                            <p>Item (3)</p>
                            <p>65.73</p>
                        </div>
                        <div className="text-gray-400 flex justify-between">
                            <p>Shipping and Handling</p>
                            <p>5.50</p>
                        </div>
                        <div className="text-gray-400 flex justify-between">
                            <p>Before Tax</p>
                            <p>62.23</p>
                        </div>
                        <div className="text-gray-400 flex justify-between">
                            <p>Tax Collected</p>
                            <p>8.21</p>
                        </div>
                    </div>
                    <div className="flex justify-between w-full">
                        <p className="text-2xl">Order Total:</p>
                        <p>70.44</p>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Payment;
