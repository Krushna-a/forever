import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const PaymentForm = ({ cartData, total }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    try {
      // create PaymentIntent
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/api/payments/create-payment-intent`, {
        items: cartData.map((item) => ({
          id: item._id,
          price: item.price,
          qty: item.quantity
        }))
      });

      const { clientSecret } = data;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)
        }
      });

      if (result.error) {
        alert(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          alert("Payment successful!");
          // Optionally confirm order to backend
          await axios.post(`${import.meta.env.VITE_API_URL}/api/orders/confirm`, {
            paymentIntentId: result.paymentIntent.id,
            items: cartData
          });
        }
      }
    } catch (err) {
      console.error(err);
      alert("Payment failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <CardElement className="p-3 border rounded" />
      <button
        type="submit"
        disabled={!stripe || loading}
        className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800"
      >
        {loading ? "Processing..." : `Pay ₹${total + 10}`}
      </button>
    </form>
  );
};

export default PaymentForm;
