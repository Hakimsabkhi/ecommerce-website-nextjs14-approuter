"use client"
import Address from '@/components/prossess/address';
import Prossess from '@/components/prossess/prossess';
import ShoppingCart from '@/components/ShoppingCart';
import React, { useState } from 'react';

const Page = () => {
     // State to control the visibility of the Address component
     const [currentStep, setCurrentStep] = useState<'cart' | 'checkout' | 'order-summary'>('cart');

     const [showAddress, setShowAddress] = useState(false);
const [checkoutData, setCheckoutData] = useState({
    totalPrice: 0,
    totalDiscount: 0,
  });
     // Function to handle checkout click
     const handleCheckout = (price:number,discount:number) => {
         setShowAddress(true); 
         setCurrentStep('checkout');// Show the Address component when "Checkout" is clicked
         setCheckoutData({ totalPrice: price, totalDiscount: discount });
     };
    return (
        <div>
             <Prossess  currentStep={currentStep}/>
            {currentStep === 'cart' && !showAddress && <ShoppingCart onCheckout={handleCheckout} />}
            {currentStep === 'checkout' &&   <Address totalPrice={checkoutData.totalPrice} totalDiscount={checkoutData.totalDiscount}/>}
        </div>
    );
}

export default Page;
