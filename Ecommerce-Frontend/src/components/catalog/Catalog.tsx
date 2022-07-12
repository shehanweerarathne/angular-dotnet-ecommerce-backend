import React, {useEffect, useState} from 'react';
import ProductList from "./ProductList";
import LoadingComponent from "../errors/LoadingComponent";
import agent from "../../API/Agent";
import {Product} from "../../models/product";
import {useAppDispatch,useAppSelector} from "../../store/configureStore";
import {fetchFilters, fetchProductsAsync, productSelectors, setProductParams} from "./catalogSlice";
import {Checkbox, FormControl, FormGroup, FormLabel, Grid, Pagination, Paper, Radio, RadioGroup, Stack, TextField, Typography
} from "@mui/material";
import {Box} from "@mui/system";
import ProductSearch from "./ProductSearch";
import RadioButtonGroup from "../radio-button-group/RadioButtonGroup";
import CheckboxButtons from "../checkbox-buttons/checkboxButtons";
import AppPagination from "../app-pagination/AppPagination";

const sortOptions = [
    {value:'name', lable: 'Alphabetical'},
    {value:'priceDesc', lable: 'Price - High to Low'},
    {value:'price', lable: 'Price - Low to High'}
]

const Catalog = () => {

    const products = useAppSelector(productSelectors.selectAll);
    const {productsLoaded, status,filtersLoaded,brands,types,productParams,metaData} = useAppSelector(state => state.catalog);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!productsLoaded) dispatch(fetchProductsAsync());
    }, [productsLoaded, dispatch])
    useEffect(() => {
        if(!filtersLoaded) dispatch(fetchFilters());
    }, [ dispatch,filtersLoaded])

    if (status.includes('pending') || !metaData) return <LoadingComponent message='Loading products...' />
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
                <Paper sx={{mb:2}}>
                    <ProductSearch/>
                </Paper>
                <Paper sx={{mb:2,p:2}}>
<RadioButtonGroup options={sortOptions} onChange={(e)=>dispatch(setProductParams({orderBy:e.target.value}))} selectedValue={productParams.orderBy}/>
                </Paper>
                <Paper sx={{mb:2,p:2}}>
                    <CheckboxButtons items={brands} checked={productParams.brands} onChange={(items:string[])=> dispatch(setProductParams({brands:items}))}/>
                </Paper>
                <Paper sx={{mb:2,p:2}}>
                    <CheckboxButtons items={types} checked={productParams.types} onChange={(items:string[])=> dispatch(setProductParams({types:items}))}/>
                </Paper>
            </Grid>
            <Grid item xs={12} md={9}>
                <ProductList products={products} />
            </Grid>
            <Grid item={true} xs={12} md={3}/>
            <Grid item={true}  md={9}>
                <Stack spacing={2} justifyContent={'center'}>
                    <AppPagination metaData={metaData} onPageChange={(page:number)=>dispatch(setProductParams({pageNumber:page}))}/>


                </Stack>
            </Grid>
        </Grid>
    );
};

export default Catalog;
