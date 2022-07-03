import React from 'react';
import {
    Avatar, Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography
} from "@mui/material";
import {Product} from "../../models/product";
interface Props{
    product:Product
}
const ProductCard = ({product}:Props) => {
    return (
        <div>
            <Card>
                <CardMedia
                    component="img"
                    height="140"
                    image={product.pictureUrl}
                    alt={product.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">{product.price}</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
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