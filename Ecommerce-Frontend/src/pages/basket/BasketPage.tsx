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
import {useStoreContext} from "../../context/StoreContext";
import BasketSummary from "./basket-summary";
import {Link} from "react-router-dom";
axios.defaults.withCredentials = true;
const BasketPage = () => {
    const {basket,setBasket,removeItem} = useStoreContext();
    const [status, setStatus] = useState({
        loading: false,
        name: ''
    });
    // const  [basket, setBasket] = useState<Basket | null>(null);
    // // const { basket, setBasket, removeItem } = useStoreContext();
    // const [loading,setLoading] = useState(true);
    // useEffect(()=>{
    //     agent.Basket.get()
    //         .then(basket=>setBasket(basket))
    //         .catch(error=>console.log(error))
    //         .finally(()=>setLoading(false));
    // },[]);
    //
    //
    //
    // if(loading) return <LoadingComponent message={'Loading basket...'}/>
    const handleAddItem = (productId: string, name: string) => {
        setStatus({ loading: true, name });
        agent.Basket.addItem(productId)
            .then(basket => setBasket(basket))
            .catch(error => console.log(error))
            .finally(() => setStatus({ loading: false, name: '' }))
    }
    const handleRemoveItem = (productId: string, quantity = 1, name: string) => {
        setStatus({ loading: true, name });
        agent.Basket.removeItem(productId, quantity)
            .then(() => removeItem(productId, quantity))
            .catch(error => console.log(error))
            .finally(() => setStatus({ loading: false, name: '' }));
    }

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
                                        loading={status.loading && status.name === 'rem' + item.productId}
                                        onClick={() => handleRemoveItem(item.productId, 1, 'rem' + item.productId)}
                                        color='error'
                                    >
                                        <Remove />
                                    </LoadingButton>
                                    {item.quantity}
                                    <LoadingButton
                                        loading={status.loading && status.name === 'add' + item.productId}
                                        onClick={() => handleAddItem(item.productId, 'add' + item.productId)}
                                        color='secondary'
                                    >
                                        <Add />
                                    </LoadingButton>
                                </TableCell>
                                <TableCell align={'right'}>{(item.price * item.quantity).toFixed(2)}</TableCell>
                                <TableCell align="right">
                                    <LoadingButton
                                        loading={status.loading && status.name === 'del' + item.productId}
                                        onClick={() => handleRemoveItem(item.productId, item.quantity, 'del' + item.productId)}
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
