import {Button, Menu, MenuItem} from '@material-ui/core';
import React from 'react';
import {useAppDispatch, useAppSelector} from "../../store/configureStore";
import {signOut} from "../../pages/Account/accountSlice";
import {useNavigate} from "react-router-dom";

const SignedInMenu = () => {
    const dispatch = useAppDispatch();
    const {user} = useAppSelector(state => state.account);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const navigate = useNavigate()
    const onclickLogOut = () => {
        dispatch(signOut());
        navigate('/');
    }

    return (
        <>
            <Button
                color='inherit'
                onClick={handleClick}
                sx={{ typography: 'h6' }}
            >
                {user?.email}
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My orders</MenuItem>
                <MenuItem onClick={()=>onclickLogOut()}>Logout</MenuItem>
            </Menu>
        </>
    );
};

export default SignedInMenu;
