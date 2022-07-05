import React from 'react';
import {Badge, AppBar, IconButton, List, ListItem, Switch, Toolbar, Typography, Box} from "@mui/material";
import {NavLink} from "react-router-dom";
import {ShoppingCart} from "@mui/icons-material";


interface Props{
    darkMode:boolean;
    handleThemeChange: ()=>void;
}
const midLinks=[
    {title:'catalog',path:'/catalog'},
    {title:'about',path:'/about'},
    {title:'contact',path:'/contact'}
];
const rightLinks=[
    {title:'register',path:'/register'},
    {title:'login',path:'/login'}
];
const navStyles={
    color:'inherit',
    typography:'h6',
    '&:hover':{color:'grey.500'},
    '&.active':{color:'text.secondary'}
}

const Header = ({darkMode,handleThemeChange}:Props) => {
    return (
        <div>
            <AppBar position={'static'} sx={{mb:4}}>
                <Toolbar sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <Box display={'flex'} alignItems={'center'}>
                    <Typography component={NavLink}
                                to={'/'}
                                variant={'h6'}
                                sx={{color:'inherit',textDecoration:'none'}}>
                        Re-Store
                    </Typography>

                    <Switch checked={darkMode} onChange={handleThemeChange} />
                    </Box>
                <Box display={'flex'} alignItems={'center'}>
                    <List sx={{display:'flex'}}>
                        {midLinks.map(({title,path})=>(
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}
                            >{title.toUpperCase()}</ListItem>
                        ))}
                    </List>
                </Box>
                <Box display={'flex'} alignItems={'center'}>
                    <IconButton size={'large'} sx={{color: 'inherit'}}>
                        <Badge badgeContent={4} color={'secondary'}>
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>

                    <List sx={{display:'flex'}}>
                        {rightLinks.map(({title,path})=>(
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}
                            >{title.toUpperCase()}</ListItem>
                        ))}
                    </List>
                </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
