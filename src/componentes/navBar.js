import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const NavBar =  ()=> {
return( 
    <AppBar position="static">
    <Toolbar>
        <IconButton  float="right" edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
        </IconButton>
        <Typography variant="h6">News</Typography>
        <Button float="right" color="inherit">Login</Button>
    </Toolbar>
    </AppBar>
);
};


export default NavBar;