import React from 'react';

const Footertop = () => {
    return (
        <div className='py-8 max-md:pb-20 h-fit desktop  max-md:w-[95%] flex flex-col gap-10 justify-center items-center '>
            <div className='max-md:text-left flex flex-col gap-2 text-left max-md:w-full w-full '>
                <div className='space-y-2'>
                    <h3 className='font-bold text-2xl text-gray-800'>
                        Online store with a wide selection of furniture and  decor
                    </h3>
                    <div>
                        <p className=' text-gray-400'>Furniture is an invariable attribute of any room. It isthey who give it the right atmosphere, making the space cozy and comfortable, creating conditons for productive work or helping to relax after a hard day. More and more often, customers want a place an order in an online store, when you can sit down at a computer in your free time arrange the furniture in the photo and calmly buy the furniture you like. The online store has a large catalog of furniture: both home and office furniture are available.</p>

                    </div>
                </div>
                <div className='space-y-2'>
                    <h3 className='font-bold text-2xl text-gray-800'>
                        Furniture production is a modern form of art
                    </h3>
                    <div>
                        <p className=' text-gray-400'>Furniture manufactures, as well as  manufactures of other home goods, are full of amazing offers: we often come across both standard mass-produced products and unique creations-furniture from professional craftsman, which will be appreciateed by true connoisseurs of beauty. We have selected for you the best  models from modern craftsmen who managed to ingeniously combine elegance, quality and practicality in each product unit. Our assortment includes products from proven companies. Who for many years of continuous joint work did</p>
                    </div>
                </div>
                <div>
                    <p className=' underline decoration-orange-500 underline-offset-4  text-black'>Read more </p>
                </div>
            </div>
        </div>
    );
}

export default Footertop;
