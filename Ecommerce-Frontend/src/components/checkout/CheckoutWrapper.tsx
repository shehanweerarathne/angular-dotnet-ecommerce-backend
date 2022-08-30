import React, {useEffect, useState} from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutPage from "./CheckoutPage";
import {useAppDispatch} from "../../store/configureStore";
import agent from "../../API/Agent";
import {setBasket} from "../../pages/basket/basketSlice";
import LoadingComponent from "../errors/LoadingComponent";

const stripePromise = loadStripe('pk_test_51LRWjkBSfjvYFXmbcjYzNypjG1y9y8o52ei3uhvk0dIFyxb1Um5Bvdwjy3b2u9FRIEpJ51S3OoyzQoHMJNZg4suG00FfuDEgwr')

const CheckoutWrapper = () => {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        agent.Payments.createPaymentIntent()
            .then(basket => dispatch(setBasket(basket)))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [dispatch]);
    if (loading) return <LoadingComponent message={'Loading checkout...'}/>
    return (
        <Elements stripe={stripePromise}>
            <CheckoutPage/>
        </Elements>
    );
};

export default CheckoutWrapper;
