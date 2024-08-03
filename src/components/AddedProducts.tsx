import React from 'react';
import { addedproducts } from "../../public/data";
const AddedProducts = () => {
    return (
        <div className='mx-auto w-[70%] py-8 flex flex-col gap-8 '>
            <div className="flex items-center justify-between">
                <p className='text-3xl font-bold'>ALL categories</p>
                <button className='bg-orange-400 text-white rounded-lg w-[15%] h-10'>
                    <p className=''>
                        Add the new category
                    </p>
                </button>
            </div>
            <div className="flex flex-col gap-4">
                <div className='flex items-center gap-44 text-xl'>
                    <p >
                        ID
                    </p>
                    <p className=''>
                        Ref
                    </p>
                    <p>
                        Name
                    </p>
                    <p>
                        ImageURL
                    </p>
                    <p>
                        Created by
                    </p>
                </div>
                <div className="flex flex-col gap-0.5">
                    {addedproducts.map((item,index) => (
                        <div key={index} className='flex gap-0.5'>                            
                            <div className='bg-[#15335D] h-16 w-[20%] flex text-left items-center '>
                                <p className=' px-4 py-2 text-white'>{item.ref}</p>
                            </div>
                            <div className='bg-[#15335D] h-16 w-[20%] flex text-left items-center '>
                                <p className=' px-4 py-2 text-white'>{item.name}</p>
                            </div>
                            <div className='bg-[#15335D] h-16 w-[20%] flex text-left items-center '>
                                <p className=' px-4 py-2 text-white'>{item.name}</p>
                            </div>
                            <div className='bg-[#15335D] h-16 w-[30%]  flex justify-center items-center'>
                                <p className=' px-4 py-2 text-white'>{item.imageurl}</p>
                            </div>
                            <div className='bg-[#15335D] h-16 w-[50%] flex items-center justify-between pr-2 '>
                                <p className=' px-4 py-2 text-white text-left'>{item.createdby}</p>
                                <div className="flex items-center gap-1 text-right text-white">
                                    <button className="bg-orange-400 w-28 h-14 rounded-md items-center">
                                        <p className="">Modify</p>
                                    </button>
                                    <button className="bg-orange-400 w-28 h-14 rounded-md items-center">
                                        <p className="">Delete</p>
                                    </button>
                                </div>
                            </div>                        
                        </div>                                 
                    ))}           
                </div>
            </div>
        </div>
    );
}

export default AddedProducts;
