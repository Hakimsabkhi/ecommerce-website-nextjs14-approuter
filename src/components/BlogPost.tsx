import Image from 'next/image';
import React from 'react';
import { blogpost1 } from "../../public/image";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegSmileBeam } from "react-icons/fa";

const BlogPost = () => {
    return (
        /* whole page */
        <div className="desktop flex py-8 gap-10 ">
            {/* First Half */}
            <div className='w-[900px] flex flex-col gap-16'>
                {/* 1 */}
                <div className="flex flex-col w-full gap-4">
                    {/* Title */}
                    <div className="flex flex-col gap-6">
                        <p className="text-4xl font-bold">Welcome to Blog Post</p>
                        <div className="flex flex-col gap-2">
                            <p className='text-gray-400 text-sm'>Posted on january 1, 2023 by Start Bootstrap</p>
                            <div className='flex items-center gap-2'>    
                                <p className='text-xs px-4 py-2 rounded-md bg-gray-600 text-white'>Web Design</p>
                                <p className='text-xs px-4 py-2 rounded-md bg-gray-600 text-white'>Freebies</p>
                            </div>
                        </div>                        
                    </div>
                    {/* Post */}
                    <div className="flex flex-col gap-6">
                        <div className='flex flex-col gap-5'>
                            <Image src={blogpost1} alt="blogpost" />
                            <div className='flex flex-col gap-4  '>
                                <p>Science is an enterprise that should be cherished as an activity of the free human mind. Because it transforms who we are, how we live, and it gives us an understanding of our place in the universe.</p>
                                <p>The universe is large and old, and the ingredients for life as we know it are everywhere, so there's no reason to think that Earth would be unique in that regard. Whether of not the life became intelligent is a different question, and we'll see if we find that.</p>
                                <p>If you get asteroids about a kilometer in size, those are large enough and carry enough energy into our system to disrupt transportation, communication, the food chains, and that can be a really bad day on Earth.</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <p className='text-4xl font-bold '>I have odd cosmic thoughts every day</p>
                            <div className='flex flex-col gap-4'>
                                <p>For me, the most fascinating interface is Twitter. I have odd cosmic thoughts every day and I realized I could hold them to myself or share them with people who might be interested.</p>
                                <p>Venus has a runaway greenhouse effect. I kind of want to know what happened there because we're twirling knobs here on Earth without knowing the consequences of it. Mars once had running water. It's bone dry today. Something bad happened there as well.</p>
                                <Image src={blogpost1} alt="blogpost" />                                
                            </div>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <p className='text-4xl font-bold '>I have odd cosmic thoughts every day</p>
                            <div className='flex flex-col gap-4'>
                                <p>For me, the most fascinating interface is Twitter. I have odd cosmic thoughts every day and I realized I could hold them to myself or share them with people who might be interested.</p>
                                <p>Venus has a runaway greenhouse effect. I kind of want to know what happened there because we're twirling knobs here on Earth without knowing the consequences of it. Mars once had running water. It's bone dry today. Something bad happened there as well.</p>
                                <Image src={blogpost1} alt="blogpost" />                                
                            </div>
                        </div>                        
                    </div>                    
                </div>
                {/* 2 */}
                <div className='w-full border-2 p-8 rounded-lg flex flex-col gap-4 bg-[#EFEFEF]'>
                    <div className='flex flex-col gap-8'>
                        <p className='text-4xl font-bold'>Comments</p>
                        <div className="relative">
                            <textarea className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full  block  p-2.5 h-40  " required />
                            <button className='text-xs px-4 py-2 rounded-md bg-gray-600 text-white absolute top-[60%] right-1/2 translate-x-1/2 translate-y-1/2'>Post Comment</button>
                        </div>
                    </div>                            
                    <div>
                        <div className="flex justify-between items-center">
                            <p className='text-4xl '>3 comments</p>
                            <select className="px-4 py-1 rounded-md ">
                                <option>Recent</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className='flex flex-col gap-1'>
                                <p className='text-xl font-bold'>Jenny Wilson</p>
                                <p className='text-sm text-gray-400'>1 week ago</p>                                
                            </div>
                            <p className='text-sm '>
                                These running shoes are the best I've ever owned. They're lightweight, supportive, and my feet feel great even after long runs. The cushioning is perfect for absorbing impact.                                
                            </p>
                            <div className="flex items-center gap-2">
                                <div className='flex items-center border-2 border-gray-400 rounded-md'>
                                    <p className="text-xs">10</p>
                                    <AiOutlineLike />
                                </div>
                                <FaRegSmileBeam />
                                <p>relpy</p>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <p>Kevin Patel</p>
                                <p>5 days ago</p>
                            </div>
                            <div>
                                <p>Totally! I ran a half marathon in them last weekend and had zero discomfort. Have you tried them on trails?</p>
                                <p>Reply</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>Kevin Patel</p>
                                <p>5 days ago</p>
                            </div>
                            <div>
                                <p>Totally! I ran a half marathon in them last weekend and had zero discomfort. Have you tried them on trails?</p>
                                <p>Reply</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Second Half */}
            <div >

            </div>
        </div>
    );
}

export default BlogPost;
