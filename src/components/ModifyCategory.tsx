"use client";
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";import axios from "axios";
import Image from "next/image";
import Link from "next/link";
interface CategoryData {
    name: string;
    image: string;
    icon: string;
  }
const ModifyCategory = () => {
    const params = useParams() as { id: string }; // Explicitly type the params object
    const router = useRouter();
    const [categoryData, setCategoryData] = useState<CategoryData>({
      name: "",
      image: "",
      icon: ""
    });
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [selectedIcon, setSelectedIcon] = useState<File | null>(null);
  
    useEffect(() => {
      // Fetch category data by ID
      const fetchCategoryData = async () => {
        try {
          const response = await axios.get(`/api/category/${params.id}`);
          setCategoryData(response.data);
        } catch (error) {
          console.error("Error fetching category data:", error);
        }
      };
  
      fetchCategoryData();
    }, [params.id]);
  
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setCategoryData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        setSelectedImage(e.target.files[0]);
      }
    };
  
    const handleIconChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        setSelectedIcon(e.target.files[0]);
      }
    };
  
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("name", categoryData.name);
      if (selectedImage) {
        formData.append("image", selectedImage);
      }
      if (selectedIcon) {
        formData.append("logo", selectedIcon);
      }
  
      try {
        await axios.put(`/api/category/${params.id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
        router.push("/CategoryList");
      } catch (error) {
        console.error("Error updating category:", error);
      }
    };
  return (
    <div  className="mx-auto w-[70%] max-xl:w-[90%] py-8 max-lg:pt-20 flex flex-col gap-8">
      <p className="text-3xl font-bold">Modfiy</p>
      <form onSubmit={handleSubmit}className="flex max-lg:flex-col max-lg:gap-4 lg:items-center gap-4">
        <div className="flex items-center w-[40%] max-lg:w-full gap-6 justify-between">
          <p className="text-xl max-lg:text-base font-bold">Name*</p>
          <input
            type="text"
            name="name"
            value={categoryData.name}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[80%] block p-2.5"
          />
        </div>
        <div className="flex items-center w-[30%] max-lg:w-full justify-between">
          <p className="max-lg:text-base font-bold">Upload Image</p>
          <input
             type="file"
             accept="image/*"
             className="hidden"
             id="upload-image"
             onChange={handleImageChange}
          />
          <label
            htmlFor="upload-image"
            className="bg-[#EFEFEF] max-xl:text-xs text-black rounded-md w-[50%] h-10 border-2 flex items-center justify-center cursor-pointer"
          >
            Select an Image
          </label>
        </div>
        <div className="flex items-center w-[30%] max-lg:w-full justify-between">
          <p className="max-lg:text-base font-bold">Upload Icon</p>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="upload-icon"
            onChange={handleIconChange}
          />
          <label
            htmlFor="upload-image"
            className="bg-[#EFEFEF] max-xl:text-xs text-black rounded-md w-[50%] h-10 border-2 flex items-center justify-center cursor-pointer"
          >
            Select an icon
          </label>
        </div>
        <div className="w-[20%] max-xl:w-[30%] max-md:w-[50%] items-start">
          <button
            type="submit"
            className="bg-orange-400 text-white rounded-md w-full h-10"
          >
            <p className="text-white">Modify</p>
          </button>
        </div>
        <div className="w-[20%] max-xl:w-[30%] max-md:w-[50%] items-start">
          <Link href="/CategoryList">
            <div className="bg-orange-400 text-white rounded-md w-full h-10 flex items-center justify-center">
              <p className="text-white">Cancel</p>
            </div>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ModifyCategory;
