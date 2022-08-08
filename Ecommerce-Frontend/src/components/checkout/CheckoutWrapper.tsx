import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutPage from "./CheckoutPage";

const stripePromise = loadStripe('pk_test_51LRWjkBSfjvYFXmbcjYzNypjG1y9y8o52ei3uhvk0dIFyxb1Um5Bvdwjy3b2u9FRIEpJ51S3OoyzQoHMJNZg4suG00FfuDEgwr')

const CheckoutWrapper = () => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutPage/>
        </Elements>
    );
};

export default CheckoutWrapper;
