import React from 'react';

const AddCategory = () => {
    return (
        <div className='mx-auto w-[70%] max-xl:w-[90%]  py-8 max-lg:pt-20 flex flex-col gap-8 '>
            <p className='text-3xl font-bold'>ADD categories</p>
            <div className='flex max-lg:flex-col max-lg:gap-4 lg:items-center  gap-4 '>
                <div className='flex items-center w-[40%] max-lg:w-full gap-6  justify-between'>
                    <p className="text-xl max-lg:text-base font-bold">Name*</p>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[80%]  block  p-2.5  "  required />
                </div>
                <div className='flex items-center w-[30%] max-lg:w-full  justify-between'>
                    <p className=" max-lg:text-base font-bold">Upload Image*</p>  
                    <button className='bg-[#EFEFEF] max-xl:text-xs  text-black rounded-md w-[50%] h-10 border-2'>                        
                            Select an Image                            
                    </button>                  
                </div>
                <div className="w-[20%]  max-xl:w-[30%] max-md:w-[50%] items-start ">
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
