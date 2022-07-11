import React, {useEffect, useState} from 'react';
import ProductList from "./ProductList";
import LoadingComponent from "../errors/LoadingComponent";
import agent from "../../API/Agent";
import {Product} from "../../models/product";
import {useAppDispatch,useAppSelector} from "../../store/configureStore";
import {fetchFilters, fetchProductsAsync, productSelectors} from "./catalogSlice";
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Grid, Pagination,
    Paper,
    Radio,
    RadioGroup, Stack,
    TextField, Typography
} from "@mui/material";
import {Box} from "@mui/system";

const sortOptions = [
    {value:'name', lable: 'Alphabetical'},
    {value:'priceDec', lable: 'Price - High to Low'},
    {value:'price', lable: 'Price - Low to High'}
]

const Catalog = () => {

    const products = useAppSelector(productSelectors.selectAll);
    const {productsLoaded, status,filtersLoaded,brands,types} = useAppSelector(state => state.catalog);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!productsLoaded) dispatch(fetchProductsAsync());
    }, [productsLoaded, dispatch])
    useEffect(() => {
        if(!filtersLoaded) dispatch(fetchFilters());
    }, [ dispatch,filtersLoaded])

    if (status.includes('pending')) return <LoadingComponent message='Loading products...' />
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
                <Paper sx={{mb:2}}>
                    <TextField label={'Search Products'} variant={'outlined'} fullWidth={true}/>
                </Paper>
                <Paper sx={{mb:2,p:2}}>
                    <FormControl>
                        <RadioGroup>
                            {sortOptions.map(({value,lable})=>(
                                <FormControlLabel value={value} control={<Radio />} label={lable} />
                            ))}
                        </RadioGroup>
                    </FormControl>
                </Paper>
                <Paper sx={{mb:2,p:2}}>
                    <FormGroup>
                        {brands.map(brand=>(<FormControlLabel control={<Checkbox defaultChecked />} label={brand} key={brand} />))}

                    </FormGroup>
                </Paper>
                <Paper sx={{mb:2,p:2}}>
                    <FormGroup>
                        {types.map(type=>(<FormControlLabel control={<Checkbox defaultChecked />} label={type} key={type} />))}

                    </FormGroup>
                </Paper>
            </Grid>
            <Grid item xs={12} md={9}>
                <ProductList products={products} />
            </Grid>
            <Grid item={true} xs={12} md={3}/>
            <Grid item={true}  md={9}>
                <Stack spacing={2} justifyContent={'center'}>
                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Typography display={{xs:'none'}}>Displaying 1-6 of 20 items</Typography>
                        <Pagination count={10} color="secondary" page={2} />
                    </Box>

                </Stack>
            </Grid>
        </Grid>
    );
};

export default Catalog;
