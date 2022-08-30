import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import React, {useEffect, useState} from 'react';
import {useForm, FormProvider, FieldValues} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {validationSchema} from "./CheckoutValidation";
import * as yup from 'yup';
import {useAppDispatch, useAppSelector} from "../../store/configureStore";
import agent from "../../API/Agent";
import {clearBasket} from "../../pages/basket/basketSlice";
import {LoadingButton} from "@material-ui/lab";
import {StripeElementType} from "@stripe/stripe-js";
import {CardNumberElement, useElements, useStripe} from "@stripe/react-stripe-js";





const steps = ['Shipping address', 'Payment details', 'Review your order'];




const CheckoutPage = () => {

    const [activeStep, setActiveStep] = useState(0);
    const [orderNumber, setOrderNumber] = useState('00000000-0000-0000-0000-000000000000');
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();
    const [cardState, setCardState] = useState<{elementError: {[key in StripeElementType]?: string}}>({elementError:{}});
    const [cardComplete, setCardComplete] = useState<any>({cardNumber:false,cardExpiry:false,cardCvc:false});
    const [paymentMessage, setPaymentMessage] = useState('');
    const [paymentSucceeded, setPaymentSucceeded] = useState(false);
    const {basket} = useAppSelector(state => state.basket);
    const stripe = useStripe();
    const elements = useElements();


    const onCardInputChange = (event:any) => {
        setCardState({
            ...cardState,
            elementError:{
                ...cardState.elementError,
                [event.elementType]: event.error?.message
            }
        });
        setCardComplete({...cardComplete,[event.elementType]: event.complete});
    }
    const getStepContent = (step:number) => {
        switch (step) {
            case 0:
                return <AddressForm />;
            case 1:
                return <Review />;
            case 2:
                return <PaymentForm cardState={cardState} onCardInputChange={onCardInputChange} />;
            default:
                throw new Error('Unknown step');
        }
    }

    const currentValidationSchema = validationSchema[activeStep];

    const methods = useForm({
        mode: 'all',
        resolver: yupResolver(currentValidationSchema)
    });

    useEffect(() => {
        agent.Account.fetchAddress()
            .then(response => {
                if (response) {
                    methods.reset({...methods.getValues(), ...response, saveAddress: false})
                }
            })
    }, [methods]);

    const submitOrder = async (data: FieldValues) =>  {
        setLoading(true);
        const {nameOnCard, saveAddress, ...shippingAddress} = data;
        if (!stripe || !elements) return; //stripe is not ready
        try{
            const cardElement = elements?.getElement(CardNumberElement);
            const paymentResult = await stripe.confirmCardPayment(basket?.clientSecret!,{
                payment_method:{
                    card: cardElement!,
                    billing_details:{
                        name: nameOnCard
                    }
                }
            });
            console.info(paymentResult);
            if(paymentResult.paymentIntent?.status === 'succeeded'){
                const orderNumber = await agent.Orders.create({saveAddress, shippingAddress});
                setOrderNumber(orderNumber);
                setPaymentSucceeded(true);
                setPaymentMessage('Thank you - we have received your payment')
                setActiveStep(activeStep + 1);
                dispatch(clearBasket());
                setLoading(false);
                setActiveStep(activeStep + 1);

            } else {
                setPaymentMessage(paymentResult.error?.message!);
                setPaymentSucceeded(false);
                setLoading(false)
            }

        }catch (e){
            console.error(e);
            setLoading(false);
        }
    }


    const handleNext = async (data: FieldValues) => {
        if (activeStep === steps.length - 1) {
            await submitOrder(data);
        } else {
            setActiveStep(activeStep + 1);
        }
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };
    const submitDisabled = ():boolean => {
      if (activeStep === steps.length -1){
          return !cardComplete.cardCvc || !cardComplete.cardExpiry || !cardComplete.cardNumber || !methods.formState.isValid
      } else {
          return !methods.formState.isValid
      }
    }

    return (
        <FormProvider {...methods}>
            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                <Typography component="h1" variant="h4" align="center">
                    Checkout
                </Typography>
                <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <>
                    {activeStep === steps.length ? (
                        <>
                            <Typography variant="h5" gutterBottom>
                                {paymentMessage}
                            </Typography>
                            {paymentSucceeded ? (
                                <Typography variant="subtitle1">
                                    Your order number is #{orderNumber}. We have not emailed your order
                                    confirmation, and will not send you an update when your order has
                                    shipped as this is a fake store!
                                </Typography>
                            ):(
                                <Button variant={'contained'} onClick={handleBack}>Try again</Button>
                            )}

                        </>
                    ) : (
                        <form onSubmit={methods.handleSubmit(handleNext)}>
                            {getStepContent(activeStep)}
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                {activeStep !== 0 && (
                                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                        Back
                                    </Button>
                                )}
                                <LoadingButton
                                    loading={loading}
                                    disabled={submitDisabled()}
                                    variant="contained"
                                    type='submit'
                                    sx={{ mt: 3, ml: 1 }}
                                >
                                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                </LoadingButton>
                            </Box>
                        </form>
                    )}
                </>
            </Paper>
        </FormProvider>
    );
};

export default CheckoutPage;
