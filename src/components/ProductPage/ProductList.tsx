// ProductPage/ProductList.tsx
import React from "react";
import ProductCard from "./ProductCard";
import { AiOutlineMenu } from "react-icons/ai";

interface ProductData {
  _id: string;
  name: string;
  description: string;
  ref: string;
  price: number;
  imageUrl?: string;
  brand?: Brand;
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

interface ProductListProps {
  products: ProductData[];
  menuOpen: boolean;
  handleNav: () => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, menuOpen,
  handleNav }) => {
  return (
    <div>
      <div onClick={handleNav} className="flex items-center gap-2 cursor-pointer lg:hidden">
          <AiOutlineMenu size={25} />
          <p>Showsidebar</p>
      </div>
      <div className="grid group grid-cols-3 max-md:grid-cols-1 max-xl:grid-cols-2 max-md:gap-3 gap-8">
        {products.map((item) => (
          <ProductCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
