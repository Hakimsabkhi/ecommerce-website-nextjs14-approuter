import React from "react";
import { notFound } from "next/navigation";
import FirstBlock from "@/components/SingleProduct/FirstBlock";
import SecondBlock from "@/components/SingleProduct/SecondBlock";
import ThirdBlock from "@/components/SingleProduct/ThirdBlock";
import ForthBlock from "@/components/SingleProduct/ForthBlock";
import FifthBlock from "@/components/SingleProduct/FifthBlock";

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
  user: User;
}

interface Brand {
  _id: string;
  name: string;
  place: string;
  imageUrl: string;
}

interface User {
  username: string;
}

interface PageProps {
  product: ProductData ;
}

// Fetch product data on the server
 async function getProduct(id: string): Promise<ProductData> {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}api/products/getProductById/${id}`
  );
  if (!res.ok) {
    throw new Error("Product not found");
  }
  const data: ProductData = await res.json();
  return data;
}


// Fetch the product data during server-side rendering
export default async function Page({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  if (!product) {
    notFound(); // Redirects to a 404 page if the product is not found
  }

  return (
    <div>
      <FirstBlock product={product} />
      <SecondBlock product={product} />
      <ThirdBlock product={product} />
      <ForthBlock product={product} />
      <FifthBlock />
    </div>
  );
};


