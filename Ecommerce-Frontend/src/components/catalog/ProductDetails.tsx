import React, {useState, useEffect} from 'react';
import {Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import NotFound from "../errors/NotFound";
import LoadingComponent from "../errors/LoadingComponent";
import {LoadingButton} from "@material-ui/lab";
import {Product} from "../../models/product";
import {useAppDispatch, useAppSelector} from "../../store/configureStore";
import {addBasketItemAsync, removeBasketItemAsync, setBasket} from "../../pages/basket/basketSlice";
import {fetchProductAsync,productSelectors} from "./catalogSlice";

const ProductDetails = () => {
    const {basket,status} = useAppSelector(state => state.basket);
    const dispatch = useAppDispatch();
    const {id} = useParams<{ id: string }>();
    const [quantity, setQuantity] = useState(0);
    // @ts-ignore
    const product = useAppSelector(state => productSelectors.selectById(state, id));
    const {status: productStatus} = useAppSelector(state => state.catalog);
    const item = basket?.items.find(i => i.productId === product?.id);


    useEffect(() => {
        if (item) setQuantity(item.quantity);
        if (!product) if (id != null) {
            dispatch(fetchProductAsync(id));
        }
    }, [id, item, dispatch, product]);

    const handleUpdateCart = () => {
        if (!item) {
            dispatch(addBasketItemAsync({productId:product?.id!,quantity:1}))
        } else if (quantity > item.quantity) {
            const updatedQuantity = item ? quantity - item.quantity : quantity;
            dispatch(addBasketItemAsync({productId:product?.id!,quantity:updatedQuantity}))
        } else {
            const updatedQuantity = item.quantity - quantity;
            dispatch(removeBasketItemAsync({productId:product?.id!,quantity:updatedQuantity}));
        }
    }
    const handleInputChange = (event: any) => {
        if (event.target.value > 0) {
            setQuantity(parseInt(event.target.value));
        }
    }


    if (productStatus.includes('pending')) return <LoadingComponent message='Loading product...'/>

    if (!product) return <NotFound/>

    return (
        <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
                <img src={product.pictureUrl} alt={product.name} style={{width: '100%'}}/>
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant='h3'>{product.name}</Typography>
                <Divider sx={{mb: 2}}/>
                <Typography variant='h4' color='secondary'>${(product.price / 100).toFixed(2)}</Typography>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>{product.name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Description</TableCell>
                                <TableCell>{product.description}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Type</TableCell>
                                <TableCell>{product.type}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Brand</TableCell>
                                <TableCell>{product.brand}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Quantity in stock</TableCell>
                                <TableCell>{product.quantityInStock}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            variant='outlined'
                            type='number'
                            label='Quantity in Cart'
                            fullWidth
                            value={quantity}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <LoadingButton
                            disabled={item?.quantity === quantity}
                            loading={status.includes('pending')}
                            onClick={handleUpdateCart}
                            sx={{height: '55px'}}
                            color='primary'
                            size='large'
                            variant='contained'
                            fullWidth
                        >
                            {item ? 'Update Quantity' : 'Add to Cart'}
                        </LoadingButton>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ProductDetails;
