"use client";
import Address from '@/components/prossess/address';
import OrderSummary from '@/components/prossess/OrderSummary';
import Prossess from '@/components/prossess/prossess';
import ShoppingCart from '@/components/ShoppingCart';
import { CartItem } from '@/store/cartSlice';
import React, { useState } from 'react';

const Page = () => {
  // State to control the visibility of the Address component
  const [currentStep, setCurrentStep] = useState<'cart' | 'checkout' | 'order-summary'>('cart');

  const [checkoutData, setCheckoutData] = useState({
    totalPrice: 0,
    totalDiscount: 0,
    items: [] as CartItem[],
    // Extend the state to include items
  });

  // Function to handle checkout click
  const handleCheckout = (price: number, discount: number, items: CartItem[]) => {
    setCheckoutData({ totalPrice: price, totalDiscount: discount, items});
    setCurrentStep('checkout'); // Show the Address component when "Checkout" is clicked
  };

  // Function to handle order summary
  const handleOrderSummary = () => {
 
    setCurrentStep('order-summary'); // Show the Order Summary component
  };

  return (
    <div>
      <Prossess currentStep={currentStep} />
      {currentStep === 'cart' && (
        <ShoppingCart onCheckout={handleCheckout} />
      )}
      {currentStep === 'checkout' && (
        <Address
        checkoutData={checkoutData}
        
          onOrderSummary={handleOrderSummary}
        />
      )}
      {currentStep === 'order-summary' && (
        <OrderSummary
          data={checkoutData}
         
        />
      )}
    </div>
  );
};

export default Page;
