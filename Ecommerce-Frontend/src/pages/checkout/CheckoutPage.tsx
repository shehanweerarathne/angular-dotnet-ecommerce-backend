import React from 'react';
import { Typography } from "@mui/material";
import {useAppSelector} from "../../store/configureStore";
import { Navigate } from 'react-router-dom';
const CheckoutPage = () => {
    const {user} = useAppSelector(state => state.account);
    if (!user || user==null){
        return <Navigate to="/" replace />;
    }

    return (
        <Typography variant='h3'>
            Only logged in users should be able to see this!
        </Typography>
    );
};

export default CheckoutPage;
