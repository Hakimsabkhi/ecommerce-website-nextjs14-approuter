import React from 'react';
import Image from "next/image";
import {tshirt,carttable1,carttable2,cartlighting} from "@/assets/image";
import { FaRegTrashAlt } from "react-icons/fa";
const CartModal = () => {
    return (
        <div className="absolute p-4  bg-white top-12 shadow-xl rounded-lg right-[-300%] max-lg:right-[-200%] w-[500px] max-md:w-[360px] max-md:right-[-100%]  flex gap-2 flex-col z-30 ">
            <div className="flex items-center justify-between">
                <Image className="max-md:w-[69px] max-md:h-[51px]" src={carttable1} alt="T" />
                <div className="text-black flex-col flex gap-2">
                    <p className="text-xl max-md:text-sm font-bold">Basic tee 6-pack</p>
                    <div className="text-gray-400 text-xs flex flex-col max-md:hidden gap-1">
                        <p>Size:XXS</p>
                        <p>Basic Tee 6pack</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <span className="text-black p-4 w-20 flex items-center justify-center  bg-opacity-40 rounded-lg border-2 border-gray-400 bg-[#959595]">1</span>
                    <FaRegTrashAlt size={25} className="text-black" />                        
                </div>
            </div>            
            <div className="flex items-center justify-between">
                <Image className="max-md:w-[69px] max-md:h-[51px]" src={carttable2} alt="T" />
                <div className="text-black flex-col flex gap-2">
                    <p className="text-xl max-md:text-sm font-bold">Basic tee 6-pack</p>
                    <div className="text-gray-400 text-xs max-md:hidden flex flex-col gap-1">
                        <p>Size:XXS</p>
                        <p>Basic Tee 6pack</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <span className="text-black p-4 w-20 flex items-center justify-center  bg-opacity-40 rounded-lg border-2 border-gray-400 bg-[#959595]">1</span>
                    <FaRegTrashAlt size={25} className="text-black" />                        
                </div>
            </div>
            <div className="flex items-center justify-between">
                <Image className="max-md:w-[69px] max-md:h-[51px]" src={cartlighting} alt="T" />
                <div className="text-black flex-col flex gap-2">
                    <p className="text-xl max-md:text-sm font-bold">Basic tee 6-pack</p>
                    <div className="text-gray-400 text-xs max-md:hidden flex flex-col gap-1">
                        <p>Size:XXS</p>
                        <p>Basic Tee 6pack</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <span className="text-black p-4 w-20 flex items-center justify-center  bg-opacity-40 rounded-lg border-2 border-gray-400 bg-[#959595]">1</span>
                    <FaRegTrashAlt size={25} className="text-black" />                        
                </div>
            </div>
            <button className='w-full h-10 rounded-lg border-2 border-black flex items-center justify-center'>
                <p className='p-4 text-xl text-black'>
                    View my cart (3)
                </p>
            </button>
            <button className='w-full h-10 rounded-lg  flex items-center justify-center bg-orange-400 hover:bg-[#15335D]'>
                <p className='p-4 text-xl '>
                    Checkout
                </p>
            </button>
            <p className='w-full text-center text-black underline '>Continue shopping</p>

        </div>
        
    );
}

export default CartModal;
