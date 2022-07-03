import React from 'react';
import {AppBar, Toolbar, Typography} from "@mui/material";

const Header = () => {
    return (
        <div>
            <AppBar position={'static'} sx={{mb:4}}>
                <Toolbar>
                    <Typography variant={'h6'}>Re-Store</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;