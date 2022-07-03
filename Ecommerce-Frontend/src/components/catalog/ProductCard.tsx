import React from 'react';
import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import {Product} from "../../models/product";
interface Props{
    product:Product
}
const ProductCard = ({product}:Props) => {
    return (
        <div>
            <ListItem key={product.id}>
                <ListItemAvatar>
                    <Avatar src={product.pictureUrl}/>
                </ListItemAvatar>
                <ListItemText>{product.name} - {product.price}</ListItemText>
            </ListItem>
        </div>
    );
};

export default ProductCard;