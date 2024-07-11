import React from 'react';
import Image from 'next/image';
import { chairpic, armchairpic, sofapic, tablepic, bedpic, storagepic, textilepic, lightingpic, toyspic, decorpic } from "../../public/image";
const categories = [
    {src: chairpic, name:"Chairs"},
    {src: tablepic, name:"tables"},
    {src: sofapic, name:"Sofas"},
    {src: armchairpic, name:"Armchairs"},
    {src: bedpic, name:"beds"},
    {src: storagepic, name:"storages"},
    {src: textilepic, name:"textiles"},
    {src: lightingpic, name:"lighting"},
    {src: toyspic, name:"toys"},
    {src: decorpic, name:"decor"},


]
const Categories = () => {
    return (
        <div className='centred flex flex-col   gap-10 py-8  '>
            <div className='flex-col flex gap-2 text-left w-full'>
                <h3 className='font-bold text-2xl text-gray-800'>
                    Our categories 
                </h3>
                <p className='text-sm text-gray-400'>Lots of new products and product collections</p>
            </div>
            <div className='gap-6  w-full  grid grid-cols-5 max-md:grid-cols-2  '>
                {categories.map((category,index) => (
                    <div key={index} className='relative w-full    '>
                        <p className=' cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white  text-black text-sm rounded-3xl px-8 py-1'>{category.name}</p>
                        <Image className='w-full' src={category.src} alt={category.name} />
                    </div>                        
                ))}                                
            </div>
        </div>
    );
}

export default Categories;

