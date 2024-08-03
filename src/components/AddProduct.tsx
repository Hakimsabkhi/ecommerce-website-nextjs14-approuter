import React from 'react';

const AddProduct = () => {
    return (
        <div className='mx-auto w-[70%] max-lg:w-[90%] py-8 max-lg:pt-20 flex flex-col gap-8 '>
            <p className='text-3xl font-bold'>ADD New product</p>
            <div className='flex max-lg:flex-col items-center gap-2 max-lg:gap-8 '>
                <div className='flex items-center w-[40%] max-lg:w-full max-lg:justify-between gap-2'>
                    <p className="text-xl font-bold">Name *</p>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[80%]  block  p-2.5  " required />
                </div>
                <div className='flex items-center w-[30%] max-lg:w-full max-lg:justify-between gap-2'>
                    <p className="text-xl font-bold">Upload Image *</p>
                    <button className='bg-[#EFEFEF] text-white rounded-md w-[50%] h-10 border-2'>
                        <p className="text-black">
                            Select an Image
                        </p>
                    </button>
                </div>
                <div className='flex items-center w-[30%] max-lg:w-full max-lg:justify-between gap-4'>
                    <p className="text-xl font-bold">Category *</p>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[60%]  block  p-2.5  " required />
                </div>
            </div>
            <div className='flex max-lg:flex-col items-center max-lg:gap-8 justify-between '>
                <div className='flex items-center w-[30%] max-lg:w-full max-lg:justify-between gap-4'>
                    <p className="text-xl font-bold">Quantitiy *</p>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[60%]  block  p-2.5  " required />
                </div>
                <div className='flex items-center w-[30%] max-lg:w-full max-lg:justify-between gap-4'>
                    <p className="text-xl font-bold">Ref *</p>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[60%]  block  p-2.5  " required />
                </div>
                <div className='flex items-center w-[30%] max-lg:w-full max-lg:justify-between gap-4'>
                    <p className="text-xl font-bold">Price *</p>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[60%]  block  p-2.5  " required />
                </div>
                <div className='flex items-center w-[30%] max-lg:w-full max-lg:justify-between gap-4'>
                    <p className="text-xl font-bold">Discount *</p>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[60%]  block  p-2.5  " required />
                </div>
            </div>
            <div className='flex items-center w-full  gap-4'>
                <p className="text-xl font-bold">Description</p>
                <textarea className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full  block  p-2.5  " required />
            </div>
            <div className="w-full flex justify-end">
                <button className='bg-orange-400 text-white rounded-md w-[20%] max-lg:w-[50%] h-10 '>
                    <p className="text-white">
                        Add the new product
                    </p>
                </button>
            </div>
        </div>
    );
}

export default AddProduct;
