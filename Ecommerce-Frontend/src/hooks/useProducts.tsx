import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../store/configureStore";
import {fetchFilters, fetchProductsAsync, productSelectors} from "../components/catalog/catalogSlice";

const UseProducts = () => {
    const products = useAppSelector(productSelectors.selectAll);
    const {productsLoaded, status,filtersLoaded,brands,types,productParams,metaData} = useAppSelector(state => state.catalog);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!productsLoaded) dispatch(fetchProductsAsync());
    }, [productsLoaded, dispatch])
    useEffect(() => {
        if(!filtersLoaded) dispatch(fetchFilters());
    }, [ dispatch,filtersLoaded])
    return {
        products,productsLoaded,filtersLoaded,brands,types,status,productParams,metaData
    }
};

export default UseProducts;
