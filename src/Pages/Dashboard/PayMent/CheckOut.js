import React, { useState,useEffect } from 'react';
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import useAuth from '../../../hooks/useAuth';
import { CircularProgress } from '@mui/material';

const CheckOut = ({ orders }) => {
    const { ProductPrice,ProductName ,_id} = orders;
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [processing, setProcessing] = useState(false);
  const { user } = useAuth();
    const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');
  useEffect(() => {
    fetch('http://localhost:5000/create-payment-intent', {
      method: 'POSt',
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify({ ProductPrice }),
    })
      .then(res => res.json())
      .then(data =>setClientSecret(data.clientSecret));
  }, [ProductPrice])
  
   
    const handleSubmit = async (e) => {
         e.preventDefault();
         if (!stripe || !elements) {
          return;
          }
        const card = elements.getElement(CardElement);
        if (card === null) {
        return;
      }
      setProcessing(true);
          // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

        if (error) {
          setError(error.message);
          setSuccess('');
        } else {
          setError('');
          console.log(paymentMethod);
      }
      // payment intent 
  const {paymentIntent ,error:intentError}  =await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: card,
      billing_details: {
        name: ProductName,
        email :user.email
      },
    },
  })
      if (intentError) {
        setError(intentError.message);
        setSuccess('');
      }
      else {
        setError('');
        setSuccess('Your Payment is successfully !')
        console.log(paymentIntent);
        setProcessing(false);
        //save to database
        const payment = {
          amount: paymentIntent.amount,
          created: paymentIntent.created,
          last4 :paymentMethod.card.last4,
          transaction: paymentIntent.client_secret.slice('__secret')[0]
          
        }
        const url = `http://localhost:5000/orders/${_id}`;
        fetch(url, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(payment)
        })
          .then(res => res.json())
          .then(data => console.log(data));
      }
     

    }
    return (
    <div>
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
     {processing ?<CircularProgress></CircularProgress> : <button type="submit" disabled={!stripe || success}>
        Pay ${ProductPrice}
      </button>}
            </form>
            {
              error && <p style={{color:'red'}}>{error}</p>  
            }
            {
              success && <p style={{color:'green'}}>{success}</p>  
            }
</div>
    );
};

export default CheckOut;