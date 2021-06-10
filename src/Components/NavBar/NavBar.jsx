import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import buttonStyle from '../material-ui/Buttons'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import MainLogo from './MainLogo'
import '../../Styles/NavBar.css';
import MenuContainer from './navBarMenu/MenuContainer';

const NavBar =  ()=> {
    const classes = buttonStyle();
return(
    <AppBar className="appBar">
    <Toolbar className="toolBar" position='relative'>
        <NavLink to="/" style={{textDecoration:'none', color:'inherit'}}><MainLogo/></NavLink>
        <IconButton className="iconButton" float="right" edge="start" color="inherit" aria-label="menu"/>
        <MenuContainer/>
        <Button variant="outlined">LOGIN</Button>
        <IconButton color="inherit" aria-label="add to shopping cart">
            <AddShoppingCartIcon/>
      </IconButton>
        <MenuIcon/>
    </Toolbar>
    </AppBar>
);
};


export default NavBar;