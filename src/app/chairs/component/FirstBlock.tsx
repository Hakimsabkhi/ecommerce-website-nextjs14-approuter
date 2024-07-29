import React from 'react';
import Image from 'next/image';
import { twibble1, twibble2, twibble3, twibble4 } from '../../../../public/image';
import {ProductType} from '../../../../public/data'; // Ensure the path is correct

const FirstBlock: React.FC<{ product: ProductType }> = ({ product }) => {
    return (
        <main>
            <div className="w-full bg-white py-10">
                <div className="flex gap-2">
                    <Image src={twibble1} alt='twibble' />
                    <div className="flex flex-col gap-2">
                        <Image src={twibble2} alt='twibble' />
                        <Image src={twibble3} alt='twibble' />
                        <Image src={twibble4} alt='twibble' />
                    </div>                    
                </div>
                <div>
                    <p>{product.name}</p>
                    <p>Type: {product.type}</p>
                </div>
            </div>
        </main>
    );
}

export default FirstBlock;
