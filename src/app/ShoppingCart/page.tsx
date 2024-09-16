"use client";
import Address from '@/components/prossess/address';
import OrderSummary from '@/components/prossess/OrderSummary';
import Prossess from '@/components/prossess/prossess';
import ShoppingCart from '@/components/ShoppingCart';
import { CartItem } from '@/store/cartSlice';
import React, { useState } from 'react';

interface address {
  _id: string;
  governorate: string;
  city: string;
  zipcode: string;
  address: string;
}

interface OrderItem {
  product: string;
  name: string;
  quantity: number;
  image: string;
  discount: number;
  price: number;
  _id: string;
}

interface OrderDetails {
  _id: string;
  user: string;
  ref: string;
  address: address;
  orderItems: OrderItem[];
  paymentMethod: string;
  total: number;
  orderStatus: string;
}
const Page = () => {
  // State to control the visibility of the Address component
  const [currentStep, setCurrentStep] = useState<'cart' | 'checkout' | 'order-summary'>('cart');
  const [orderDetails, setOrderDetails] = useState();
  
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
  const handleOrderSummary = async (ref: string) => {
    try {
      
      // Fetch order details from the API using the ref
      const response = await fetch(`/api/order/getorderbyref/${ref}`);
      
      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Failed to fetch order details');
      }
  
      // Parse the response data
      const orderData = await response.json();
     


      // Optionally, store the order details in the state if needed for display
      setOrderDetails(orderData);
      // Set the current step to show the order summary component
      setCurrentStep('order-summary');
    } catch (error) {
      console.error('Error fetching order details:', error);
      // Handle error (e.g., show error message)
    }
  };
  
  const handleCart = () => {
    setCurrentStep('cart');
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
          backcarte={handleCart}
        />
      )}
      {currentStep === 'order-summary' && (
        <OrderSummary
          data={orderDetails}
         
        />
      )}
    </div>
  );
};

export default Page;
