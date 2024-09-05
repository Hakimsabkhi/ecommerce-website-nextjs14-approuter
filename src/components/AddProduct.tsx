"use client";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Define the Category and Brand types
interface Category {
  _id: string;
  name: string;
}

interface Brand {
  _id: string;
  name: string;
}

const AddProduct = () => {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]); // New state for brands
  const [error, setError] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null); // State for image preview

  const [productData, setProductData] = useState({
    name: "",
    description: "",
    ref: "",
    category: "",
    brand: "", // Added brand to productData
    stock: "",
    price: "",
    discount: "",
  });

  useEffect(() => {
    // Fetch categories from the API
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/category/getAllCategory");
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    // Fetch brands from the API
    const fetchBrands = async () => {
      try {
        const response = await fetch(`/api/brand/getAllBrand`);
        if (!response.ok) {
          throw new Error("Failed to fetch brands");
        }
        const data = await response.json();
        setBrands(data);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    // Call the fetch functions
    fetchCategories();
    fetchBrands();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (image) {
      const objectUrl = URL.createObjectURL(image);
      setImagePreview(objectUrl);

      // Clean up object URL
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [image]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("description", productData.description);
    formData.append("ref", productData.ref);
    formData.append("category", productData.category);
    formData.append("brand", productData.brand); // Added brand to formData
    formData.append("stock", productData.stock);
    formData.append("price", productData.price);
    formData.append("discount", productData.discount);

    if (image) formData.append("image", image);

    try {
      const response = await fetch("/api/products/postProduct", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit product");
      }

      toast.success(`Product ${productData.name} Add successfully!`);
      router.push("/admin/productlist");
    } catch (err: any) {
      toast.error(
        `Error: ${err instanceof Error ? err.message : "Unknown error"}`
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-[90%] max-lg:w-[90%] py-8 max-lg:pt-20 flex flex-col gap-8"
    >
      <p className="text-3xl font-bold">ADD New Product</p>
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex max-lg:flex-col items-center gap-2 max-lg:gap-8">
        <div className="flex items-center w-[40%] max-lg:w-full max-lg:justify-between gap-2">
          <p className="text-xl font-bold">Name *</p>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[80%] block p-2.5"
            required
          />
        </div>
        <div className="flex items-center w-[30%] max-lg:w-full max-lg:justify-between gap-2">
          <p className="text-xl font-bold">Upload Image *</p>
          <input
            type="file"
            onChange={handleImageChange}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="bg-[#EFEFEF] text-white rounded-md w-[50%] h-10 border-2 flex justify-center items-center cursor-pointer"
          >
            <p className="text-black">Select an Image</p>
          </label>
        </div>
        {imagePreview && (
          <div className="flex items-center w-[30%] max-lg:w-full max-lg:justify-between gap-2">
            <p className="text-xl font-bold">Image Preview</p>
            <Image
              src={imagePreview}
              alt="Image preview"
              className="w-24 h-24 object-cover"
              width={60}
              height={60}
            />
          </div>
        )}
        <div className="flex items-center w-[30%] max-lg:w-full max-lg:justify-between gap-4">
          <p className="text-xl font-bold">Category *</p>
          <select
            name="category"
            value={productData.category}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[60%] block p-2.5"
            required
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center w-[30%] max-lg:w-full max-lg:justify-between gap-4">
          <p className="text-xl font-bold">Brand *</p>
          <select
            name="brand"
            value={productData.brand}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[60%] block p-2.5"
            required
          >
            <option value="">Select a brand</option>
            {brands.map((brand) => (
              <option key={brand._id} value={brand._id}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex max-lg:flex-col items-center max-lg:gap-8 justify-between">
        <div className="flex items-center w-[30%] max-lg:w-full max-lg:justify-between gap-4">
          <p className="text-xl font-bold">Quantity *</p>
          <input
            type="number"
            name="stock"
            value={productData.stock}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[60%] block p-2.5"
            required
          />
        </div>
        <div className="flex items-center w-[30%] max-lg:w-full max-lg:justify-between gap-4">
          <p className="text-xl font-bold">Ref *</p>
          <input
            type="text"
            name="ref"
            value={productData.ref}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[60%] block p-2.5"
            required
          />
        </div>
        <div className="flex items-center w-[30%] max-lg:w-full max-lg:justify-between gap-4">
          <p className="text-xl font-bold">Price *</p>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[60%] block p-2.5"
            required
          />
        </div>
        <div className="flex items-center w-[30%] max-lg:w-full max-lg:justify-between gap-4">
          <p className="text-xl font-bold">Discount</p>
          <input
            type="number"
            name="discount"
            min="0"
            max="100"
            value={productData.discount}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[60%] block p-2.5"
          />
        </div>
      </div>
      <div className="flex items-center w-full gap-4">
        <p className="text-xl font-bold">Description</p>
        <textarea
          name="description"
          value={productData.description}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full block p-2.5"
          required
        />
      </div>

      <div className="w-full flex justify-end gap-4">
        <button
          type="submit"
          className="bg-gray-800 text-white rounded-md w-[20%] max-lg:w-[50%] h-10  hover:bg-gray-600"
        >
          <p className="text-white">Add the New Product</p>
        </button>
        <Link
          href="/admin/productlist"
          className="border border-gray-400 rounded-md w-[20%] text-center justify-center p-2 max-lg:w-[50%] h-10 text-black  hover:text-white hover:bg-gray-600 "
        >
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default AddProduct;
