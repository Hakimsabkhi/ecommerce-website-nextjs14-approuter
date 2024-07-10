import React from 'react';
import Image from 'next/image';
import { food1, food2, bedroom1, bedroom2, livingroom1, livingroom2, kitchen, coffe } from "../../public/image";

const Collection = () => {
    return (
        <div>
            <div className="grid p-8  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <div className="col-span-full flex flex-col items-center gap-2 ">
                    <h2 className="font-bold text-2xl">Product Collection</h2>
                    <p className="text-sm text-gray-400">Explore product collections from our vendors</p>
                </div>
                <div className="flex flex-col gap-6">
                    <Image className="h-auto w-full rounded-lg" src={food2} alt="food" />
                    <Image className="h-auto w-full rounded-lg" src={bedroom2} alt="bedroom" />
                </div>
                <div className="flex flex-col gap-6">
                    <Image className="h-auto w-full rounded-lg" src={food1} alt="food" />
                    <div className="bg-stone-300 h-full py-10 px-6 rounded-lg">
                        <h3 className="text-3xl ">GLADOM</h3>
                        <div className="text-sm text-gray-500 mt-2">
                            <p>The new common language will be more</p>
                            <p>simple and regular than the existing</p>
                            <p>languages.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6 ">
                    <Image className="h-auto w-full rounded-lg" src={coffe} alt="coffe" />
                    <Image className="h-auto w-full rounded-lg" src={bedroom1} alt="bedroom" />
                </div>
                <div className="flex flex-col gap-6">
                    <div className="bg-slate-300 h-full py-10 px-6 rounded-lg">
                        <h3 className="text-3xl ">HALLAN</h3>
                        <div className="text-sm text-gray-400 mt-2">
                            <p>The new common language will be more</p>
                            <p>simple and regular than the existing</p>
                            <p>languages.</p>
                        </div>
                    </div>
                    <Image className="h-auto w-full rounded-lg" src={livingroom1} alt="livingroom" />
                </div>
                <div className="flex flex-col gap-6">
                    <Image className="h-auto w-full rounded-lg" src={kitchen} alt="kitchen" />
                    <Image className="h-auto w-full rounded-lg" src={livingroom2} alt="livingroom" />
                </div>
            </div>
        </div>
    );
}

export default Collection;

