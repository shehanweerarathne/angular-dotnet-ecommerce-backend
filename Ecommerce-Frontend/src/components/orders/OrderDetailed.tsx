import Box from '@material-ui/core/Box';
import React from 'react';
import {Order} from "../../models/order";
import {Button, Grid, Typography} from "@material-ui/core";
import BasketTable from "../../pages/basket/BasketTable";
import {BasketItem} from "../../models/basket";
import BasketSummary from "../../pages/basket/basket-summary";

interface Props {
    order: Order;
    setSelectedOrder: (id: string) => void;
}

const OrderDetailed = ({ order, setSelectedOrder }: Props) => {
    const subtotal = order.orderItems.reduce((sum, item) => sum + (item.quantity * item.price), 0) ?? 0;
    return (
        <>
            <Box display='flex' justifyContent='space-between'>
                <Typography sx={{ p: 2 }} gutterBottom variant='h4'>Order# {order.id} - {order.orderStatus}</Typography>
                <Button onClick={() => setSelectedOrder('00000000-0000-0000-0000-000000000000')} sx={{ m: 2 }} size='large' variant='contained'>Back to orders</Button>
            </Box>
            <BasketTable items={order.orderItems as BasketItem[]} isBasket={false} />
            <Grid container>
                <Grid item xs={6} />
                <Grid item xs={6}>
                    <BasketSummary subtotal={subtotal} />
                </Grid>
            </Grid>
        </>
    );
};

export default OrderDetailed;
