import React, {useEffect, useState} from 'react';
import ProductList from "./ProductList";
import LoadingComponent from "../errors/LoadingComponent";
import agent from "../../API/Agent";
import {Product} from "../../models/product";
import {useAppDispatch,useAppSelector} from "../../store/configureStore";
import {fetchProductsAsync,productSelectors} from "./catalogSlice";

const Catalog = () => {

    const products = useAppSelector(productSelectors.selectAll);
    const {productsLoaded, status} = useAppSelector(state => state.catalog);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!productsLoaded) dispatch(fetchProductsAsync());
    }, [productsLoaded, dispatch])

    if (status.includes('pending')) return <LoadingComponent message='Loading products...' />
    return (
        <>
            <ProductList products={products} />
        </>
    );
};

export default Catalog;
