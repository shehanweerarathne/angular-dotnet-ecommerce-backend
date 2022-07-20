import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {Button, Container, Divider, Paper, Typography} from "@material-ui/core";


const ServerError = () => {


    const navigate = useNavigate();


    return (
        <Container component={Paper}>

            <Button onClick={() => navigate('/catalog')}>Go back to the store</Button>
        </Container>
    );
};

export default ServerError;
