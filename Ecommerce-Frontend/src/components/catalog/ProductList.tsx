import React from 'react';
import {Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import {Product} from "../../models/product";
import ProductCard from "./ProductCard";

interface Props{
    products:Product[]
}

const ProductList = ({products}:Props) => {
    return (
        <>
            <Grid alignItems={'center'} container spacing={3}>
                {products.map((product) =>(
                    <Grid  key={product.id} item xs={12} sm={6} md={4} lg={3} xl={2.4}>
                        <ProductCard  product={product}/>
                    </Grid>

                ))}
            </Grid>
        </>
    );
};

export default ProductList;
