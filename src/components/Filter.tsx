"use client";
import React, { useState, ChangeEvent, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slider";
import { useParams } from "next/navigation";
import {
  sortby,
  Hay1,
  poliform1,
  vitra1,
  diag1,
  diag2,
  diag3,
  right,
  heart,
  left,
  star,
  decor2,
} from "@/assets/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import "../app/globals.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

interface ProductData {
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
  name: string;
}

const Filter: React.FC = () => {
  const params = useParams<{ product?: string }>();
  const product = params?.product; // Safe access

  const [products, setProducts] = useState<ProductData[]>([]);
  const [values, setValues] = useState<[number, number]>([1, 9999999]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchCategory = async () => {
      if (product) {
        try {
          const response = await fetch(`/api/search?category=${product}`);
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      }
    };
    fetchCategory();
  }, [product]);

  const handlePriceChange = (newValues: [number, number]) => {
    setValues(newValues);
  };

  const handleBrandChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedBrand(e.target.value);
  };

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(e.target.value);
  };

  const handleBrandClick = (brand: string) => {
    setSelectedBrand(brand);
  };

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  const handleStatusClick = (status: string) => {
    setSelectedStatus((prevStatus) => (prevStatus === status ? "" : status));
  };

  const handleMaterialClick = (material: string) => {
    setSelectedMaterials((prevMaterials) =>
      prevMaterials.includes(material)
        ? prevMaterials.filter((m) => m !== material)
        : [...prevMaterials, material]
    );
  };
  const filteredItems = products.filter((item) => {
    const itemPrice = item.price;
    const matchesPrice = itemPrice >= values[0] && itemPrice <= values[1];
    const matchesBrand = selectedBrand
      ? item.brand?.name.toLowerCase() === selectedBrand.toLowerCase()
      : true;
    const matchesColor = selectedColor
      ? item.color?.toLowerCase() === selectedColor.toLowerCase()
      : true;
    const matchesMaterial =
      selectedMaterials.length > 0
        ? selectedMaterials.includes(item.material || "")
        : true;
    const matchesStatus = selectedStatus
      ? item.status?.toLowerCase() === selectedStatus.toLowerCase()
      : true;

    return (
      matchesPrice &&
      matchesBrand &&
      matchesColor &&
      matchesMaterial &&
      matchesStatus
    );
  });
  console.log("ddd", products);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const currentItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 800, behavior: "smooth" });
  };

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  /*return (
    <div className="flex py-8 desktop max-md:w-[95%] justify-center gap-8 max-md:items-center max-md:flex-col">
      <div className="flex-col flex gap-4 max-md:flex-col max-md:justify-center max-md:items-center">
        <div className="flex-col gap-4 flex bg-white container w-full rounded-lg px-10 py-8">
          <p className="font-bold">Filter By Price</p>
          <Slider
            className="slider"
            onChange={handlePriceChange}
            value={values}
            min={1}
            max={999999}
          />
          <div className="flex justify-between">
            <div className="flex items-center">
              <p className="text-xs text-gray-400">Price:</p>
              <p className="text-xs">
                {values[0]} TND - {values[1]} TND
              </p>
            </div>
            <p className="bg-orange-400 cursor-pointer rounded-full text-white text-xs px-4 py-1">
              Filter
            </p>
          </div>
          <div>
            <p className="font-bold">Filter By Brand</p>
          </div>
          <div className="w-full">
            <input
              className="px-2 py-1 rounded-full border border-gray-300"
              type="text"
              placeholder="Find a Brand"
              value={selectedBrand}
              onChange={handleBrandChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            {["Hay", "Vitra", "Poliform"].map((brand) => (
              <div
                key={brand}
                className="flex w-full justify-between items-center"
                onClick={() => handleBrandClick(brand)}
              >
                <p className="text-gray-500 cursor-pointer">{brand}</p>
                <div>
                  <p className="ring-1 ring-gray-400 rounded-full px-4 py-1 cursor-pointer">
                    {
                      products.filter(
                        (item) =>
                          item.brand?.name.toLowerCase() === brand.toLowerCase()
                      ).length
                    }
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <p className="font-bold">Color</p>
          </div>
          <div className="w-full">
            <input
              className="px-2 py-1 rounded-full border border-gray-300"
              type="text"
              placeholder="Find a Color"
              value={selectedColor}
              onChange={handleColorChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            {["Bone", "Dark Gray", "Gray", "Jet", "White"].map((color) => (
              <div
                key={color}
                className="flex w-full justify-between items-center"
                onClick={() => handleColorClick(color)}
              >
                <p className="text-gray-500 cursor-pointer">{color}</p>
                <div>
                  <p className="ring-1 ring-gray-400 rounded-full px-4 py-1 cursor-pointer">
                    {
                      products.filter(
                        (item) =>
                          item.color?.toLowerCase() === color.toLowerCase()
                      ).length
                    }
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <p className="font-bold">Materials</p>
          </div>
          {["Fabric", "Leather", "Metal", "Plastic", "Rattan", "Wood"].map(
            (material) => (
              <div key={material} onClick={() => handleMaterialClick(material)}>
                <p className="text-gray-500 cursor-pointer">{material}</p>
              </div>
            )
          )}
          <div>
            <p className="font-bold">Status</p>
            <div className="flex gap-2">
              {["New", "Featured", "Best Seller", "Top Sale"].map((status) => (
                <div
                  key={status}
                  onClick={() => handleStatusClick(status)}
                  className={`cursor-pointer ${
                    selectedStatus === status
                      ? "bg-gray-200 text-black"
                      : "bg-white text-gray-500"
                  }`}
                >
                  {status}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col flex w-full max-md:justify-center gap-6">
        <p className="font-bold">Products</p>
        <div className="grid grid-cols-3 gap-4">
          {currentItems.map((item) => (
            <div
              key={item._id}
              className="border bg-white border-gray-300 p-4 rounded-lg"
            >
              <div className="relative h-48">
                <Image
                  className="object-cover"
                  src={item.imageUrl || "/default-image.png"}
                  alt={item.name}
                  layout="fill"
                />
                <div className="absolute top-0 right-0 p-2">
             
                </div>
              </div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">{item.description}</p>
              <div className="flex justify-between items-center mt-2">
              {!item.discount && (  <span className="text-lg font-bold">{item.price} TND</span>)}
                {item.discount && (
                  <div>
                    {item.price - (item.price * (item.discount / 100))} TND
               
                  <span className="text-red-500 line-through">
                  <span className="text-lg font-bold">{item.price} TND</span>
                  </span>
                  </div>
                )}
              </div>
              <Link href={`/${product}/${item._id}`}>
                <div className="text-blue-500">View Details</div>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <button
            className={`py-2 px-4 ${currentPage === 1 ? "disabled" : ""}`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            
          </button>
          <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, page) => (
              <button
                key={page}
                className={`py-2 px-4 ${
                  currentPage === page + 1 ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => handlePageChange(page + 1)}
              >
                {page + 1}
              </button>
            ))}
          </div>
          <button
            className={`py-2 px-4 ${
              currentPage === totalPages ? "disabled" : ""
            }`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
       
          </button>
        </div>
      </div>
    </div>
  );
};*/
  return (
    <div className="flex py-8 desktop  max-md:w-[95%]  justify-center gap-8 max-md:items-center max-md:flex-col ">
      <div className="flex-col flex gap-4 max-md:flex-col max-md:justify-center max-lg:hidden max-md:items-center">
        <div className="flex-col gap-4 flex bg-white container w-full rounded-lg px-10 py-8">
          <p className="font-bold">Filter By Price</p>
          <Slider
            className={"slider"}
            onChange={handlePriceChange}
            value={values}
            min={1}
            max={999999}
          />
          <div className="flex justify-between">
            <div className="flex items-center">
              <p className="text-xs text-gray-400">Price:</p>
              <p className="text-xs">
                {values[0]} TND - {values[1]} TND
              </p>
            </div>
            <p className="bg-orange-400 cursor-pointer rounded-full text-white text-xs px-4 py-1">
              filter
            </p>
          </div>
          <div>
            <p className="font-bold">Filter By Brand</p>
          </div>
          <div className="w-full">
            <input
              className="px-2 py-1 rounded-full border border-gray-300"
              type="text"
              placeholder="Find a Brand"
              value={selectedBrand}
              onChange={handleBrandChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            {["Hay", "vitra", "Poliform"].map((brand) => (
              <div
                key={brand}
                className="flex w-full justify-between items-center"
                onClick={() => handleBrandClick(brand)}
              >
                <p className="text-gray-500 cursor-pointer">{brand}</p>
                <div>
                  <p className="ring-1 ring-gray-400 rounded-full px-4 py-1 cursor-pointer">
                    {
                      products.filter(
                        (item) =>
                          item.brand?.name.toLowerCase() === brand.toLowerCase()
                      ).length
                    }
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <p className="font-bold">Color</p>
          </div>
          <div className="w-full">
            <input
              className="px-2 py-1 rounded-full border border-gray-300"
              type="text"
              placeholder="Find a Color"
              value={selectedColor}
              onChange={handleColorChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            {["Bone", "Dark Gray", "Gray", "Jet", "White"].map((color) => (
              <div
                key={color}
                className="flex w-full justify-between items-center"
                onClick={() => handleColorClick(color)}
              >
                <p className="text-gray-500 cursor-pointer">{color}</p>
                <div>
                  <p className="ring-1 ring-gray-400 rounded-full px-4 py-1 cursor-pointer">
                    {
                      products.filter(
                        (item) =>
                          item.color?.toLowerCase() === color.toLowerCase()
                      ).length
                    }
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <p className="font-bold">Materials</p>
          </div>
          {/*   {['Fabric','Leather','Metal','Plastic','rattan','Wood'].map(material => (
                  <div key={material} className='flex  justify-between items-center'>
                      <div className='flex items-center gap-x-2'>
                          <input 
                              id="default-checkbox" 
                              type="checkbox" value="" 
                              className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded "
                              checked={selectedMaterials.includes(material)} 
                              onChange={() => handleMaterialClick(material)} 
                          />
                          <p className='text-gray-500'>{material}</p>
                      </div>
                      <div>
                          <p className='ring-1 ring-gray-400 rounded-full px-4 py-1 '>{products.filter(item => item.material.toLowerCase() === material.toLowerCase()).length}</p>
                      </div>
                  </div>
              ))} */}
          <div>
            <p className="font-bold">Product status</p>
          </div>
          <div className="flex flex-col gap-2">
            {["On sale", "In stock", "On backorder"].map((status,index) => (
              <div key={index} className="flex items-center gap-2 ">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  checked={selectedStatus === status}
                  onChange={() => handleStatusClick(status)}
                />
                <label className="   text-gray-500 dark:text-gray-300">
                  {status}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute flex-col  flex gap-3  text-white bottom-28 left-6">
            <p className="font-bold">Upholstered chair</p>
            <p className="text-sm text-gray-200">Discount 10 %</p>
          </div>
          <div className="absolute flex-col  flex gap-3  text-white bottom-16 left-6">
            <p className="items-center  bg-white px-2 py-2 rounded-full text-black text-xs cursor-pointer ">
              Shop now
            </p>
          </div>
          <Image src={decor2} alt="decor" />
        </div>
      </div>
      {menuOpen && (
        <div
          onClick={handleNav}
          className="fixed inset-0 bg-black opacity-50 z-40"
        ></div>
      )}
      <div
        className={
          menuOpen
            ? "fixed z-50 left-0 top-0 w-[80%] lg:hidden h-screen bg-[#ecf3ec] ease-in duration-300"
            : "fixed z-50 left-[-100%] top-0 h-screen ease-in duration-300"
        }
      >
        <div
          onClick={handleNav}
          className="fixed flex pr-4 justify-end bg-white h-20 border-b-2 w-[80%] items-center z-40"
        >
          <div className="flex items-center">
            <AiOutlineClose size={20} />
            <p>Close</p>
          </div>
        </div>
        <div className="flex overflow-y-auto flex-col w-full gap-4 h-full pb-10 pt-16">
          <div className="flex-col gap-4 flex bg-white container w-full rounded-lg px-10 py-8">
            <p className="font-bold">Filter By Price</p>
            <Slider
              className={"slider"}
              onChange={handlePriceChange}
              value={values}
              min={1}
              max={999999}
            />
            <div className="flex justify-between">
              <div className="flex items-center">
                <p className="text-xs text-gray-400">Price:</p>
                <p className="text-xs">
                  {values[0]} TND - {values[1]} TND
                </p>
              </div>
              <p className="bg-orange-400 cursor-pointer rounded-full text-white text-xs px-4 py-1">
                filter
              </p>
            </div>
            <div>
              <p className="font-bold">Filter By Brand</p>
            </div>
            <div className="w-full">
              <input
                className="px-2 py-1 rounded-full border border-gray-300"
                type="text"
                placeholder="Find a Brand"
                value={selectedBrand}
                onChange={handleBrandChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              {["Hay", "vitra", "Poliform"].map((brand) => (
                <div
                  key={brand}
                  className="flex w-full justify-between items-center"
                  onClick={() => handleBrandClick(brand)}
                >
                  <p className="text-gray-500 cursor-pointer">{brand}</p>
                  <div>
                    <p className="ring-1 ring-gray-400 rounded-full px-4 py-1 cursor-pointer">
                      {
                        products.filter(
                          (item) =>
                            item.brand?.name.toLowerCase() ===
                            brand.toLowerCase()
                        ).length
                      }
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p className="font-bold">Color</p>
            </div>
            <div className="w-full">
              <input
                className="px-2 py-1 rounded-full border border-gray-300"
                type="text"
                placeholder="Find a Color"
                value={selectedColor}
                onChange={handleColorChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              {["Bone", "Dark Gray", "Gray", "Jet", "White"].map((color) => (
                <div
                  key={color}
                  className="flex w-full justify-between items-center"
                  onClick={() => handleColorClick(color)}
                >
                  <p className="text-gray-500 cursor-pointer">{color}</p>
                  <div>
                    <p className="ring-1 ring-gray-400 rounded-full px-4 py-1 cursor-pointer">
                      {
                        products.filter(
                          (item) =>
                            item.color?.toLowerCase() === color.toLowerCase()
                        ).length
                      }
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p className="font-bold">Materials</p>
            </div>
            {/*  {['Fabric','Leather','Metal','Plastic','rattan','Wood'].map(material => (
                      <div key={material} className='flex  justify-between items-center'>
                          <div className='flex items-center gap-x-2'>
                              <input 
                                  id="default-checkbox" 
                                  type="checkbox" value="" 
                                  className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded "
                                  checked={selectedMaterials.includes(material)} 
                                  onChange={() => handleMaterialClick(material)} 
                              />
                              <p className='text-gray-500'>{material}</p>
                          </div>
                          <div>
                              <p className='ring-1 ring-gray-400 rounded-full px-4 py-1 '>{products.filter(item => item.material.toLowerCase() === material.toLowerCase()).length}</p>
                          </div>
                      </div>
                  ))} */}
            <div>
              <p className="font-bold">Product status</p>
            </div>
            <div className="flex flex-col gap-2">
              {["On sale", "In stock", "On backorder"].map((status,index) => (
                <div key={index} className="flex items-center gap-2 ">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    checked={selectedStatus === status}
                    onChange={() => handleStatusClick(status)}
                  />
                  <label className="   text-gray-500 dark:text-gray-300">
                    {status}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="relative ">
            <div className="absolute flex-col flex gap-3 text-white bottom-28 left-6">
              <p className="font-bold">Upholstered chair</p>
              <p className="text-sm text-gray-200">Discount 10 %</p>
            </div>
            <div className="absolute flex-col flex gap-3 text-white bottom-16 left-6">
              <p className="items-center bg-white px-2 py-2 rounded-full text-black text-xs">
                Shop now
              </p>
            </div>
            <Image src={decor2} alt="decor" />
          </div>
        </div>
      </div>
      <div className="flex-col flex w-full  gap-5">
        <div className="flex items-center max-lg:hidden justify-between max-md:flex-col">
          <p className="text-gray-400">
            Showing 1-{itemsPerPage} of 16 results
          </p>
          <div className="flex items-center  gap-x-8 max-md:flex-col">
            <div className="flex gap-x-4">
              <div>
                <p className="font-semibold ">Show:</p>
              </div>
              <div className="flex">
                <p className="text-gray-400">9 /</p>
                <p>12</p>
                <p className="text-gray-400">/ 18 / 24</p>
              </div>
            </div>
            <div className="flex gap-x-2 items-center ">
              <button>
                <Image src={diag3} alt="diag" />
              </button>
              <button>
                <Image src={diag2} alt="diag" />
              </button>
              <button>
                <Image src={diag1} alt="diag" />
              </button>
              <form className="max-w-sm mx-auto">
                <select className="bg-gray-200 border border-gray-300 text-gray-400  rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option>Sort by average rating</option>
                </select>
              </form>
            </div>
          </div>
        </div>
        <div className="flex items-center px-3 justify-between lg:hidden">
          <div
            onClick={handleNav}
            className="flex items-center gap-2 cursor-pointer"
          >
            <AiOutlineMenu size={25} />
            <p>Showsidebar</p>
          </div>
          <Image src={sortby} alt="sortby" />
        </div>
        <div className=" grid   group  grid-cols-3 max-md:grid-cols-2 max-xl:grid-cols-2 max-md:gap-3 gap-8    ">
          {currentItems.map((item,index) => (
            <Link key={index} href={`/chairs/${item._id}`}>
              <div
                key={item._id}
                className="bg-white rounded-lg duration-500  lg:group-hover:scale-[0.85] lg:hover:!scale-100 h-[481px]   max-md:h-[320px]  relative"
              >
                <Image
                  className="absolute inset-0 mx-auto top-5 "
                  src={item.imageUrl || "/default-image.png"}
                  alt={item.name}
                  height={300}
                  width={300}
                />
                <div className="flex-col flex bottom-0 gap-2 absolute w-full px-2">
                  <div className="h-24 max-md:h-20">
                    <p className="text-gray-700 cursor-pointer text-3xl max-md:text-xl font-bold">
                      {item.name}
                    </p>
                    <div className="flex-col gap-1">
                      {/*  {item.discount && (
                                          <div className="flex gap-1">
                                              <p className="line-through opacity-50">{item.discount}</p>
                                              <p className='text-white rounded-lg bg-orange-400 px-2'>20%</p>
                                          </div>
                                      )} */}

                      {item.discount && item.discount !== 0 ? (
                        <div className="flex-col flex gap-1">
                          <p className="text-2xl font-bold rounded-lg text-orange-400 ">                            
                            {item.price -
                              item.price * (item.discount / 100)}{" "}
                            TND
                          </p>
                          <span className="text-gray-300 line-through  text-2xl font-bold">                            
                            {item.price} TND                            
                          </span>
                        </div>
                      ) : (
                        <p className="text-orange-400 text-2xl max-md:text-lg font-bold">
                          {item.price} TND
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image
                      className="size-5 max-md:size-4"
                      src={star}
                      alt="star"
                    />
                    <Image
                      className="size-5 max-md:size-4"
                      src={star}
                      alt="star"
                    />
                    <Image
                      className="size-5 max-md:size-4"
                      src={star}
                      alt="star"
                    />
                    <Image
                      className="size-5 max-md:size-4"
                      src={star}
                      alt="star"
                    />
                    <Image
                      className="size-5 max-md:size-4"
                      src={star}
                      alt="star"
                    />
                    <p className="flex gap-2 text-xl max-md:text-sm font-bold items-center">
                      5{/* {item.rating} */}{" "}
                    </p>
                  </div>
                  <div className="flex mb-1 text-lg max-md:text-sm justify-between">
                    <button className="AddtoCart bg-orange-400 hover:bg-[#15335D] text-white w-[50%] max-md:rounded-[3px] max-2xl:text-sm group/box">
                      <p className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform lg:group-hover/box:translate-x-[10%] ease  ">
                        Add to cart
                      </p>
                      <p className="  text-white absolute flex items-center justify-center w-full h-full duration-300 -translate-x-[100%] lg:group-hover/box:translate-x-[-30%] ease  ">
                        <FaCartShopping
                          className="w-6 h-6"
                          aria-hidden="true"
                          fill="currentColor"
                        />
                      </p>
                    </button>
                    <button className="AddtoCart bg-white  max-md:rounded-[3px]  w-[30%]  group/box text-orange-400 border border-orange-400  ">
                      <p className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform lg:group-hover/box:translate-y-[-100%] ease   ">
                        View
                      </p>
                      <p className="text-orange-400 absolute  w-full h-full flex items-center justify-center duration-300 -translate-y-[-100%] lg:group-hover/box:translate-y-0 ease  ">
                        <FaEye
                          className=" w-5 h-5   "
                          aria-hidden="true"
                          fill="currentColor"
                        />
                      </p>
                    </button>
                    <button
                      className="bg-white  max-md:rounded-[3px] AddtoCart  w-[13%]   text-orange-400 border border-orange-400  "
                      aria-label="wishlist"
                    >
                      <p className="absolute flex items-center justify-center w-full h-full    ">
                        <FaRegHeart
                          className="max-md:w-3 max-md:h-3 w-5 h-5   "
                          aria-hidden="true"
                          fill="currentColor"
                        />
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center items-center gap-x-4 ">
          <div
            className="flex items-center gap-1 cursor-pointer  "
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <FaArrowLeft className="cursor-pointer" />
            <p className="text-sm font-semibold">PREVIOUS</p>
          </div>
          {Array.from({ length: totalPages }, (_, i) => (
            <p
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`cursor-pointer text-xl rounded-full py-3 px-5 ${
                currentPage === i + 1 ? "bg-black text-white" : ""
              }`}
            >
              {i + 1}
            </p>
          ))}
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <p className="text-sm font-semibold">NEXT</p>
            <FaArrowRight className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
