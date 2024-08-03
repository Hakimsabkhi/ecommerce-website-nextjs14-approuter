import React from 'react';

const AddCategory = () => {
    return (
        <div className='mx-auto w-[70%] py-8 flex flex-col gap-8 '>
            <p className='text-3xl font-bold'>ADD categories</p>
            <div className='flex items-center justify-between '>
                <div className='flex items-center w-[40%]  justify-between'>
                    <p className="text-xl font-bold">Name *</p>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[80%]  block  p-2.5  "  required />
                </div>
                <div className='flex items-center w-[30%]  justify-between'>
                    <p className="text-xl font-bold">Upload Image *</p>  
                    <button className='bg-[#EFEFEF] text-white rounded-md w-[50%] h-10 border-2'>
                        <p className="text-black">
                            Select an Image
                        </p>    
                    </button>                  
                </div>
                <div className="w-[20%]">
                    <button className='bg-orange-400 text-white rounded-md w-full h-10 '>
                        <p className="text-white">
                            Add the new category
                        </p>    
                    </button>
                </div>



            </div>
        </div>
    );
}

export default AddCategory;
