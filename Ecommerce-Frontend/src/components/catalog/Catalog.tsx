import React, {Fragment, useEffect, useState} from 'react';
import {Product} from "../../models/product";
import ProductList from "./ProductList";



const Catalog = () => {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(()=>{
        fetch('https://localhost:7194/api/Product')
            .then(response=>response.json())
            .then(data=>setProducts(data))
    },[])

    return (
        <Fragment>
            <ProductList products={products}/>

        </Fragment>
    );
};

export default Catalog;
