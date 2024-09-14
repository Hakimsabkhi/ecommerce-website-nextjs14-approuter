"use client";
import React from 'react';
import Image from 'next/image';
import { CartItem } from '@/store/cartSlice'; // Adjust the import based on where CartItem is defined

interface OrderSummaryProps {
  data: {
    totalPrice: number;
    totalDiscount: number;
    items: CartItem[];
  };
// Add items parameter
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ data}) => {
  const { totalPrice, totalDiscount, items } = data;

  return (
    <div className="py-20 w-full flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6">Order Summary</h1>
        
        <div className="flex flex-col divide-y divide-gray-200">
          {items.map((item) => (
            <div key={item._id} className="py-4 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Image
                  className="rounded-lg"
                  src={item.imageUrl || "/path/to/default-image.jpg"}
                  alt={item.name}
                  width={100}
                  height={100}
                />
                <div>
                  <p className="text-lg font-semibold">{item.name}</p>
                  {item.discount != null && item.discount > 0 ? (
                    <p className="text-sm text-gray-600">
                      {(
                        item.price - (item.price * item.discount) / 100
                      ).toFixed(2)} TND (Discounted)
                    </p>
                  ) : (
                    <p className="text-sm text-gray-600">
                      {item.price.toFixed(2)} TND
                    </p>
                  )}
                  <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                </div>
              </div>
              <p className="text-lg font-bold">
                {(
                  (item.discount != null && item.discount > 0
                    ? (item.price - (item.price * item.discount) / 100) * item.quantity
                    : item.price * item.quantity)
                ).toFixed(2)} TND
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t border-gray-300 pt-4">
          <div className="flex justify-between text-lg font-semibold">
            <span>Discount</span>
            <span>{totalDiscount.toFixed(2)} TND</span>
          </div>
          <div className="flex justify-between text-lg font-semibold mt-2">
            <span>Total</span>
            <span>{totalPrice.toFixed(2)} TND</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
