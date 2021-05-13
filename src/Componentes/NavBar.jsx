import React from 'react';
import '../Styles/NavBar.css';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from './CartWidget';

const NavBar =  ()=> {
return(
    <AppBar className="appBar">
    <Toolbar className="toolBar">
        <IconButton className="iconButton" float="right" edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
        </IconButton>
        <Typography variant="h6">News</Typography>
        <Button float="right" color="inherit">Login</Button>
        <Logo />
    </Toolbar>
    </AppBar>
);
};




export default NavBar;