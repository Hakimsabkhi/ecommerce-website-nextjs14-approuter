import React from 'react';
import Image from 'next/image';
interface Product {
    _id: string;
    name: string;
    description: string;
    ref: string;
    price: number;
    imageUrl?: string;
    brand?: Brand; // Make brand optional
    stock: number;
    discount?: number;
    color?: string;
    material?: string;
    status?: string;
  }
  
  interface Brand {
    _id: string;
    place:string;
    name: string;
    imageUrl:string;
  }

const SecondBlock: React.FC<{ product: Product | null }> = ({ product }) => {
    return (
        <main className=' desktop max-lg:w-[95%] my-10 bg-white rounded-lg  flex max-lg:flex-col  justify-between '>
            {product?
                (
            <div className="w-[50%] max-lg:w-full  flex flex-col justify-between px-4">
                <div>
                    <p className="text-xl">Product details</p>
                    <p className="text-[#525566] text-sm">Made possible by exploring innovative molded plywood techniques, Iskos-Berlin’s Soft Edge Chair blends strong curves with extreme lightness to create a three-dimensionality not usually possible with 2-D plywood.</p>
                </div>
                
                    <div>
                        <div className="flex items-center justify-between border-b-2 pb-3 ">
                            <p>Brand</p>
                            <p className="text-[#525566]">{product.brand?.name}</p>
                        </div>
                        <div className="flex items-center justify-between border-b-2 py-3 ">
                            <p>Collection</p>
                            <p className="text-[#525566]">Soft Edge Collection</p>
                        </div>
                        <div className="flex items-center justify-between border-b-2 py-3 ">
                            <p>Color</p>
                            <p className="text-[#525566]">{product.color}</p>
                        </div>
                        <div className="flex items-center justify-between border-b-2 py-3 ">
                            <p>Materials</p>
                            <p className="text-[#525566]">{product.material}</p>
                        </div>
                        <div className="flex items-center justify-between border-b-2 py-3 ">
                            <p>General dimensions</p>
                            <p className="text-[#525566]">32” H 21” W 19” D</p>
                        </div>                    
                        <div className="flex items-center justify-between border-b-2 py-3 ">
                            <p>Product weight</p>
                            <p className="text-[#525566]">20.72 lbs</p>
                        </div>
                        <div className="flex items-center justify-between border-b-2 py-3 ">
                            <p>Box dimensions</p>
                            <p className="text-[#525566]">37” H 21” W 24” D</p>
                        </div>
                        <div className="flex items-center justify-between border-b-2 py-3 ">
                            <p>Assembly</p>
                            <p className="text-[#525566]">20.72 lbs</p>
                        </div>
                        <div className="flex items-center justify-between  py-3 ">
                            <p>Warranty</p>
                            <p className="text-[#525566]">36 Month</p>
                        </div>
                    </div>
                
            </div>
            ):
            (<div className="h-full max-lg:h-[504px]"></div>)
        }
            <div className='w-[50%] max-lg:w-full h-[504px] flex flex-col gap-10 px-4'>
                <p className="text-xl">Description</p>
             {/*    <Image src={product.description} width={500} height={500} alt="description" /> */}
                <p className="text-[#525566]">The company reinterprets tradition by calling upon international designers to work with them and developing new technologies and materials to guarantee innovative and surprising results. Passion is the engine that drives the brand – together with its renowned creatives and high-profile collaborators – to search for original solutions using advanced materials, methods, tools, and technologies.</p>
                <ul>
                    <li className=' text-[#525566]'>Choose items in a single color scheme and style</li>
                    <li className=' text-[#525566]'>Consider the area of the room</li>
                    <li className=' text-[#525566]'>Do not buy unnecessary pieces of furniture</li>
                </ul>
            </div>
            
        </main>
    );
}

export default SecondBlock;