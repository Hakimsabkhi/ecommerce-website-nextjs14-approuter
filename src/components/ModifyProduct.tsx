"use client";

import React, { useState, useEffect } from 'react';


import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'react-toastify';

interface ProductData {
  _id: string;
  name: string;
  description: string;
  ref: string;
  category: { _id: string };
  brand: { _id: string };
  stock: number;
  price: number;
  discount?: string;
  imageUrl?: string;
  info?: string;
  color?: string;
  material?: string;
  weight?: string;
  warranty?: string;
  dimensions?: string;
  images?:string[];
}

interface ModifyProductProps {
  productData: ProductData | null;
}

interface Category {
  _id: string;
  name: string;
}

interface Brand {
  _id: string;
  name: string;
}

const ModifyProduct: React.FC<ModifyProductProps> = ({ productData }) => {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [images, setImages] = useState<File[]>([]);
  const [existingImages, setExistingImages] = useState<string[]>([]);
  const [formData, setFormData] = useState<ProductData>({
    _id: productData?._id || '',
    name: productData?.name || '',
    description: productData?.description || '',
    ref: productData?.ref || '',
    category: productData?.category || { _id: '' },
    brand: productData?.brand || { _id: '' },
    stock: productData?.stock || 0,
    price: productData?.price || 0,
    discount: productData?.discount || '',
    imageUrl: productData?.imageUrl || '',
    info: productData?.info || '',
    color: productData?.color || '',
    material: productData?.material || '',
    weight: productData?.weight || '',
    warranty: productData?.warranty ||  '',
    dimensions: productData?.dimensions || '',
    images: productData?.images || [],
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/category/getAllCategory');
        if (!response.ok) {
          throw new Error(`Failed to fetch categories: ${response.statusText} (Status: ${response.status})`);
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    const fetchBrands = async () => {
      try {
        const response = await fetch('/api/brand/getAllBrand');
        if (!response.ok) {
          throw new Error(`Failed to fetch brands: ${response.statusText} (Status: ${response.status})`);
        }
        const data = await response.json();
        setBrands(data);
      } catch (error) {
        console.error('Error fetching brands:', error);
      }
    };

    fetchCategories();
    fetchBrands();
  }, []);

  useEffect(() => {
    if (image) {
      const objectUrl = URL.createObjectURL(image);
      setImagePreview(objectUrl);

      return () => {
        URL.revokeObjectURL(objectUrl);
      };
    }
  }, [image]);

  useEffect(() => {
    return () => {
      images.forEach(img => URL.revokeObjectURL(URL.createObjectURL(img)));
    };
  }, [images]);

  useEffect(() => {
    if (productData?.images) {
      setExistingImages(productData.images);
    }
  }, [productData?.images]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: name === 'category' || name === 'brand'
        ? { _id: value }
        : (name === 'price' || name === 'stock')
        ? Number(value) || 0
        : value
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleImageChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);

      /* if (images.length + fileArray.length > 3) {
        setError('Please select up to 3 images.');
        return;
      } */

      setImages(prevImages => [...prevImages, ...fileArray]);
      setError(null);
    }
  };

  const removeImage = (index: number, isNew: boolean) => {
    if (isNew) {
      setImages(prevImages => prevImages.filter((_, i) => i !== index));
    } else {
      const removedImage = existingImages[index];
      setExistingImages(prevImages => prevImages.filter((_, i) => i !== index));

      fetch(`/api/products/deleteimageproduct/${formData._id}`, {
        method: 'DELETE',
        body: JSON.stringify({ imageUrl: removedImage }),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(response => {
        if (response.ok) {
          toast.success('Image removed successfully!');
        } else {
          toast.error('Failed to remove image.');
        }
      }).catch(() => {
        toast.error('Error occurred while removing image.');
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updateFormData = new FormData();
    updateFormData.append('name', formData.name);
    updateFormData.append('description', formData.description);
    updateFormData.append('ref', formData.ref);
    updateFormData.append('category', formData.category._id);
    updateFormData.append('brand', formData.brand._id);
    updateFormData.append('stock', formData.stock.toString());
    updateFormData.append('price', formData.price.toString());
    updateFormData.append('discount', formData.discount || '');
    updateFormData.append('info', formData.info || '');
    updateFormData.append('color', formData.color || '');
    updateFormData.append('material', formData.material || '');
    updateFormData.append('weight', formData.weight || '');
    updateFormData.append('warranty',formData.warranty|| '' );
    updateFormData.append('dimensions', formData.dimensions || '');
    if (image) updateFormData.append('image', image);
    images.forEach((img, index) => updateFormData.append(`images[${index}]`, img));

    try {
      const response = await fetch(`/api/products/updateProduct/${formData._id}`, {
        method: 'PUT',
        body: updateFormData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'An error occurred');
      }
      toast.success(`Product ${formData.name} modified successfully!`);
      router.push('/admin/productlist');
    } catch (err: any) {
      toast.error(`Error: ${err instanceof Error ? err.message : 'Unknown error'}`);
    }
  };
  return (
    <form onSubmit={handleSubmit} className='mx-auto w-[90%] max-lg:w-[90%] py-8 max-lg:pt-20 flex flex-col gap-8'>
      <p className='text-3xl font-bold'>Modify Product</p>
      {error && <p className='text-red-500'>{error}</p>}
      <div className='flex max-lg:flex-col items-center gap-2 max-lg:gap-8'>
        <div className='flex items-center w-[40%] max-lg:w-full max-lg:justify-between gap-2'>
          <p className="text-xl font-bold">Name *</p>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[80%] block p-2.5" 
            required 
          />
        </div>
        <div className='flex items-center w-[30%] max-lg:w-full max-lg:justify-between gap-2'>
          <p className="text-xl font-bold">Upload Image *</p>
          <input 
            type="file" 
            onChange={handleImageChange}
            className='hidden'
            id='file-upload'
          />
          <label htmlFor='file-upload' className='bg-[#EFEFEF] text-white rounded-md w-[50%] h-10 border-2 flex justify-center items-center cursor-pointer'>
            <p className="text-black">Select an Image</p>
          </label>
        </div>
        {(formData.imageUrl || imagePreview) && (
          <div className="flex items-center w-[30%] max-lg:w-full justify-between">
            <Image
              src={imagePreview || formData.imageUrl || ''}
              alt="Selected Image"
              width={50}
              height={50}
              className="rounded-md"
            />
          </div>
        )}
      </div>
      <div className='flex max-lg:flex-col items-center gap-2 max-lg:gap-8'>
      <div className='flex items-center w-[30%] max-lg:w-full max-lg:justify-between gap-4'>
        <p className="text-xl font-bold">Category *</p>
        <select 
          name="category"
          value={formData.category._id}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[60%] block p-2.5" 
          required
        >
          <option value="">Select a category</option>
          {categories.map(category => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className='flex items-center w-[30%] max-lg:w-full max-lg:justify-between gap-4'>
        <p className="text-xl font-bold">Brand *</p>
        <select 
          name="brand"
          value={formData.brand._id}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[60%] block p-2.5" 
          required
        >
          <option value="">Select a brand</option>
          {brands.map(brand => (
            <option key={brand._id} value={brand._id}>
              {brand.name}
            </option>
          ))}
        </select>
      </div>
      <div className='flex items-center w-[30%] max-lg:w-full max-lg:justify-between gap-4'>
          <p className="text-xl font-bold">Quantity *</p>
          <input 
            type="number" 
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[60%] block p-2.5" 
            required 
          />
        </div>
      </div>
      <div className='flex max-lg:flex-col items-center max-lg:gap-8 justify-between'>
        
        <div className='flex items-center w-[30%] max-lg:w-full max-lg:justify-between gap-4'>
          <p className="text-xl font-bold">Ref *</p>
          <input 
            type="text" 
            name="ref"
            value={formData.ref}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[60%] block p-2.5" 
            required 
          />
        </div>
        <div className='flex items-center w-[30%] max-lg:w-full max-lg:justify-between gap-4'>
          <p className="text-xl font-bold">Price *</p>
          <input 
            type="number" 
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[60%] block p-2.5" 
            required 
          />
        </div>
        <div className='flex items-center w-[30%] max-lg:w-full max-lg:justify-between gap-4'>
          <p className="text-xl font-bold">Discount</p>
          <input 
            type="number" 
            name="discount"
             min="0"
            max="100"
            value={formData.discount || ''}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[60%] block p-2.5" 
          />
        </div>
      </div>
      <div className="flex items-center w-full gap-4">
        <p className="text-xl font-bold">Info*</p>
        <textarea
          name="info"
          value={formData.info}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full block p-2.5"
          required
        />
      </div>
      <div className='flex items-center w-full gap-4'>
        <p className="text-xl font-bold">Description</p>
        <textarea 
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full block p-2.5" 
         
        />
      </div>
      <div className="flex w-full gap-0">
        <div className="flex items-center w-full gap-4">
          <label className="text-xl font-bold">Color</label>
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5"
          />
        </div>
        <div className="flex items-center w-full gap-4">
          <label className="text-xl font-bold">Material</label>
          <input
            type="text"
            name="material"
            value={formData.material}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5"
          />
        </div>
        <div className="flex items-center w-full gap-4">
          <label className="text-xl font-bold">Weight</label>
          <input
            type="text"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5"
          />
        </div>
        <div className="flex items-center w-full gap-4">
          <label className="text-xl font-bold">Warranty</label>
          <input
            type="text"
            name="warranty"
            value={formData.warranty }
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5"
          />
        </div>
        <div className="flex items-center w-full gap-4">
          <label className="text-xl font-bold">Dimensions</label>
          <input
            type="text"
            name="dimensions"
            value={formData.dimensions}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5"
          />
        </div>
        
      </div>
      <div className="flex max-lg:flex-col items-center max-lg:gap-8 justify-between">
      <div className='flex flex-col gap-4'>
        <label htmlFor="images" className="text-xl font-bold">Additional Images</label>
        <input 
          type="file" 
          multiple 
          onChange={handleImageChanges}
          className="mb-2"
        />
        {images.length > 0 && (
          <div className='flex flex-wrap gap-2'>
            {images.map((file, index) => (
              <div key={index} className='relative w-20 h-20'>
                <Image 
                  src={URL.createObjectURL(file)} 
                  alt='Image preview' 
                  layout='fill' 
                  objectFit='cover' 
                />
                <button 
                  type='button' 
                  onClick={() => removeImage(index, true)} 
                  className='absolute top-0 right-0 
                  py-1 px-2 text-xs bg-red-500 text-white rounded-full'
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        )}
        {existingImages.length > 0 && (
          <div className='flex flex-wrap gap-2'>
            {existingImages.map((imgUrl, index) => (
              <div key={index} className='relative w-20 h-20'>
                <Image 
                  src={imgUrl} 
                  alt='Existing image' 
                  layout='fill' 
                  objectFit='cover' 
                />
                <button 
                  type='button' 
                  onClick={() => removeImage(index, false)} 
                  className='absolute top-0 right-0  py-1 px-2 text-xs bg-red-500 text-white rounded-full'
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
</div>

      <div className="w-full flex justify-end gap-4">
        <button type="submit" className='bg-gray-800 hover:bg-slate-600 rounded-md w-[20%] max-lg:w-[50%] h-10'>
            <p className="text-white">Modify Product</p>
        </button>
        <Link href="/admin/productlist" className='border border-gray-400 hover:bg-gray-600 rounded-md w-[20%] text-center justify-center p-2 max-lg:w-[50%] h-10'>
        
          <p className="text-black hover:text-white ">Cancel</p>
       
        </Link>
      </div>
    </form>
  );
};

export default ModifyProduct;
