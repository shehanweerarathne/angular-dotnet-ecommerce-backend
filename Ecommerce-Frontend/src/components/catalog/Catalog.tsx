import React, {Fragment} from 'react';
import {Product} from "../../models/product";
import {Button} from "@mui/material";
import ProductList from "./ProductList";

interface Props{
    products:Product[];
    addProduct:()=>void;
}

const Catalog = ({products,addProduct}:Props) => {
    return (
        <Fragment>
            <h1>This is catalog component</h1>
            <ProductList products={products}/>
            <Button variant={'contained'} onClick={addProduct}>Add new product</Button>
        </Fragment>
    );
};

export default Catalog;
