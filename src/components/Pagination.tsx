import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return; // Ensure new page is valid
    onPageChange(newPage); // Trigger the state change
  };
  

  const getDisplayedPages = () => {
    const pages = [];

    if (totalPages <= 4) {
      // Show all pages if total pages are 4 or less
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 2) {
        // Show 1, 2, 3... last
        pages.push(1, 2, 3);
        if (totalPages > 3) pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 1) {
        // Show 1... (last - 2), (last - 1), last
        pages.push(1);
        if (totalPages > 3) pages.push('...');
        pages.push(totalPages - 2, totalPages - 1, totalPages);
      } else {
        // Show previous, current, next, and last
        pages.push(currentPage - 1, currentPage, currentPage + 1);
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="flex justify-center items-center gap-4 pb-8">
      {/* Previous button */}
      <div
        className={`flex items-center gap-1 cursor-pointer ${
          currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <FaArrowLeft className="cursor-pointer" />
        <p className="text-sm font-semibold">Back</p>
      </div>

      {/* Display pages */}
      {getDisplayedPages().map((page, index) =>
        typeof page === 'number' ? (
          <p
            key={index}
            onClick={() => handlePageChange(page)}
            className={`cursor-pointer text-sm rounded py-2 px-4 ${
              currentPage === page ? 'bg-secondary text-white' : ''
            }`}
          >
            {page}
          </p>
        ) : (
          <p key={index} className="text-sm">
            {page}
          </p>
        )
      )}

      {/* Next button */}
      <div
        className={`flex items-center gap-1 cursor-pointer ${
          currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <p className="text-sm font-semibold">Next</p>
        <FaArrowRight className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Pagination;