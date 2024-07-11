import React from 'react';
import Image from 'next/image';
import { mackay, steak1, bathroom, office, resto, share, comment, resto1, office1, livingroom4, livingroom5 } from "../../public/image";
const items =[
    {src: steak1, date:"Decoration / 26 May 2023", title: "In the heart of Valencia", text: "As an alternative theory, (and because latin scholars do this sort of thing) someone tracked down a ..." },
    {src: bathroom, date:"Furniture / 09 May 2023", title: "Ethimo mountain style", text: "So how did the classical latin become so incohere,t? According to McClintock, a 15th century typeset.." },
    {src: office, date:"Wooden accessories / 30 Apr 2023", title: "For clear thinking", text: "The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-tr..." },
    {src: resto, date:"Furniture / 28 Mar 2023", titlexl: "Expands furniture resources", text: "As an alternative theory, (and because latin scholars do this sort of thing) someone tracked down a ..." },
    {src: resto1, date:"design trends / 18 Apr 2023", title: "The clean series", text: "So when is it okey to use lorem ipsum? first, lorem ipsum works well for staging. It's like the prop..." },
    {src: office1, date:"Inspiration / 26 May 2023", title: "here comes autumn", text: "The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-tr..." },
    {src: livingroom4, date:"Decoration / 03 Apr 2023", title: "luxury bed now available", text: "As an alternative theory, (and because latin scholars do this sort of thing) someone tracked down a ..." },
    {src: livingroom5, date:"Furniture / 28 Mar 2023", titlexl: "Expands furniture resources", text: "So how did the classical latin become so incohere,t? According to McClintock, a 15th century typeset.." }
]
const Blog = () => {
    return (
        <div className=' py-8 w-full items-center flex justify-center '>
            <div className='grid grid-cols-4 gap-8  max-md:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 '>
                {items.map((item,index) =>(
                <div key={index} className='flex flex-col justify-center items-center w-[322px]  '>
                    <div className="relative justify-center w-[322px] flex ">
                        <div className="absolute flex items-center justify-between w-[95%] bottom-1">
                            <div className='flex gap-2 items-center'>
                                <Image className='w-5 h-5' src={mackay} alt="person" />
                                <p className='text-white'>Mr.mackay</p>
                            </div>
                            <div className='flex gap-2'>
                                <Image src={share} alt="share" />
                                <Image src={comment} alt="comment" />
                            </div>
                        </div>
                        <Image className='rounded-t-lg w-[322px] ' src={item.src} alt="steak" />
                    </div>
                    <div className='flex flex-col rounded-b-lg gap-2  bg-white w-[322px]  h-[214px] pl-2  '>
                        <p className="text-gray-400">{item.date}</p>
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-2">
                                <p className="text-gray-700  text-xl font-bold">{item.titlexl}</p>                                                                                            
                                <p className="text-gray-700  text-2xl font-bold">{item.title}</p>
                                <p className="text-gray-400">{item.text} </p>
                            </div>
                            <p className="text-orange-800">Continue reading</p>
                        </div>
                    </div>
                </div>
            ))}                                                       
            </div>
        </div>
    );
}

export default Blog;