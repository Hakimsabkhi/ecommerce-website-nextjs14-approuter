import React from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

interface PaypalButtonProps {
  amount: string;
  onSuccess: (details: any) => void;
}

const PaypalButton: React.FC<PaypalButtonProps> = ({ amount, onSuccess }) => {
  return (
    <PayPalScriptProvider
      options={{
        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
        currency: "USD",
      }}
    >
      <PayPalButtons
        createOrder={(data, actions) => {
          return (
            actions.order?.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  amount: {
                    currency_code: "USD",
                    value: amount,
                  },
                },
              ],
            }) ?? Promise.reject("Order creation failed")
          );
        }}
        onApprove={async (data, actions) => {
          return (
            actions.order?.capture().then((details) => {
              onSuccess(details);
            }) ?? Promise.reject("Capture failed")
          );
        }}
        onError={(err) => {
          console.error("PayPal Error:", err);
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PaypalButton;
