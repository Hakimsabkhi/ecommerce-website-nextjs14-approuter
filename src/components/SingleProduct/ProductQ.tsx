"use client"
import React, { useState } from "react";
interface Product {
  _id: string;
  name: string;
  description: string;
  ref: string;
  price: number;
  imageUrl?: string;
  stock: number;
  discount?: number;
  color?: string;
  material?: string;
  status?: string;
}

interface ProductQProps {
  product: Product | null;
  addToCartHandler: (product: Product) => void;
}

const ProductQ: React.FC<ProductQProps> = ({ product,addToCartHandler }) => {

      if (!product) {
        return null; // Ensure the component returns null if product is not available
      }
      const [quantity, setQuantity] = useState<number>(1);

      const increaseQuantity = () => {
        if (quantity < product.stock) {
          setQuantity(prevQuantity => prevQuantity + 1);
        }
      };
    
      const decreaseQuantity = () => {
        if (quantity > 1) {
          setQuantity(prevQuantity => prevQuantity - 1);
        }
      };
      const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(1, Math.min(product.stock, parseInt(event.target.value, 10) || 1));
        setQuantity(value);
      };
    
  return (
    <>
      {product?.discount && product?.discount !== 0 ? (
        <div className="flex-col flex ">
          <span className="   text-primary line-through  text-2xl font-bold">
          <p className="text-gray-300">  {product.price} TND</p>
          </span>
          <p className="text-primary text-3xl font-bold max-lg:justify-center flex">
            {product.price - product.price * (product.discount / 100)} TND
          </p>
        </div>
      ) : (
        <p className="text-primary text-3xl font-bold max-lg:justify-center flex">
          {product?.price} TND
        </p>
      )}
<div className="flex items-center max-lg:flex-col gap-3 max-lg:justify-center">
{product.status != 'out-of-stock' ?  (product.stock > 0 ? (
    <>
      <p>Quantity</p>
      <div className="flex items-center">
      <div className="flex items-center space-x-2">
      <button
        onClick={decreaseQuantity}
        className="p-2 border-2 text-xl text-gray-700"
        disabled={quantity === 1}
      >
        -
      </button>
      <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                max={product.stock}
                className="p-3 border-2 text-xl text-center"
              />
      <button
        onClick={increaseQuantity}
        className="p-2 border-2 text-xl text-gray-700"
        disabled={quantity >= product.stock}
      >
        +
      </button>
    </div>{/* Assuming you want to show the quantity here */}
      </div>
      <button  onClick={() => addToCartHandler(product)} className="text-white bg-primary hover:bg-[#15335D] h-10 w-[20%] font-bold rounded-md">
        <p>Add to cart</p>
      </button>
      <button className="text-white bg-black h-10 w-[20%] font-bold rounded-md">
        <p>Buy now</p>
      </button>
    </>
  ) : (
    <button className="text-white bg-gray-500 h-10 w-[20%] font-bold rounded-md" disabled>
      <p>Out of stock</p>
    </button>
  )):(<button className="text-white bg-gray-500 h-10 w-[20%] font-bold rounded-md" disabled>
    <p>Out of stock</p>
  </button>)}
</div>

    </>
  );
};

export default ProductQ;
