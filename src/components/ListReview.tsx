"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Dialog from './dialogDelete/Dialog';


interface reviewData {
    _id: string;
    name: string;
    email:string;
    createdAt: string;
    rating: number;
    text: string;
  }

const ListReviw: React.FC = () => {
    
  const params = useParams<{ id?: string }>(); // Adjust params based on your route setup
  const productId = params.id ?? "";
    const [addedReviews, setAddedReviews] = useState<reviewData[]>([]);
    const [filteredReviews, setFilteredReviews] = useState<reviewData[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const ReviewsesPerPage = 5; // Number of categories to display per page
    const router = useRouter();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const handleDeleteClick = () => {
        setIsDialogOpen(true);
      };
    
      const handleCloseDialog = () => {
        setIsDialogOpen(false);
      };
    const handleback = () => {
        router.push('/admin/reviewlist'); // Navigate to the home page
    };

  
    const DeleteReviews = async (ReviewsId: string) => {
        
        try {
            const response = await fetch(`/api/review/deleteReviwerById/${ReviewsId}`, {
                method: 'DELETE',
            });
    
            if (!response.ok) {
                throw new Error('Failed to delete review');
            }
            toast.success("Brand delete successfully!", );
            handleCloseDialog();
            // Refresh reviews after deletion
            getReviews();
        } catch (err: any) {
            setError(`[Reviews_DELETE] ${err.message}`);
        } 
    };
    

    const getReviews = async () => {
        
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
        } 
    };
    

    useEffect(() => {
        getReviews();
    }, []);

    useEffect(() => {
        const filtered = addedReviews.filter(Reviews =>
            Reviews.name.toLowerCase().includes(searchTerm.toLowerCase())             
        );
        setFilteredReviews(filtered);
        setCurrentPage(1); // Reset to the first page when search term changes
    }, [searchTerm, addedReviews]);

    const indexOfLastReviews = currentPage * ReviewsesPerPage;
    const indexOfFirstReviews = indexOfLastReviews - ReviewsesPerPage;
    const currentReviewss = filteredReviews.slice(indexOfFirstReviews, indexOfLastReviews);
    const totalPages = Math.ceil(filteredReviews.length / ReviewsesPerPage);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);



    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='mx-auto w-[90%] py-8 flex flex-col gap-8'>
            <div className="flex items-center justify-between">
                <p className='text-3xl font-bold'>REVIEW</p>
                <button onClick={handleback} className='bg-[#15335D] w-28 h-10 rounded-md text-white'>Back</button>
            </div>
            <input
                type="text"
                placeholder="Search categories"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='mt-4 p-2 border border-gray-300 rounded'
            />
            <table className="table-auto w-full mt-4">
                <thead>
                    <tr>
                        
                        <th className="py-2 text-start uppercase ">name</th>
                        <th className=" py-2 text-start uppercase ">email</th>
                        <th className=" py-2 text-start uppercase ">rating</th>
                        <th className=" py-2 text-start uppercase ">                        
                        text                                                                                                                   
                        </th>
                       
                        <th className=" py-2 text-start uppercase ">                        
                        createdAt                                                                                                                   
                        </th>
                        <th className=" py-2 text-center uppercase ">                        
                            Action                                                                                                                  
                        </th>
                        
                    </tr>
                </thead>
                <tbody>
                    {currentReviewss.map((item, index) => (
                        <tr key={index} className='bg-[#15335D] text-white'>
                            <td className="border px-4 py-2 ">{item.name}</td>
                            <td className="border px-4 py-2">{item.email}</td>
                            <td className="border px-4 py-2 ">      <div className="text-orange-400 flex items-center gap-1">
                    {[...Array(item.rating)].map((_, index) => (
                  <FaStar key={index} />
                ))}
                {[...Array(5 - item.rating)].map((_, index) => (
                  <FaStar key={index + item.rating} className="text-gray-300" />
                ))}
              
                    </div></td>
                            <td className="border-b px-4 py-2  ">{item.text}</td>
                            <td className="border-b px-4 py-2  ">{new Date(item.createdAt).toLocaleDateString(
                          "FR-FR",
                          {
                            day: "2-digit",
                            month: "numeric",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                            timeZone: "Africa/Tunis", 
                                                
                        })}</td>

                            <td className="border-b flex items-center justify-center gap-2 py-2  ">                                
                                    <Link href={`/admin/reviewlist/${productId}/${item._id}`}>
                                        <button className="bg-primary w-28 h-10 rounded-md">
                                            Reply
                                        </button>
                                    </Link>
                                    <button onClick={handleDeleteClick}  className="bg-primary w-28 h-10 rounded-md">
                                        Delete
                                    </button>
                                    {isDialogOpen &&     < Dialog  handleCloseDialog={handleCloseDialog} Delete={DeleteReviews} id={item._id}
                                    name={item.name}/>}                                         
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='flex justify-center mt-4'>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => paginate(index + 1)}
                        className={`mx-1 px-3 py-1 rounded ${
                            currentPage === index + 1 ? 'bg-primary text-white' : 'bg-gray-300 text-black'
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        
        </div>
    );
};

export default ListReviw;
