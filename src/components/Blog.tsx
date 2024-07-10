import React from 'react';
import Image from 'next/image';
import { mackay, steak, bathroom, office, resto, share, comment, resto1, office1, livingroom4, livingroom5 } from "../../public/image";

const Blog = () => {
    return (
        <div className='gap-12 py-8  w-full justify-center items-center flex-col flex max-md:gap-6'>
            <div className='flex items-center w-4/5 justify-between gap-6 max-md:flex-col'>
                <div className='relative max-md:relative group '>
                        <div className='absolute flex gap-1 items-center top-48  left-1'>
                            <Image className='w-5  ' src={mackay} alt="person" />
                            <p className='text-sm text-white'>Mr.mackay</p>
                        </div>
                        <div className='absolute flex gap-2  items-center justify-center top-48 right-2'>
                            <Image src={share} alt="share" />
                            <Image src={comment} alt="comment" />
                        </div>
                        <div className='absolute px-1   flex-col space-y-2  items-center bottom-20 left-1'>
                            <p className='text-sm text-gray-400'>Decoration / 26 May 2023</p>
                            <div>
                                <p className='text-2xl font-bold text-gray-700'>in the heart of valencia</p>
                            </div>
                            <div>
                                <p className=' text-gray-400'>As an alternative theory,(and because</p>
                                <p className=' text-gray-400'>Latin scholars do this sort of thing)</p>
                                <p className=' text-gray-400'>someone tracked down a...</p>
                            </div>
                        </div>
                        <div className='absolute flex px-1 mt-7 items-center bottom-4 left-1'>
                            <p className='  text-orange-800'>Continue reading</p>
                        </div>
                    <Image className='w-[340px]' src={steak} alt="food" />
                </div>
                <div className='relative'>
                    <div className='absolute flex gap-1 items-center top-48 left-1'>
                        <Image className='w-5' src={mackay} alt="person" />
                        <p className='text-sm text-white'>Mr.mackay</p>
                    </div>
                    <div className='absolute flex gap-2  items-center justify-center top-48 right-2'>
                        <Image src={share} alt="share" />
                        <Image src={comment} alt="comment" />
                    </div>
                    <div className='absolute px-1  flex-col space-y-2  items-center bottom-20 left-1'>
                        <p className='text-sm text-gray-400'>Furniture / 09 May 2023</p>
                        <div>
                            <p className='text-2xl font-bold text-gray-700'>Ethimo mountain style</p>
                        </div>
                        <div>
                            <p className=' text-gray-400'>So how did the classical Latin</p>
                            <p className=' text-gray-400'>become so incoherent? a 15th</p>
                            <p className=' text-gray-400'>century typeetter...</p>
                        </div>
                    </div>
                    <div className='absolute flex px-1 mt-7 items-center bottom-4 left-1'>
                        <p className='  text-orange-800'>Continue reading</p>
                    </div>
                    <Image className='w-[340px]' src={bathroom} alt="bathroom" />
                </div>
                <div className='relative'>
                    <div className='absolute flex gap-1 items-center top-48 left-1'>
                        <Image className='w-5' src={mackay} alt="person" />
                        <p className='text-sm text-white'>Mr.mackay</p>
                    </div>
                    <div className='absolute flex gap-2  items-center justify-center top-48 right-2'>
                        <Image src={share} alt="share" />
                        <Image src={comment} alt="comment" />
                    </div>
                    <div className='absolute flex px-1  items-center top-48 left-1'>

                    </div>
                    <div className='absolute flex px-1  items-center top-60 left-1'>

                    </div>
                    <div className='absolute px-1  flex-coll space-y-2  items-center bottom-20 left-1'>
                        <p className='text-sm text-gray-400'>Wooden accesssories / 30 Apr 2023</p>
                        <div>
                            <p className='text-2xl font-bold text-gray-700'>For clear thinking</p>
                        </div>
                        <div>
                            <p className=' text-gray-400'>the passage experienced a surge in</p>
                            <p className=' text-gray-400'>popularity during the 1960s when</p>
                            <p className=' text-gray-400'>Letraset used it on their dry-tr...</p>
                        </div>
                    </div>
                    <div className='absolute flex px-1 mt-7 items-center bottom-4 left-1'>
                        <p className='  text-orange-800'>Continue reading</p>
                    </div>
                    <Image className='w-[340px]' src={office} alt="office" />
                </div>
                <div className='relative'>
                    <div className='absolute flex gap-1 items-center top-48 left-1'>
                        <Image className='w-5' src={mackay} alt="person" />
                        <p className='text-sm text-white'>Mr.mackay</p>
                    </div>
                    <div className='absolute flex gap-2  items-center justify-center top-48 right-2'>
                        <Image src={share} alt="share" />
                        <Image src={comment} alt="comment" />
                    </div>
                    <div className='absolute flex px-1  items-center top-48 left-1'>

                    </div>
                    <div className='absolute flex px-1  items-center top-60 left-1'>

                    </div>
                    <div className='absolute px-1 flex-col space-y-2    items-center bottom-20 left-1'>
                        <p className='text-sm text-gray-400'>Design trends / 28 Apr 2023</p>
                        <div>
                            <p className='text-2xl font-bold text-gray-700'>The clean series</p>
                        </div>
                        <div>
                            <p className=' text-gray-400'>So when os it okay to use lorem</p>
                            <p className=' text-gray-400'>ipsum? First, lorem ipsum works well</p>
                            <p className=' text-gray-400'>for staging. Its like the prop...</p>
                        </div>
                    </div>
                    <div className='absolute flex px-1 mt-7 items-center bottom-4 left-1'>
                        <p className='  text-orange-800'>Continue reading</p>
                    </div>
                    <Image className='w-[340px]' src={resto} alt="resto" />
                </div>
            </div>
            <div className='flex items-center w-4/5 justify-between gap-6 max-md:flex-col'>
                <div className='relative'>
                    <div className='absolute flex gap-1 items-center top-48 left-1'>
                        <Image className='w-5  ' src={mackay} alt="person" />
                        <p className='text-sm text-white'>Mr.mackay</p>
                    </div>
                    <div className='absolute flex gap-2  items-center justify-center top-48 right-2'>
                        <Image src={share} alt="share" />
                        <Image src={comment} alt="comment" />
                    </div>
                    <div className='absolute px-1   flex-col space-y-2  items-center bottom-20 left-1'>
                        <p className='text-sm text-gray-400'>Decoration / 26 May 2023</p>
                        <div>
                            <p className='text-2xl font-bold text-gray-700'>Flowing serpentines</p>
                        </div>
                        <div>
                            <p className=' text-gray-400'>As an alternative theory,(and because</p>
                            <p className=' text-gray-400'>Latin scholars do this sort of thing)</p>
                            <p className=' text-gray-400'>someone tracked down a...</p>
                        </div>
                    </div>
                    <div className='absolute flex px-1 mt-7 items-center bottom-4 left-1'>
                        <p className='  text-orange-800'>Continue reading</p>
                    </div>
                    <Image className='w-[340px]' src={resto1} alt="food" />
                </div>
                <div className='relative'>
                    <div className='absolute flex gap-1 items-center top-48 left-1'>
                        <Image className='w-5' src={mackay} alt="person" />
                        <p className='text-sm text-white'>Mr.mackay</p>
                    </div>
                    <div className='absolute flex gap-2  items-center justify-center top-48 right-2'>
                        <Image src={share} alt="share" />
                        <Image src={comment} alt="comment" />
                    </div>
                    <div className='absolute px-1  flex-col space-y-2  items-center bottom-20 left-1'>
                        <p className='text-sm text-gray-400'>Inspiration / 26 May 2023</p>
                        <div>
                            <p className='text-2xl font-bold text-gray-700'>Here comes autumn</p>
                        </div>
                        <div>
                            <p className=' text-gray-400'>the passage experinced a surge in</p>
                            <p className=' text-gray-400'>popularity during the 1960s when</p>
                            <p className=' text-gray-400'>letraset used it on their dry-tr...</p>
                        </div>
                    </div>
                    <div className='absolute flex px-1 mt-7 items-center bottom-4 left-1'>
                        <p className='  text-orange-800'>Continue reading</p>
                    </div>
                    <Image className='w-[340px]' src={office1} alt="bathroom" />
                </div>
                <div className='relative'>
                    <div className='absolute flex gap-1 items-center top-48 left-1'>
                        <Image className='w-5' src={mackay} alt="person" />
                        <p className='text-sm text-white'>Mr.mackay</p>
                    </div>
                    <div className='absolute flex gap-2  items-center justify-center top-48 right-2'>
                        <Image src={share} alt="share" />
                        <Image src={comment} alt="comment" />
                    </div>
                    <div className='absolute px-1  flex-coll space-y-2  items-center bottom-20 left-1'>
                        <p className='text-sm text-gray-400'>decoration / 03 Apr 2023</p>
                        <div>
                            <p className='text-2xl font-bold text-gray-700'>Luxury bed now available</p>
                        </div>
                        <div>
                            <p className=' text-gray-400'>As an alternative theory,(and because</p>
                            <p className=' text-gray-400'>Latin scholars do this sort of thing)</p>
                            <p className=' text-gray-400'>someone tracked down a...</p>
                        </div>
                    </div>
                    <div className='absolute flex px-1 mt-7 items-center bottom-4 left-1'>
                        <p className='  text-orange-800'>Continue reading</p>
                    </div>
                    <Image className='w-[340px]' src={livingroom4} alt="office" />
                </div>
                <div className='relative'>
                    <div className='absolute flex gap-1 items-center top-48 left-1'>
                        <Image className='w-5' src={mackay} alt="person" />
                        <p className='text-sm text-white'>Mr.mackay</p>
                    </div>
                    <div className='absolute flex gap-2  items-center justify-center top-48 right-2'>
                        <Image src={share} alt="share" />
                        <Image src={comment} alt="comment" />
                    </div>
                    <div className='absolute flex px-1  items-center top-48 left-1'>

                    </div>
                    <div className='absolute flex px-1  items-center top-60 left-1'>

                    </div>
                    <div className='absolute px-1 flex-col space-y-2    items-center bottom-20 left-1'>
                        <p className='text-sm text-gray-400'>Furniture / 28 Mar 2023</p>
                        <div>
                            <p className='text-2xl font-bold text-gray-700'>Expands furniture resources</p>
                        </div>
                        <div>
                            <p className=' text-gray-400'>So how did the classical Latin</p>
                            <p className=' text-gray-400'>become so incoherent? a 15th</p>
                            <p className=' text-gray-400'>century typeetter...</p>
                        </div>
                    </div>
                    <div className='absolute flex px-1 mt-7 items-center bottom-4 left-1'>
                        <p className='  text-orange-800'>Continue reading</p>
                    </div>
                    <Image className='w-[340px]' src={livingroom5} alt="resto" />
                </div>
            </div>
        </div>
    );
}

export default Blog;