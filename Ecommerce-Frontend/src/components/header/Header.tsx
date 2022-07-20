import React from 'react';
import {
    Badge,
    AppBar,
    IconButton,
    List,
    ListItem,
    Toolbar,
    Typography,
    Box,
    Switch,
    Drawer,
    Divider,
    ListItemButton,
    ListItemText
} from "@mui/material";
import {Link, NavLink} from "react-router-dom";
import {ShoppingCart} from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import {useAppSelector} from "../../store/configureStore";
import SignedInMenu from "./SignedInMenu";


interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
    window?: () => Window;
}

const midLinks = [
    {title: 'catalog', path: '/catalog'},
    {title: 'about', path: '/about'},
    {title: 'contact', path: '/contact'}
];
const rightLinks = [
    {title: 'register', path: '/register'},
    {title: 'login', path: '/login'}
];
const navStyles = {
    color: 'inherit',
    typography: 'h6',
    '&:hover': {color: 'grey.500'},
    '&.active': {color: 'text.secondary'}
}
const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];
const Header = ({darkMode, handleThemeChange, window}: Props) => {
    const {basket} = useAppSelector(state => state.basket);
    const {user} = useAppSelector(state => state.account);


    let itemCount = 0;
    if (basket) {
        itemCount = basket.items.reduce((sum, item) => sum + item.quantity, 0)
    }


    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center', color: 'inherit'}}>
            <Typography variant="h6" sx={{my: 2}}>
                MUI
            </Typography>
            <Divider/>
            <List>
                {midLinks.map(({title, path}) => (
                    <ListItem key={path} component={NavLink}
                              to={path} disablePadding>
                        <ListItemButton sx={{textAlign: 'center'}}>
                            <ListItemText primary={title}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    const container = window !== undefined ? () => window().document.body : undefined;
    return (

        <Box sx={{display: 'flex'}}>
            <AppBar component="nav">
                <Toolbar>
                    <Box display={'flex'} alignItems={'center'}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{mr: 2, display: {sm: 'none'}}}
                        >
                            <MenuIcon/>
                        </IconButton>

                        <Typography component={NavLink}
                                    to={'/'}
                                    variant={'h6'}
                                    sx={{color: 'inherit', textDecoration: 'none'}}>
                            Re-Store
                        </Typography>

                        <Switch checked={darkMode} onChange={handleThemeChange}/>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                        >
                            MUI
                        </Typography>
                    </Box>
                    <Box sx={{display: {xs: 'none', sm: 'block', md: 'flex', lg: 'flex', xl: 'flex'}}}
                         alignItems={'center'}>
                        <List sx={{display: 'flex'}}>
                            {midLinks.map(({title, path}) => (
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
                        <IconButton component={Link} to={'/basket'} size={'large'} sx={{color: 'inherit'}}>
                            <Badge badgeContent={itemCount} color={'secondary'}>
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                        {user ? (
                            <SignedInMenu/>
                        ) : (
                            <List sx={{display: 'flex'}}>
                                {rightLinks.map(({title, path}) => (
                                    <ListItem
                                        component={NavLink}
                                        to={path}
                                        key={path}
                                        sx={navStyles}
                                    >
                                        {title.toUpperCase()}
                                    </ListItem>
                                ))}
                            </List>
                        )}

                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
};

export default Header;
