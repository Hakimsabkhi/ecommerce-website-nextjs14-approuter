"use client"
import { useSession } from 'next-auth/react';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';


const ModifyCategory = () => {
    const params = useParams();
    

    return (
        <div className='mx-auto w-[70%] max-xl:w-[90%] py-8 max-lg:pt-20 flex flex-col gap-8'>
            <p className='text-3xl font-bold'>Modfiy</p>
            <form  className='flex max-lg:flex-col max-lg:gap-4 lg:items-center gap-4'>
                <div className='flex items-center w-[40%] max-lg:w-full gap-6 justify-between'>
                    <p className="text-xl max-lg:text-base font-bold">Name*</p>
                    <input
                        type="text"
                        
                        
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[80%] block p-2.5"
                        required
                    />
                </div>
                <div className='flex items-center w-[30%] max-lg:w-full justify-between'>
                    <p className="max-lg:text-base font-bold">Upload Image*</p>
                    <input
                        type="file"
                        accept="image/*"
                        
                        className="hidden"
                        id="upload-image"
                    />
                    <label
                        htmlFor="upload-image"
                        className='bg-[#EFEFEF] max-xl:text-xs text-black rounded-md w-[50%] h-10 border-2 flex items-center justify-center cursor-pointer'
                    >
                        Select an Image
                    </label>                                   
                </div>
               
                <div className="w-[20%] max-xl:w-[30%] max-md:w-[50%] items-start">
                    <button type="submit" className='bg-orange-400 text-white rounded-md w-full h-10' >
                        <p className="text-white">Modify</p>
                    </button>
                </div>
            </form>
            
        </div>
    );
}

export default ModifyCategory;
