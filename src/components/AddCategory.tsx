"use client";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

const AddCategory = () => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [name, setName] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [icon, setIcon] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [iconPreview, setIconPreview] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (status === 'loading') return; // Do nothing while loading
        if (!session || !session.user || session.user.role !== 'Admin') {
            router.push('/signin');
        }
    }, [session, status]);

    useEffect(() => {
        if (image) {
            const objectUrl = URL.createObjectURL(image);
            setImagePreview(objectUrl);

            // Clean up object URL
            return () => URL.revokeObjectURL(objectUrl);
        }
    }, [image]);

    useEffect(() => {
        if (icon) {
            const objectUrl = URL.createObjectURL(icon);
            setIconPreview(objectUrl);

            // Clean up object URL
            return () => URL.revokeObjectURL(objectUrl);
        }
    }, [icon]);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImage(e.target.files[0]);
        }
    };

    const handleIconChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setIcon(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !image || !icon) {
            setError('Name, image, and icon are required');
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('image', image);
        formData.append('logo', icon); // Correctly naming the field
        formData.append('user', session?.user?.id.toString() || ''); // Ensure user ID is a string

        try {
            await axios.post('/api/category', formData, { 
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            router.push('/CategoryList'); // Redirect to categories page after successful submission
        } catch (err: any) {
            setError(`Error: ${err.response?.data?.message || err.message}`);
        }
    };

    return (
        <div className='mx-auto w-[70%] max-xl:w-[90%] py-8 max-lg:pt-20 flex flex-col gap-8'>
            <p className='text-3xl font-bold'>ADD categories</p>
            <form onSubmit={handleSubmit} className='flex max-lg:flex-col max-lg:gap-4 lg:items-center gap-4'>
                <div className='flex items-center w-[40%] max-lg:w-full gap-6 justify-between'>
                    <p className="text-xl max-lg:text-base font-bold">Name*</p>
                    <input
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[80%] block p-2.5"
                        required
                    />
                </div>
                <div className='flex items-center w-[30%] max-lg:w-full justify-between'>
                    <p className="max-lg:text-base font-bold">Upload Image*</p>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                        id="upload-image"
                    />
                    <label
                        htmlFor="upload-image"
                        className='bg-[#EFEFEF] max-xl:text-xs text-black rounded-md w-[50%] h-10 border-2 flex items-center justify-center cursor-pointer'
                    >
                        Select an Image
                    </label>
                    {imagePreview && (
                        <div className="w-[15%] max-lg:w-full">
                            <Image src={imagePreview} alt="Image preview" className="w-full h-auto mt-4" width={10} height={10} />
                        </div>
                    )}
                </div>
                <div className='flex items-center w-[30%] max-lg:w-full justify-between'>
                    <p className="max-lg:text-base font-bold">Upload Icon*</p>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleIconChange}
                        className="hidden"
                        id="upload-icon"
                    />
                    <label
                        htmlFor="upload-icon"
                        className='bg-[#EFEFEF] max-xl:text-xs text-black rounded-md w-[50%] h-10 border-2 flex items-center justify-center cursor-pointer'
                    >
                        Select an Icon
                    </label>
                    {iconPreview && (
                        <div className="w-[15%] max-lg:w-full">
                            <Image src={iconPreview} alt="Icon preview" className="w-full h-auto mt-4" width={10} height={10} />
                        </div>
                    )}
                </div>
                <div className="w-[20%] max-xl:w-[30%] max-md:w-[50%] items-start">
                    <button type="submit" className='bg-orange-400 text-white rounded-md w-full h-10'>
                        <p className="text-white">Add the new category</p>
                    </button>
                </div>
            </form>
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
};

export default AddCategory;
