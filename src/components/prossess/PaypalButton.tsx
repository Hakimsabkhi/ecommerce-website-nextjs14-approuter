import React from 'react';
import {  PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

interface PaypalButtonProps {
  amount: string;
  onSuccess: (details: any) => void;
}

const PaypalButton: React.FC<PaypalButtonProps> = ({ amount, onSuccess }) => {
  return (
    <PayPalScriptProvider
      options={{
        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ?? '',
        currency: 'USD',
      }}
    >
      <PayPalButtons
        
        createOrder={async (data: any, actions: any) => {
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
            return order.id; // Pass the order ID to PayPal
          } catch (error) {
            console.error('Error creating PayPal order:', error);
            return Promise.reject('Order creation failed');
          }
        }}
        onApprove={async (data: { orderID: string; payerID: string }, actions: any) => {
          try {
            const response = await fetch('/api/paypal/execute-order', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                orderID: data.orderID,
                payerID: data.payerID,
              }),
            });

            if (!response.ok) {
              throw new Error(`Failed to capture order: ${response.statusText}`);
            }

            const result = await response.json();
           

            // Call the onSuccess handler passed in props
            onSuccess(result);
          } catch (error) {
            console.error('Error capturing PayPal order:', error);
            // Optionally handle the error, e.g., show a notification to the user
          }
        }}
        onError={(err: any) => {
          console.error('PayPal Error:', err);
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PaypalButton;
