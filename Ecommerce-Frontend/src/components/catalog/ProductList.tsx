import React from 'react';
import {Avatar, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import {Product} from "../../models/product";
import ProductCard from "./ProductCard";

interface Props{
    products:Product[]
}

const ProductList = ({products}:Props) => {
    return (
        <>
            <List>
                {products.map((product) =>(
                    // <ListItem key={product.id}>{product.name} - {product.price}</ListItem>
                    <ProductCard key={product.id} product={product}/>
                ))}
            </List>
        </>
    );
};

export default ProductList;