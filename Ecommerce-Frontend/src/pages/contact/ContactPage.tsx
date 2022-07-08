import React from 'react';
import {Button, ButtonGroup, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../store/configureStore";
import {decrement, increment} from "./counterSlice";

const ContactPage = () => {
    const dispatch = useAppDispatch();
    const {data,title} = useAppSelector(state=>state.counter)
    return (
        <div>
            <Typography variant={'h2'}>{title}</Typography>
            <Typography variant={'h4'}>{data}</Typography>
            <ButtonGroup>
                <Button onClick={()=>dispatch(decrement(1))} variant={'contained'} color={'error'}>Decrement</Button>
                <Button onClick={()=>dispatch(increment(1))} variant={'contained'} color={'primary'}>Increment</Button>
                <Button onClick={()=>dispatch(increment(5))} variant={'contained'} color={'warning'}>Increment by 5</Button>
            </ButtonGroup>
        </div>
    );
};

export default ContactPage;
