import React from 'react';
import Image from 'next/image';
import { aboutbrand,facebook,linkedin,pinterest,aboutchair,abouttable,aboutarmchair,aboutstorage, } from '../../../public/image';
import {Product} from '../../../public/data'; // Ensure the path is correct

const ThirdBlock: React.FC<{ product: Product }> = ({ product }) => {
    return (
        <main className=' desktop max-lg:w-[95%] my-10 bg-white rounded-lg flex max-lg:flex-col justify-between '>
            <div className="w-[50%] max-lg:w-full flex flex-col justify-between gap-4 p-4">
                <div>
                    <p className="text-xl ">About brand</p>                                        
                </div>
                <div>
                    <Image src={aboutbrand} alt="aboutbrand"  />
                </div>
            </div>
            <div className='w-[50%] max-lg:w-full flex flex-col gap-8 p-4 justify-center'>
                <div className="flex max-md:flex-col items-center justify-between">
                    <p className="text-3xl  uppercase">{product.brand}</p>
                    <div className="flex items-center gap-3">
                        <p className="text-gray-400">Share:</p>    
                        <Image src={facebook} alt="facebook"  />    
                        <Image src={linkedin} alt="linkedin"  />    
                        <Image src={pinterest} alt="pinterest"  />
                        <p className="text-white bg-orange-400 px-6 py-2 rounded-md font-bold max-md:text-xs">contact us</p>    
                    </div>                    
                </div>
                <p>Valencia/Spain</p>
                <p className="text-gray-400">The company reinterprets tradition by calling upon international designers to work with them and developing new technologies and materials to guarantee innovative and surprising results. Passion is the engine that drives the brand – together with its renowned creatives and high-profile collaborators – to search for original solutions using advanced materials, methods, tools, and technologies.</p>
                <div className="flex items-center justify-around">
                    <div className="w-20 h-20 rounded-full bg-orange-200 flex items-center justify-center">
                        <Image  src={aboutchair} alt="pinterest"  />
                    </div>
                    <div className="w-20 h-20 rounded-full bg-orange-200 flex items-center justify-center">
                        <Image  src={abouttable} alt="pinterest"  />
                    </div>
                    <div className="w-20 h-20 rounded-full bg-orange-200 flex items-center justify-center">
                        <Image  src={aboutarmchair} alt="pinterest"  />
                    </div>
                    <div className="w-20 h-20 rounded-full bg-orange-200 flex items-center justify-center">
                        <Image  src={aboutstorage} alt="pinterest"  />
                    </div>
                </div>
                <p className="text-gray-400">Nordic design inspires HAY's taste for clean lines, simple geometric shapes, and quality materials like wood, metal, and textiles. Anyway, you still use Lorem Ipsum and rightly so, as it will always have a place in the web workers toolbox.</p>
            </div>
            
        </main>
    );
}

export default ThirdBlock;
