"use client";
import React, { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import {
  aboutbrand,
  facebook,
  linkedin,
  pinterest,
  aboutchair,
  abouttable,
  aboutarmchair,
  aboutstorage,
} from "@/assets/image";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { IoStorefrontOutline } from "react-icons/io5";
import { useParams } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "next-auth/react";
interface Product {
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
  user: user;
}

interface Brand {
  _id: string;
  place: string;
  name: string;
  imageUrl: string;
}
interface reviewData {
  _id: string;
  name: string;
  createdAt: string;
  rating: number;
  text: string;
}
interface user {
  username: string;
}

const ForthBlock: React.FC<{ product: Product | null }> = ({ product }) => {
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>("");
  const [reviews, setReviews] = useState<reviewData[]>([]);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [saveInfo, setSaveInfo] = useState<boolean>(false);
  const params = useParams<{ id?: string }>(); // Adjust params based on your route setup
  const productId = params.id ?? "";
  const { data: session } = useSession();
  useEffect(() => {
    const fetchReviews = async () => {
      if (productId) {
        try {
          const response = await fetch(`/api/review?id=${productId}`);
          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }
          const data = await response.json();
          setReviews(data);
        } catch (error) {
          console.error("Error fetching reviews:", error);
        }
      }
    };

    fetchReviews();
  }, [productId]);
  const numberOfReviews = reviews.length;
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const finalName = name || session?.user?.name || '';
    const finalEmail = email || session?.user?.email || '';
    
    const reviewData = new FormData();
    reviewData.append("rating", rating.toString());
    reviewData.append("text", review);
    reviewData.append("email", finalEmail); // Correctly naming the field
    reviewData.append("name", finalName); // Correctly naming the field
    reviewData.append("product", productId);

    try {
      const response = await axios.post("/api/review", reviewData);

      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }

      // Handle successful response here
      toast.success("Review submitted successfully!", {
        position: "top-right" as any, // Cast to any
      });
    } catch (error) {
      // Handle error here
      console.error("Error submitting review:", error);

      toast.error("Failed to submit review", {
        position: "top-right" as any, // Cast to any
      });
    }
  };
  return (
    <main className=" desktop max-lg:w-[95%] my-10 bg-white rounded-lg flex flex-col gap-20  ">
      {/* top */}
      <div className="flex max-lg:flex-col justify-between">
        <div className="w-[50%] max-lg:w-full flex flex-col  gap-8 p-4">
          <div>
            <p className="text-xl ">Customer Review</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-4xl font-bold">{/* {product.rating} */}5</p>
            <div className="text-primary flex items-center gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-[#525566] text-sm">2 reviews</p>
          </div>
          <div className="flex flex-col gap-3">
            <div className=" flex items-center gap-2">
              <div className="flex gap-1 items-center text-primary">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="w-full bg-primary rounded-full h-2.5 dark:bg-gray-700"></div>
              <p className="text-[#525566]">2</p>
            </div>
            <div className=" flex items-center gap-2">
              <div className="flex gap-1 items-center text-primary">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"></div>
              <p className="text-[#525566]">0</p>
            </div>
            <div className=" flex items-center gap-2">
              <div className="flex gap-1 items-center text-primary">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
                <FaRegStar />
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"></div>
              <p className="text-[#525566]">0</p>
            </div>
            <div className=" flex items-center gap-2">
              <div className="flex gap-1 items-center text-primary">
                <FaStar />
                <FaStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"></div>
              <p className="text-[#525566]">0</p>
            </div>
            <div className=" flex items-center gap-2">
              <div className="flex gap-1 items-center text-primary">
                <FaStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"></div>
              <p className="text-[#525566]">0</p>
            </div>
          </div>
        </div>
        <div className="w-[50%] max-lg:w-full p-4 ">
          <div className="flex flex-col  gap-5">
            <p className="text-xl">ADD A REVIEW</p>
            <p className="text-[#525566]">
              Your email adress will not be published. Required fields are
              marked *
            </p>
            <form onSubmit={handleSubmit} className="space-y-4 h-[516px]">
              <div className="flex items-center gap-3">
                <p>Your rating:</p>
                <div className="text-primary flex items-center gap-1">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      onClick={() => setRating(index + 1)}
                      className={`cursor-pointer ${
                        index < rating ? "text-primary" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <label className="flex flex-col gap-4">
                <label>Your review:</label>
                <textarea
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-40 px-2.5 py-3"
                  placeholder=""
                  required
                />
              </label>

           {!session &&   (
            <div>
              <label className="flex flex-col gap-2">
                <label>Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder=""
                  required
                />
              </label>

              <label className="flex flex-col gap-2">
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder=""
                  required
                />
              </label>
              </div>
            )}

              <label className="flex items-center gap-1">                
                <input
                  
                  type="checkbox"
                  checked={saveInfo}
                  onChange={() => setSaveInfo(!saveInfo)}
                  className="w-5 h-5 rounded bg-[#525566]"
                />
                <p className="font-bold">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </p>
              </label>

              <button
                type="submit"
                className="text-white bg-primary hover:bg-[#15335D] h-10 w-[20%] font-bold rounded-md"
              >
                Submit
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
      {/* mid */}
      <div className="flex flex-col gap-4">
        <div className="px-4 flex items-center justify-between">
          <label htmlFor="review" className="text-lg uppercase">{numberOfReviews} reviews for {product?.name}</label>
          <select id="review" className="bg-gray-200 border border-gray-300 text-[#525566]  rounded-full  block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-[#525566] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>default</option>
          </select>
        </div>
        {/* bottom */}
        {product ?(
        <div className="grid grid-cols-2 max-md:grid-cols-1 ">
          {/* first half */}
            {reviews.map((review) => (
            <div key={review._id} className="w-full max-lg:w-full flex flex-col   p-4">
              <div className="flex flex-col gap-20 border-2 border-[#525566] rounded-t-lg px-4 py-8 ">
                <div className="flex flex-col gap-8 ">
                  <div>
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-bold uppercase">{review.name}</p>
                      <p className="text-[#525566]">
                        {new Date(review.createdAt).toLocaleDateString(
                          "en-US",
                          {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",                            
                          }
                        )}
                      </p>
                    </div>
                    <div className="text-primary flex items-center gap-1">
                    {[...Array(review.rating)].map((_, index) => (
                  <FaStar key={index} />
                ))}
                {[...Array(5 - review.rating)].map((_, index) => (
                  <FaStar key={index + review.rating} className="text-gray-300" />
                ))}
              
                    </div>
                  </div>
                  <p className="text-[#525566]">
                    {review.text}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <AiOutlineLike size={25} />
                    <p className="text-2xl">0</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <AiOutlineDislike size={25} />
                    <p className="text-2xl">0</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col  border-2 bg-gray-200 border-[#525566] rounded-b-lg px-4 py-8">
                <div className="flex flex-col gap-4 ">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <IoStorefrontOutline
                        size={30}
                        className="text-primary"
                      />
                      <p className="text-lg font-bold">{product.user.username}</p>
                    </div>
                    <p className="text-[#525566]">April 12,2023</p>
                  </div>
                  <p className="text-[#525566]">
                    Rigid proponents of content strategy may shun the use of
                    dummy copy but then designers might want to ask them to
                    provide style sheets with the copy decks they supply that
                    are in tune with the design direction they require.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>):(<div className="h-[495px]"></div>)}
      </div>
    </main>
  );
};

export default ForthBlock;
