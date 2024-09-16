import React from 'react';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

interface PaypalButtonProps {
  amount: string;
  onSuccess: (details: any) => void;
}

const PaypalButton: React.FC<PaypalButtonProps> = ({ amount, onSuccess }) => {
  return (
   <PayPalScriptProvider
      options={{
        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
        currency: 'USD',
      }}
    >
      <PayPalButtons
        createOrder={async (data, actions) => {
          try {
            const response = await fetch('/api/paypal/create-order', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ amount }),
            });

            if (!response.ok) {
              throw new Error('Failed to create order');
            }
            
            const order = await response.json();
            console.log(order)
            return order.id; // Pass the order ID to PayPal
          } catch (error) {
            console.error('Error creating PayPal order:', error);
            return Promise.reject('Order creation failed');
          }
        }}
        onApprove={async (data, actions) => {
          try {
            const details = await actions.order?.capture();
            if (details) {
              onSuccess(details); // Call the onSuccess callback with details
            }
          } catch (error) {
            console.error('Error capturing order:', error);
          }
        }}
        onError={(err) => {
          console.error('PayPal Error:', err);
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PaypalButton;
