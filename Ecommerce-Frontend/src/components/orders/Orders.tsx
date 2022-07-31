import React, {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import agent from "../../API/Agent";
import LoadingComponent from "../errors/LoadingComponent";
import {Order} from "../../models/order";
import {Button} from "@material-ui/core";
import {currencyFormat} from "../../util/util";
import OrderDetailed from "./OrderDetailed";

const createData = (
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) => {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Orders = () => {
    const [orders,setOrders] = useState<Order[] | null>();
    const [loading,setLoading] = useState(true);
    const [selectedOrderNumber, setSelectedOrderNumber] = useState('00000000-0000-0000-0000-000000000000');
    useEffect(()=>{
        agent.Orders.list()
            .then(orders=>setOrders(orders))
            .catch(error => console.error(error))
            .finally(()=>setLoading(false))
    },[]);
    if(loading){
        return (
            <LoadingComponent message={'Loading orders...'}/>
        )
    }

    if (selectedOrderNumber !='00000000-0000-0000-0000-000000000000') return (
        <OrderDetailed
            order={orders?.find(o => o.id === selectedOrderNumber)!}
            setSelectedOrder={setSelectedOrderNumber}
        />
    )

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Order ID</TableCell>
                        <TableCell align="right">Total</TableCell>
                        <TableCell align="right">Order Date</TableCell>
                        <TableCell align="right">Order Status</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders?.map((order) => (
                        <TableRow
                            key={order.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {order.id}
                            </TableCell>
                            <TableCell align="right">{order.total}</TableCell>
                            <TableCell align="right">{order.orderDate.split('T')[0]}</TableCell>
                            <TableCell align="right">{order.orderStatus}</TableCell>
                            <TableCell align="right">
                                <Button onClick={() => setSelectedOrderNumber(order.id)}>
                                    View
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Orders;
