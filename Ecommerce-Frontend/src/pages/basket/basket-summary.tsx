import React from 'react';
import { TableContainer, Paper, Table, TableBody, TableRow, TableCell } from "@mui/material";
import {currencyFormat} from "../../util/util";
import {useStoreContext} from "../../context/StoreContext";

const BasketSummary = () => {


    const {basket} = useStoreContext();


    let subTotal = 0;
    let deliveryFee = 1000;
    if(basket){
        subTotal = basket.items.reduce((sum, item) => sum + (item.quantity*item.price), 0)
    }
console.log(subTotal)

    return (
        <>
            <TableContainer component={Paper} variant={'outlined'}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell colSpan={2}>Subtotal</TableCell>
                            <TableCell align="right">{subTotal}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Delivery fee*</TableCell>
                            <TableCell align="right">{deliveryFee}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Total</TableCell>
                            <TableCell align="right">{subTotal + deliveryFee}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <span style={{fontStyle: 'italic'}}>*Orders over $100 qualify for free delivery</span>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default BasketSummary;
