// components/ProductCard.tsx
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaEye, FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { star } from "@/assets/image";
import { useParams } from "next/navigation";

interface Brand {
    _id: string;
    name: string;
  }

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
  
interface ProductCardProps {
  item: ProductData;
}
interface params{
  product: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  const params = useParams() as { [key: string]: string | string[] | undefined };
  const product = params.product as string | undefined;
  return (
    <Link href={`/${product}/${item._id}`}>
      <div className="bg-white rounded-lg duration-500 lg:group-hover:scale-[0.85] lg:hover:!scale-100 h-[481px] max-md:h-[320px] relative">
        <Image
          className="absolute inset-0 mx-auto top-5"
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
              {item.discount && item.discount !== 0 ? (
                <div className="flex-col flex gap-1">
                  <p className="text-2xl font-bold rounded-lg text-orange-400">
                    {item.price - item.price * (item.discount / 100)} TND
                  </p>
                  <span className="text-gray-300 line-through text-2xl font-bold">
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
            <Image className="size-5 max-md:size-4" src={star} alt="star" />
            <Image className="size-5 max-md:size-4" src={star} alt="star" />
            <Image className="size-5 max-md:size-4" src={star} alt="star" />
            <Image className="size-5 max-md:size-4" src={star} alt="star" />
            <Image className="size-5 max-md:size-4" src={star} alt="star" />
            <p className="flex gap-2 text-xl max-md:text-sm font-bold items-center">
              5
            </p>
          </div>
          <div className="flex mb-1 text-lg max-md:text-sm justify-between">
            <button className="AddtoCart bg-orange-400 hover:bg-[#15335D] text-white w-[50%] max-md:rounded-[3px] max-2xl:text-sm group/box">
              <p className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform lg:group-hover/box:translate-x-[10%] ease">
                Add to cart
              </p>
              <p className="text-white absolute flex items-center justify-center w-full h-full duration-300 -translate-x-[100%] lg:group-hover/box:translate-x-[-30%] ease">
                <FaCartShopping
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                />
              </p>
            </button>
            <button className="AddtoCart bg-white max-md:rounded-[3px] w-[30%] group/box text-orange-400 border border-orange-400">
              <p className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform lg:group-hover/box:translate-y-[-100%] ease">
                View
              </p>
              <p className="text-orange-400 absolute w-full h-full flex items-center justify-center duration-300 -translate-y-[-100%] lg:group-hover/box:translate-y-0 ease">
                <FaEye
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                />
              </p>
            </button>
            <button
              className="bg-white max-md:rounded-[3px] AddtoCart w-[13%] text-orange-400 border border-orange-400"
              aria-label="wishlist"
            >
              <p className="absolute flex items-center justify-center w-full h-full">
                <FaRegHeart
                  className="max-md:w-3 max-md:h-3 w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                />
              </p>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
