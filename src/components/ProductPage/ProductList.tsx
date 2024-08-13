// ProductPage/ProductList.tsx
import React from "react";
import ProductCard from "./ProductCard";

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
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid group grid-cols-3 max-md:grid-cols-2 max-xl:grid-cols-2 max-md:gap-3 gap-8">
      {products.map((item) => (
        <ProductCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default ProductList;
