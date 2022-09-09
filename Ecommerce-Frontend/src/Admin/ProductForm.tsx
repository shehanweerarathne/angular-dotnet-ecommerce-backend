import React, {useEffect} from 'react';
import {Box, Button, Grid, Paper, Typography} from "@material-ui/core";
import AppTextInput from "../components/app-text-input/AppTextInput";
import {FieldValues, useForm} from "react-hook-form";
import {Product} from "../models/product";
import {yupResolver} from "@hookform/resolvers/yup";
import {useAppDispatch} from "../store/configureStore";
import useProducts from "../hooks/useProducts";
import AppSelectList from "../components/app-select-list/AppSelectList";
import AppDropzone from "../components/app-dropzone/AppDropzone";
import {validationSchema} from "./productValidation";

interface Props {
    product?: Product;
    cancelEdit: () => void;
}


const ProductForm = ({ product, cancelEdit }: Props) => {
    const { control, reset, handleSubmit, watch, formState: {isDirty, isSubmitting} } = useForm({
        mode: 'all',
        resolver: yupResolver<any>(validationSchema)
    });
    const { brands, types } = useProducts();
    const watchFile = watch('file', null);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (product && !watchFile  && !isDirty) reset(product);
        return () => {
            if (watchFile) URL.revokeObjectURL(watchFile.preview);
        }
    }, [product, reset, watchFile, isDirty]);

    async function handleSubmitData(data: FieldValues) {
        try {
            let response: Product;
            console.log(data)
            // if (product) {
            //     response = await agent.Admin.updateProduct(data);
            // } else {
            //     response = await agent.Admin.createProduct(data);
            // }
            // dispatch(setProduct(response));
            cancelEdit();
        } catch (error) {
            console.log(error)
        }
    }    return (
        <Box component={Paper} sx={{p:4}}>
            <Typography variant={"h4"} gutterBottom={true} sx={{mb:4}}>
                Product Details
            </Typography>
            <form onSubmit={handleSubmit(handleSubmitData)}>
            <Grid container={true} spacing={3}>
                <Grid item={true} xs={12} sm={12}>
                    <AppTextInput label={'Product Name'} name={'name'} control={control}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <AppSelectList items={brands} control={control} name='brand' label='Brand' />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <AppSelectList items={types} control={control} name='type' label='Type' />
                </Grid>
                <Grid item={true} xs={12} sm={6}>
                    <AppTextInput type={'number'} label={'Product Price'} name={'price'} control={control}/>
                </Grid>
                <Grid item={true} xs={12} sm={6}>
                    <AppTextInput type={'number'} label={'Quantity In Stock'} name={'quantityInStock'} control={control}/>
                </Grid>
                <Grid item={true} xs={12} sm={12}>
                    <AppTextInput multiline={true} rows={6} label={'Description'} name={'description'} control={control}/>
                </Grid>
                <Grid item={true} xs={12} sm={6}>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <AppDropzone  name={'file'} control={control}/>
                        {watchFile ? (
                            <img src = {watchFile.preview} alt={'preview'} style={{maxHeight:200}}/>
                        ):(
                            <img src = {product?.pictureUrl} alt={'preview'} style={{maxHeight:200}}/>
                        )}
                    </Box>
                </Grid>
            </Grid>
            <Box display={'flex'} justifyContent={'space-between'} sx={{mt:3}}>
                <Button variant={'contained'} color={'inherit'}>Cancel</Button>
                <Button type={'submit'} variant={'contained'} color={'success'}>Submit</Button>

            </Box>
            </form>
        </Box>
    );
};

export default ProductForm;
