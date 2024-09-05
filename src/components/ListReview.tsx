"use client";

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Dialog from './dialogDelete/Dialog';
import { FaStar } from 'react-icons/fa6';
import Link from 'next/link';

interface ReviewData {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
  rating: number;
  text: string;
}

const ListReview: React.FC = () => {
  const { id: productId } = useParams<{ id?: string }>();
  const [addedReviews, setAddedReviews] = useState<ReviewData[]>([]);
  const [filteredReviews, setFilteredReviews] = useState<ReviewData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const reviewsPerPage = 5; // Number of reviews to display per page
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDeleteClick = () => {
  
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    
  };

  const handleDeleteConfirm = async (id: string) => {
  
    try {
      const response = await fetch(`/api/review/deleteReviwerById/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete review');
      }
      toast.success("Review deleted successfully!");
      handleCloseDialog();
      getReviews();
    } catch (err: any) {
      setError(`[Reviews_DELETE] ${err.message}`);
    }
  };

  const getReviews = async () => {
    if (!productId) return;

    try {
      const response = await fetch(`/api/review/getAllReviewByProduct?id=${productId}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Failed to fetch reviews');
      }

      const data = await response.json();
      setAddedReviews(data);
      setFilteredReviews(data);
    } catch (err: any) {
      setError(`[Reviews_GET] ${err.message}`);
    }finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    getReviews();
  }, [productId]);

  useEffect(() => {
    const filtered = addedReviews.filter(review =>
      review.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredReviews(filtered);
    setCurrentPage(1); // Reset to the first page when search term changes
  }, [searchTerm, addedReviews]);

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = filteredReviews.slice(indexOfFirstReview, indexOfLastReview);
  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  if (loading) {
    return (
      /* loading start */
      <div className="flex justify-center items-center h-[400px]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
      /*  loading end  */
    );
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="py-2  relative">
      <div className="w-[93%] px-4 md:px-8 lg-6 mx-auto">
        <h2 className="font-manrope font-bold text-4xl text-black text-center mb-11">
          People Love Us
        </h2>
        <input
          type="text"
          placeholder="Search reviews..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-6 px-4 py-2 border rounded-md w-full md:w-1/2 mx-auto"
        />
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xl font-bold text-gray-950 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xl font-bold text-gray-950  uppercase tracking-wider">Reviw</th>
              <th className="px-6 py-3 text-left text-xl font-bold text-gray-950  uppercase tracking-wider">Rating</th>
              <th className="px-6 py-3 text-left text-xl font-bold text-gray-950  uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xl font-bold text-gray-950  uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-[#15335D] divide-y divide-gray-200">
            {currentReviews.map(review => (
              <tr key={review._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm  text-white font-bold sm:flex gap-6 items-center">  <img
                    src="https://pagedone.io/asset/uploads/1704364459.png"
                    alt="Portrait of Robert"
                    className="w-10 h-10 rounded-full"
                  /> {review.name}</td>
                   <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                    {review.text}
                   </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                <div className="text-orange-400 flex items-center gap-1">
                {[...Array(review.rating)].map((_, index) => (
                  <FaStar key={index} />
                ))}
                {[...Array(5 - review.rating)].map((_, index) => (
                  <FaStar key={index + review.rating} className="text-gray-300" />
                ))}
                </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-warning-200">
                  {new Date(review.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex items-center gap-2 text-white">
                                    <Link href={`/admin/reviewlist/${productId}/${review._id}`}>
                                        <button className="bg-primary w-28 h-10 rounded-md">
                                            Reply
                                        </button>
                                    </Link>
                                    <button onClick={()=>handleDeleteClick()}  className="bg-primary w-28 h-10 rounded-md">
                                        Delete
                                    </button>
                                    {isDialogOpen &&     < Dialog  handleCloseDialog={handleCloseDialog} Delete={handleDeleteConfirm} id={review._id}
                                    name={review.name}/>}
                                    
                                </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-6">
          <nav>
            <ul className="flex">
              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index} className="mx-1">
                  <button
                    onClick={() => paginate(index + 1)}
                    className={`px-4 py-2 border rounded ${
                      currentPage === index + 1 ? 'bg-primary text-white' : 'bg-white text-black'
                    }`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      
    </div>
  );
};

export default ListReview;
