import React from 'react';
import Image from 'next/image';
import { chairpic, armchairpic, sofapic, tablepic, bedpic, storagepic, textilepic, lightingpic, toyspic, decorpic } from "../../public/image";

const Categories = () => {
    return (
        <div className='centred flex flex-col   gap-10 py-8  '>
            <div className='flex-col flex gap-2 text-left w-full'>
                <h3 className='font-bold text-2xl text-gray-800'>
                    Our categories
                </h3>
                <p className='text-sm text-gray-400'>Lots of new products and product collections</p>
            </div>
            <div className='gap-6  w-full justify-center items-center grid grid-cols-5 max-md:grid-cols-2  '>
                <div className='relative w-full    '>
                    <p className=' absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white  text-black text-sm rounded-3xl px-8 py-1'>Chairs</p>
                    <Image className='w-full' src={chairpic} alt="chair" />
                </div>
                <div className='relative w-full  '>
                    <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black text-sm rounded-3xl px-8 py-1'>Tables</p>
                    <Image className='w-full' src={tablepic} alt="table" />
                </div>
                <div className='relative w-full '>
                    <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black text-sm rounded-3xl px-8 py-1'>Sofas</p>
                    <Image className='w-full' src={sofapic} alt="sofa" />
                </div>
                <div className='relative w-full  '>
                    <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black text-sm rounded-3xl px-3 py-1'>Armchairs</p>
                    <Image className='w-full' src={armchairpic} alt="armchair" />
                </div>
                <div className='relative w-full   '>
                    <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black text-sm rounded-3xl px-8 py-1'>Beds</p>
                    <Image className='w-full' src={bedpic} alt="bed" />
                </div>
                <div className='relative w-full  '>
                    <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black text-sm rounded-3xl px-6 py-1'>Storage</p>
                    <Image className='w-full' src={storagepic} alt="storage" />
                </div>
                <div className='relative w-full  '>
                    <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black text-sm rounded-3xl px-8 py-1'>Textiles</p>
                    <Image className='w-full' src={textilepic} alt="textile" />
                </div>
                <div className='relative w-full  '>
                    <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black text-sm rounded-3xl px-8 py-1'>Lighting</p>
                    <Image className='w-full' src={lightingpic} alt="lighting" />
                </div>
                <div className='relative w-full  '>
                    <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black text-sm rounded-3xl px-8 py-1'>Toys</p>
                    <Image className='w-full' src={toyspic} alt="toys" />
                </div>
                <div className='relative w-full  '>
                    <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black text-sm rounded-3xl px-8 py-1'>Decor</p>
                    <Image className='w-full' src={decorpic} alt="decor" />
                </div>
            </div>
        </div>
    );
}

export default Categories;

