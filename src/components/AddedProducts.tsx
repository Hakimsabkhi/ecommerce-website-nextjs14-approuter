"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import { toast } from "react-toastify";
import Dialog from "./dialogDelete/Dialog";

type User = {
  _id: string;
  username: string;
  // other user fields
};

type Product = {
  _id: string;
  name: string;
  description: string;
  ref: string;
  price: number;
  imageUrl: string;
  category: string;
  stock: number;
  user: User; // Reference to a User document or User ID
  discount: number;
  status:string;
  createdAt: Date;
  updatedAt: Date;
};

type AddedProductsProps = {
  products: Product[];
};

const AddedProducts: React.FC<AddedProductsProps> = ({ products }) => {
  
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 5;
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState({ id: '', name: '' });
  const handleDeleteClick = (product:Product) => {
    setSelectedProduct({ id: product._id, name: product.name });
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const getProducts = async () => {
    try {
      const response = await fetch("/api/products/getAllProduct", {
        method: "GET",
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setFilteredProducts(data);
    } catch (err: any) {
      setError(`[products_GET] ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (productId: string) => {
    try {
      const response = await fetch(`/api/products/deleteProduct/${productId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete the product");
      }
      getProducts();
      setCurrentPage(1);
      toast.success("Category delete successfully!");
      handleCloseDialog();
    } catch (err: any) {
      // setError(`[Product_DELETE] ${err.message}`);
      toast.error("faild Product_DELETE");
    }
  };
  const updateProductStatus = async (productId: string, newStatus: string) => {
    try {
      const updateFormData = new FormData();
      updateFormData.append('status', newStatus);
  
      const response = await fetch(`/api/products/updateStatusProduct/${productId}`, {
        method: 'PUT',
        
        body: updateFormData, // Sending JSON with the new status
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log('Product status updated successfully:', data);
      
      // Optionally refresh the product list or update the UI here
      getProducts(); // Refresh the product list if needed
    } catch (error) {
      console.error('Failed to update product status:', error);
      // Optionally show an error message to the user
      toast.error('Failed to update product status');
    }
  };
  

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.ref.toLowerCase().includes(searchTerm.toLowerCase())
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
        <p className="text-3xl font-bold">ALL Products</p>

        <Link href="/admin/productlist/addproduct">
          <button className="bg-gray-800 font-bold hover:bg-gray-600 text-white rounded-lg w-[200px] h-10">
            <p>Add the new Product</p>
          </button>
        </Link>
      </div>
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mt-4 p-2 border border-gray-300 rounded"
      />
      <table className="table-auto w-full mt-4">
        <thead  >
          <tr className="bg-gray-800">
            {/*  <th className="text-start py-2">ID</th> */}
            <th className="px-4 py-2">REF</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">ImageURL</th>
            <th  className="px-4 py-2">Created By</th>
            <th className="px-4 text-center py-2"> Action</th>
            
          </tr>
        </thead>
        <tbody >
          {currentProducts.map((item) => (
            <tr key={item._id} className="bg-white text-balck ">
              {/* <td className="border px-4 py-2">{item._id}</td> */}
              <td className="border px-4 py-2  ">{item.ref}</td>
              <td className="border px-4 py-2   ">{item.name}</td>
              <td className="border px-4 py-2 ">{item.imageUrl}</td>
              <td className="border px-4 py-2  ">{item?.user?.username}</td>
              <td className="border px-4 py-2    ">
                <div className="flex items-center gap-2">
                  <select
                   className={`w-50  text-black  rounded-md p-2  ${
                    item.status === 'in-stock'
                     ? "bg-gray-800 text-white"
                : "bg-red-700 text-white"
                  }`}

                    value={item.status} // Set the default value
                    onChange={(e) => updateProductStatus(item._id, e.target.value)} 
                 >
                    <option value="in-stock" className="text-white">
                      In stock
                    </option>
                    <option value="out-of-stock" className="text-white">
                      Out of stock
                    </option>
                  </select>

                  <Link href={`/admin/productlist/${item._id}`}>
                    <button className="bg-gray-800 text-white w-28 h-10  hover:bg-gray-600 rounded-md">
                      Modify
                    </button>
                  </Link>
                  <button
                    onClick={()=>handleDeleteClick(item)}
                    className="bg-gray-800 text-white w-28 h-10 hover:bg-gray-600 rounded-md"
                  >
                    Delete
                  </button>
                  {isDialogOpen && (
                    <Dialog
                      handleCloseDialog={handleCloseDialog}
                      Delete={deleteProduct}
                      id={selectedProduct.id}
                      name={selectedProduct.name}
                    />
                  )}
                </div>
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

export default AddedProducts;
