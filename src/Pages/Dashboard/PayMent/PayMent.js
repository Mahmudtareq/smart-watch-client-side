import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import {loadStripe} from '@stripe/stripe-js';
import CheckOut from './CheckOut';
import { Elements} from '@stripe/react-stripe-js';
import useAuth from '../../../hooks/useAuth';

const stripePromise = loadStripe('pk_test_51Jw6ZyHt2IWvvlWqTSd7XcQkv6uE4Do59sIpEeAx1XiEfOXTByujVPTOZQvcyUBJhbgu4KuHyOQeaRNNinrtZBSZ00e3pKD3Db')
const PayMent = () => {
    const { user } = useAuth();
    const { orderId } = useParams();
    const [orders, setOrders] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${orderId}`)
            .then(res => res.json())
            .then(data => setOrders(data));
       
    }, [orderId ])
    return (
        <div>
            <h2>Payment Is Coming Soon :{orderId}</h2>
            <h2>Payment Is Coming Soon :$ {orders.ProductPrice}</h2>
          {orders?.ProductPrice &&  <Elements stripe={stripePromise}>
                <CheckOut
                   orders={orders}
                ></CheckOut>
            </Elements>}
        </div>
    );
};

export default PayMent;
