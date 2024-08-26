
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { IoStorefrontOutline } from 'react-icons/io5';

interface review {
  _id: string;
  name: string;
  createdAt: string;
  rating: number;
  text: string;
}

interface Product {
  _id: string;
  name: string;
  user: {
    username: string;
  };
}

interface ReviewBlockProps {
  productId: string;
  product: Product | null;
}
const fetchReviews = async (productId: string) => {
  if (!productId) {
    throw new Error('Product ID is required');
  }

  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/review?id=${productId}`);
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  const data = await response.json();
  return data; // Ensure you return the fetched data
};


const ReviewBlock: React.FC<ReviewBlockProps> = async ({ productId, product }) => {





  const reviews = await fetchReviews(productId);


  const numberOfReviews = reviews.length;

  if (!product) {
    return <div className="h-[495px]">Product not found.</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="px-4 flex items-center justify-between">
        <label htmlFor="review" className="text-lg uppercase">{numberOfReviews} reviews for {product.name}</label>
        <select id="review" className="bg-gray-200 border border-gray-300 text-[#525566] rounded-full block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-[#525566] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option>default</option>
        </select>
      </div>
      {/* bottom */}
      <div className="grid grid-cols-2 max-md:grid-cols-1">
        {reviews.length === 0 ? (
          <div className="w-full max-lg:w-full flex flex-col p-4">
            <div className="flex flex-col gap-20 border-2 border-[#525566] rounded-t-lg px-4 py-8">
              <p className="text-[#525566]">No reviews yet.</p>
            </div>
          </div>
        ) : (
          reviews.map((review) => (
            <div key={review._id} className="w-full max-lg:w-full flex flex-col p-4">
              <div className="flex flex-col gap-8 border-2 border-[#525566] rounded-t-lg px-4 py-8">
                <div className="flex flex-col gap-8">
                  <div>
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-bold uppercase">{review.name}</p>
                      <p className="text-[#525566]">
                        {new Date(review.createdAt).toLocaleDateString("en-US", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })}
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
                  <p className="text-[#525566]">{review.text}</p>
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
              <div className="flex flex-col border-2 bg-gray-200 border-[#525566] rounded-b-lg px-4 py-8">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <IoStorefrontOutline size={30} className="text-primary" />
                      <p className="text-lg font-bold">{product.user.username}</p>
                    </div>
                    <p className="text-[#525566]">April 12, 2023</p>
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
          ))
        )}
      </div>
    </div>
  );
};

export default ReviewBlock;
