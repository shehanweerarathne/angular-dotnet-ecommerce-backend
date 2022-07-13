import React from 'react';
import {Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import {Product} from "../../models/product";
import ProductCard from "./ProductCard";
import {useAppSelector} from "../../store/configureStore";
import ProductCardSkeleton from "./ProductCardSkeleton";

interface Props{
    products:Product[]
}

const ProductList = ({products}:Props) => {
    const {productsLoaded} = useAppSelector(state=>state.catalog);
    return (
        <>
            <Grid alignItems={'center'} container spacing={3}>
                {products.map((product) =>(
                    <Grid  key={product.id} item xs={12} sm={6} md={4} lg={4} xl={4}>
                        {!productsLoaded ? (<ProductCardSkeleton/>):(<ProductCard  product={product}/>)}

                    </Grid>

                ))}
            </Grid>
        </>
    );
};

export default ProductList;
