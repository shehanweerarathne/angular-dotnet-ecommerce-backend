import React from 'react';
import {
    Avatar, Button,
    Card,
    CardActions,
    CardContent, CardHeader,
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
                <CardHeader
                    avatar={<Avatar sx={{bgcolor:'secondary.main'}}>{product.name.charAt(0).toUpperCase()}</Avatar>}
                    title={product.name}
                    titleTypographyProps={{
                        sx:{fontWeight:'bold',color:'primary.main'}
                    }}

                />
                <CardMedia
                    sx={{height:140,backgroundSize:'container', bgcolor:'primary.light'}}
                    image={product.pictureUrl}
                    title={product.name}
                />
                <CardContent>
                    <Typography gutterBottom color={'secondary'} variant="h5">
                        Rs.{product.price.toFixed(2)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.brand} / {product.type}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Add to Cart</Button>
                    <Button size="small">View</Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default ProductCard;
