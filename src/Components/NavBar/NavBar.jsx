import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Logo from '../Cart/CartWidget'
import MainLogo from './MainLogo'
import MenuContainer from './navBarMenu/MenuContainer';
import { useCart } from '../../Contexts/CartContext';
import {useAuth} from '../../Contexts/AuthContext'
import Drawer from './navBarMenu/Drawer'
import {getFirebase} from '../../firebase';
import '../../Styles/styles.css'


const NavBar =  ()=> {
const cart = useCart()
const auth = useAuth();
const firebase = getFirebase();

return(
    <AppBar className="appBar">
    <Toolbar className="toolBar" position='relative'>
        <NavLink to="/" style={{textDecoration:'none', color:'inherit'}}><MainLogo/></NavLink>
        <IconButton className="iconButton" float="right" edge="start" color="inherit" aria-label="menu"/>
        <MenuContainer/>
        {auth.currentUser && <h2 className="userName">{auth.currentUser.displayName}</h2>}
         <IconButton color="inherit" aria-label="add to shopping cart">
        <NavLink to='/cart' style={{display: cart.cart.addedItems.length === 0 ? 'none' : 'block', textDecoration: 'none', color:'inherit'}} ><Logo/></NavLink>
      </IconButton>
        <Drawer/>
    </Toolbar>
    </AppBar>
);
};

export default NavBar;