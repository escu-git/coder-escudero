import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import buttonStyle from '../material-ui/Buttons'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import MainLogo from './MainLogo'
import '../../Styles/NavBar.css';

const NavBar =  ()=> {
    const classes = buttonStyle();
return(
    <AppBar className="appBar">
    <Toolbar className="toolBar">
        <IconButton className="iconButton" float="right" edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
        </IconButton>
        <NavLink to="/" style={{textDecoration:'none', color:'inherit'}}><Typography variant="h6" className="completeCatalogue">Complete catalog🎨</Typography></NavLink>
        <NavLink to="/" style={{textDecoration:'none', color:'inherit'}}><MainLogo/></NavLink>
        <Button variant="outlined">LOGIN</Button>
        <IconButton color="inherit" aria-label="add to shopping cart">
            <AddShoppingCartIcon/>
      </IconButton>
    </Toolbar>
    </AppBar>
);
};


export default NavBar;