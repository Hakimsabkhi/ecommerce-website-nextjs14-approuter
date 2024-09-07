"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";


type User = {
  _id: string;

  // other user fields
};

type Product = {
  _id: string;
  name: string;
  ref: string;
  imageUrl: string;
  user: User; // Reference to a User document or User ID
  createdAt: Date;
  updatedAt: Date;
};

type AddedProductsProps = {
  products: Product[];
};

const ListerReview: React.FC<AddedProductsProps> = ({ products }) => {
  console.log(products);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 5;

  useEffect(() => {
    setFilteredProducts(products);
    setCurrentPage(1);
    setLoading(false);
  }, [products]);

  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.ref.toLowerCase().includes(searchTerm.toLowerCase())
      // product.user.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [searchTerm, products]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

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
    <div className="mx-auto w-[90%] py-8 flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <p className="text-3xl font-bold uppercase"> Product Reviews</p>
    
      </div>
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mt-4 p-2 border border-gray-300 rounded"
      />
      <table className="table-auto w-full mt-4">
        <thead>
          <tr className="bg-gray-800 ">
            <th className="px-4 py-2 text-center">REF</th>
            <th className="px-4 py-2 text-center">Name</th>
            <th className="px-4 py-2 text-center ">ImageURL</th>
            <th className="px-4 py-2  text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((item) => (
            <tr key={item._id} className="bg-white text-balck">
              <td className="border px-4 py-2 text-center">{item.ref}</td>
              <td className="border px-4 py-2 text-center">{item.name}</td>
              <td className="border px-4 py-2  text-center">
                <Image
                  alt={item.name}
                  src={item.imageUrl}
                  height={60}
                  width={60}
                   className="mx-auto"
                />
              </td>
              <td className="border px-4 py-2 flex justify-center items-center">
                <Link href={`/admin/reviewlist/${item._id}`}>
                  <button className="bg-gray-800 hover:bg-gray-600 text-white  w-28 h-10 rounded-md uppercase">
                    Reviews
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === index + 1
                ? "bg-gray-800 text-white"
                : "bg-gray-300 text-black hover:bg-gray-600 hover:text-white"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ListerReview;
