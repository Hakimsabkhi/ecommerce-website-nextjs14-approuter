import React from 'react';

const Payment = () => {
    return (
        <div className='flex desktop p-8 border-2 '>
            {/* first half */}
            <div className='w-[57%]'>
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
                                <p>First Name</p>
                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full block  p-2.5  " required />
                            </div>
                            <div className='flex w-[50%] flex-col gap-2'>
                                <p>Last Name</p>
                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full  block  p-2.5  " required />
                            </div>
                        </div>
                        <div className='flex flex-col w-full gap-2'>
                            <p>Street Adress</p>
                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full  block  p-2.5  " required />
                        </div>
                        <div className='flex w-full items-center gap-2'>
                            <div className='flex w-[33%] flex-col gap-2'>
                                <p>First Name</p>
                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full  block  p-2.5  " required />
                            </div>
                            <div className='flex w-[33%] flex-col gap-2'>
                                <p>First Name</p>
                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full  block  p-2.5  " required />
                            </div>
                            <div className='flex w-[33%] flex-col gap-2'>
                                <p>First Name</p>
                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full  block  p-2.5  " required />
                            </div>                            
                        </div>
                        <div className='flex items-center gap-2  w-full'>
                            <button className='w-[30%] border-2 h-9 rounded-[3px]'>
                                cancel
                            </button>
                            <button className='w-[70%] bg-orange-400 h-10 rounded-[3px] text-white'>
                                Save this address
                            </button>

                        </div>
                    </div>                    
                </div>
                {/* 2 */}
                <div>
                
                </div>

            </div>
            {/* second half */}
            <div>

            </div>
        </div>
    );
}

export default Payment;
