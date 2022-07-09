import React, {useEffect} from 'react';

import {
    Button,
    Divider,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import { useState } from "react";


import axios from "axios";
import agent from "../../API/Agent";
import {Add, Delete, Remove} from "@mui/icons-material";
import {LoadingButton} from "@material-ui/lab";
import {Box,  Grid} from "@material-ui/core";
import BasketSummary from "./basket-summary";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/configureStore";
import {addBasketItemAsync, removeBasketItemAsync, setBasket} from "./basketSlice";
axios.defaults.withCredentials = true;
const BasketPage = () => {
    const {basket} = useAppSelector(state => state.basket);
    const dispatch = useAppDispatch();



    if (!basket) return <Typography variant='h3'>Your basket is empty</Typography>
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="center">Quantity</TableCell>
                            <TableCell align="center">Add/Remove</TableCell>
                            <TableCell align="right">Subtotal</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {basket.items.map(item=>(
                            <TableRow
                                key={item.productId}
                            >
                                <TableCell component="th" scope="row">
                                    <Box display='flex' alignItems='center'>
                                        <img src={item.pictureUrl} alt={item.name} style={{ height: 50, marginRight: 20 }} />
                                        <span>{item.name}</span>
                                    </Box>
                                </TableCell>
                                <TableCell align={'center'}>{item.price}</TableCell>
                                <TableCell align={'center'}>{item.quantity}</TableCell>

                                <TableCell align="center">
                                    <LoadingButton
                                        loading={status===('pendingRemoveItem' + item.productId)}
                                        onClick={() => dispatch(removeBasketItemAsync({productId:item.productId,quantity:1}))}
                                        color='error'
                                    >
                                        <Remove />
                                    </LoadingButton>
                                    {item.quantity}
                                    <LoadingButton
                                        loading={status ===('pendingAddItem'+item.productId)}
                                        onClick={() => dispatch(addBasketItemAsync({productId:item.productId}))}
                                        color='secondary'
                                    >
                                        <Add />
                                    </LoadingButton>
                                </TableCell>
                                <TableCell align={'right'}>{(item.price * item.quantity).toFixed(2)}</TableCell>
                                <TableCell align="right">
                                    <LoadingButton
                                        loading={status===('pendingRemoveItem'+item.productId)}
                                        onClick={() => dispatch(removeBasketItemAsync({productId:item.productId,quantity:item.quantity}))}
                                        color='error'
                                    >
                                        <Delete />
                                    </LoadingButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid container>
                <Grid item xs={6} />
                <Grid item xs={6}>
                    <BasketSummary />
                    <Button
                        component={Link}
                        to='/checkout'
                        variant='contained'
                        size='large'
                        fullWidth
                    >
                        Checkout
                    </Button>
                </Grid>
            </Grid>
        </>
    );
    

};

export default BasketPage;
