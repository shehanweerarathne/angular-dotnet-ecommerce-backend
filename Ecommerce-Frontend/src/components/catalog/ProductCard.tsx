import React, {useState} from 'react';
import {Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import {Product} from "../../models/product";
import {Link} from "react-router-dom";
import agent from "../../API/Agent";
import {LoadingButton} from "@material-ui/lab";
import axios from "axios";
import {Cookie} from "@mui/icons-material";
import {useStoreContext} from "../../context/StoreContext";
import {useAppDispatch} from "../../store/configureStore";
import {setBasket} from "../../pages/basket/basketSlice";


interface Props{
    product:Product
}
const ProductCard = ({product}:Props) => {


    const [loading,setLoading] = useState(false);
    const dispatch = useAppDispatch();


    const  handleAddItem = async (productId:string) => {
      setLoading(true);
      // const response = await axios.post(`basket?productId=${productId}&quantity=${1}`,{},{ withCredentials: true });
      //   const date = new Date();
      //   date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
      // console.log(response);
      // document.cookie =  "buyerId"+"="+response.data.buyerId+"; expires="+date.toUTCString()+"; path=/";
      //   setLoading(false)
      agent.Basket.addItem(productId)
          .then(basket=>dispatch(setBasket(basket)))
          .catch(error=>console.log(error))
          .finally(()=>setLoading(false));
    }


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
                    <LoadingButton loading={loading} onClick={()=>handleAddItem(product.id)} size="small">Add to Cart</LoadingButton>
                    <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default ProductCard;
